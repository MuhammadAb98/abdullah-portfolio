"use client"

import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import emailjs from "@emailjs/browser"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { Loader2, AlertTriangle } from "lucide-react"

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().optional(),
  message: z.string().min(10, "Message should be at least 10 characters"),
})

type FormValues = z.infer<typeof schema>

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ""
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ""
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""

export function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [emailJsReady, setEmailJsReady] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isDirty },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onChange",
  })

  const emailJsConfigured = EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY

  useEffect(() => {
    if (!emailJsConfigured) return
    try {
      emailjs.init({
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      setEmailJsReady(true)
    } catch (e) {
      setEmailJsReady(false)
      console.error("[v0] EmailJS init error:", e)
    }
  }, [emailJsConfigured])

  const onSubmit = async (values: FormValues) => {
    if (!emailJsConfigured) {
      toast({
        title: "EmailJS not configured",
        description:
          "Please set NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, and NEXT_PUBLIC_EMAILJS_PUBLIC_KEY in your environment variables.",
        variant: "destructive",
      })
      return
    }

    try {
      setIsSubmitting(true)

      const templateParams = {
        title: values.subject || "Portfolio Contact",
        name: values.name,
        message: values.message,
      }

      const result = await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)

      toast({
        title: "Message sent",
        description: "Thanks for reaching out. I'll get back to you shortly.",
      })
      reset()
    } catch (error: any) {
      const isKeyError =
        (error?.status === 400 && typeof error?.text === "string" && error.text.toLowerCase().includes("public key")) ||
        (typeof error?.message === "string" && error.message.toLowerCase().includes("public key"))

      toast({
        title: isKeyError ? "Invalid EmailJS Public Key" : "Something went wrong",
        description: isKeyError
          ? "Your EmailJS public key appears invalid. Confirm it matches the 'Public Key' from EmailJS dashboard (Account → API Keys) and redeploy."
          : "Your message could not be sent. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-white text-xl">Send a Message</CardTitle>
      </CardHeader>
      <CardContent>
        {!emailJsConfigured && (
          <div className="mb-4 flex items-start gap-2 rounded-md border border-amber-400/40 bg-amber-950/30 p-3 text-amber-300">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
            <p className="text-sm">
              EmailJS is not configured yet. Add your keys: NEXT_PUBLIC_EMAILJS_SERVICE_ID,
              NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, NEXT_PUBLIC_EMAILJS_PUBLIC_KEY.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name" className="text-slate-300 text-sm font-medium mb-2 block">
                Your Name
              </Label>
              <Input
                id="name"
                placeholder="Muhammad Abdullah"
                {...register("name")}
                aria-invalid={!!errors.name}
                className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-emerald-500 focus:ring-emerald-500/20"
              />
              {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>}
            </div>
            <div>
              <Label htmlFor="email" className="text-slate-300 text-sm font-medium mb-2 block">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                {...register("email")}
                aria-invalid={!!errors.email}
                className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-emerald-500 focus:ring-emerald-500/20"
              />
              {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>}
            </div>
          </div>

          <div>
            <Label htmlFor="subject" className="text-slate-300 text-sm font-medium mb-2 block">
              Subject
            </Label>
            <Input
              id="subject"
              placeholder="Project inquiry"
              {...register("subject")}
              className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-emerald-500 focus:ring-emerald-500/20"
            />
          </div>

          <div>
            <Label htmlFor="message" className="text-slate-300 text-sm font-medium mb-2 block">
              Message
            </Label>
            <Textarea
              id="message"
              placeholder="Write your message here..."
              rows={5}
              {...register("message")}
              aria-invalid={!!errors.message}
              className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-emerald-500 focus:ring-emerald-500/20 resize-none"
            />
            {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>}
          </div>

          <div className="flex items-center justify-between gap-3 pt-2">
            <p className="text-xs text-slate-400">This form uses EmailJS to send your message securely.</p>
            <Button
              type="submit"
              disabled={isSubmitting || !isValid || !isDirty}
              className="bg-emerald-600 hover:bg-emerald-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
