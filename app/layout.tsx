import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { MouseTracker } from "@/components/mouse-tracker"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Muhammad Abdullah - Senior Software Engineer",
  description:
    "Portfolio of Muhammad Abdullah, a Senior Software Engineer with 5 years of experience in React.js, Next.js, TypeScript, and Ruby on Rails.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-VWJTQHLPFX" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-VWJTQHLPFX', { page_path: window.location.pathname });`}
        </Script>

        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <MouseTracker />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
