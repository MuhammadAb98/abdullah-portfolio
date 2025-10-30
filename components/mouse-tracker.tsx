"use client"

import { useEffect, useRef } from "react"

interface Particle {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  life: number
  size: number
}

export function MouseTracker() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const particlesRef = useRef<Particle[]>([])
  const idRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }

      // Create particles at mouse position
      for (let i = 0; i < 2; i++) {
        const angle = Math.random() * Math.PI * 2
        const velocity = 1 + Math.random() * 2
        particlesRef.current.push({
          id: idRef.current++,
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * velocity,
          vy: Math.sin(angle) * velocity,
          life: 1,
          size: 1 + Math.random() * 2,
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Animation loop
    const animate = () => {
      // Clear canvas with slight fade effect
      ctx.fillStyle = "rgba(255, 255, 255, 0.02)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Check for dark mode
      const isDark = document.documentElement.classList.contains("dark")
      const particleColor = isDark ? "rgba(16, 185, 129, " : "rgba(5, 150, 105, "

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.life -= 0.02
        particle.vy += 0.1 // gravity

        if (particle.life > 0) {
          ctx.fillStyle = `${particleColor}${particle.life * 0.6})`
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
          ctx.fill()

          // Draw connecting lines to nearby particles
          particlesRef.current.forEach((other) => {
            if (other.id !== particle.id) {
              const dx = other.x - particle.x
              const dy = other.y - particle.y
              const distance = Math.sqrt(dx * dx + dy * dy)

              if (distance < 100) {
                ctx.strokeStyle = `${particleColor}${particle.life * other.life * 0.2})`
                ctx.lineWidth = 0.5
                ctx.beginPath()
                ctx.moveTo(particle.x, particle.y)
                ctx.lineTo(other.x, other.y)
                ctx.stroke()
              }
            }
          })

          return true
        }
        return false
      })

      // Draw cursor glow
      const glowSize = 30
      const gradient = ctx.createRadialGradient(
        mouseRef.current.x,
        mouseRef.current.y,
        0,
        mouseRef.current.x,
        mouseRef.current.y,
        glowSize,
      )
      gradient.addColorStop(0, `${particleColor}0.3)`)
      gradient.addColorStop(1, `${particleColor}0)`)
      ctx.fillStyle = gradient
      ctx.fillRect(mouseRef.current.x - glowSize, mouseRef.current.y - glowSize, glowSize * 2, glowSize * 2)

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none -z-10" style={{ mixBlendMode: "screen" }} />
  )
}
