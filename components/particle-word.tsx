"use client"

import { useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"

type Point = { x: number; y: number; homeX: number; homeY: number; size: number; accent: boolean }

export function ParticleWord() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [ready, setReady] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    let points: Point[] = []
    let frame = 0
    let visible = true
    let width = 0
    let height = 0
    const pointer = { x: -1000, y: -1000 }
    const draw = () => {
      const palette = getComputedStyle(canvas)
      const ink = palette.getPropertyValue("--ink").trim()
      const accent = palette.getPropertyValue("--brand").trim()
      ctx.clearRect(0, 0, width, height)
      let unsettled = false
      for (const point of points) {
        const dx = point.homeX - pointer.x
        const dy = point.homeY - pointer.y
        const distance = Math.hypot(dx, dy)
        const force = !reducedMotion.matches && distance < 85 ? (85 - distance) / 85 : 0
        const targetX = point.homeX + (dx / (distance || 1)) * force * 42
        const targetY = point.homeY + (dy / (distance || 1)) * force * 42
        point.x += (targetX - point.x) * 0.15
        point.y += (targetY - point.y) * 0.15
        if (Math.abs(targetX - point.x) + Math.abs(targetY - point.y) > 0.1) unsettled = true
        ctx.fillStyle = point.accent ? accent : ink
        ctx.fillRect(point.x, point.y, point.size, point.size)
      }
      frame = unsettled && visible ? requestAnimationFrame(draw) : 0
    }
    const requestDraw = () => { if (!frame && visible) frame = requestAnimationFrame(draw) }
    const resize = () => {
      const bounds = canvas.getBoundingClientRect()
      width = bounds.width
      height = bounds.height
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = width * ratio
      canvas.height = height * ratio
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
      const mask = document.createElement("canvas")
      mask.width = Math.round(width)
      mask.height = Math.round(height)
      const maskCtx = mask.getContext("2d", { willReadFrequently: true })
      if (!maskCtx) return
      const fontSize = Math.min(width * 0.39, height * 1.02)
      maskCtx.font = `500 ${fontSize}px Arial, sans-serif`
      maskCtx.textAlign = "center"
      maskCtx.textBaseline = "middle"
      maskCtx.fillText("build.", width / 2, height * 0.52)
      const data = maskCtx.getImageData(0, 0, mask.width, mask.height).data
      points = []
      const step = width < 600 ? 2.5 : 3.4
      for (let y = 0; y < mask.height; y += step) {
        for (let x = 0; x < mask.width; x += step) {
          if (data[(Math.floor(y) * mask.width + Math.floor(x)) * 4 + 3] > 120) {
            const homeX = x + (Math.random() - 0.5) * step * 1.5
            const homeY = y + (Math.random() - 0.5) * step * 1.5
            points.push({ x: homeX, y: homeY, homeX, homeY, size: 0.8 + Math.random() * (width < 600 ? 1.5 : 2), accent: Math.random() < 0.11 })
          }
        }
      }
      requestDraw()
      setReady(true)
    }
    const onMove = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect()
      pointer.x = event.clientX - bounds.left
      pointer.y = event.clientY - bounds.top
      requestDraw()
    }
    const onLeave = () => { pointer.x = -1000; pointer.y = -1000; requestDraw() }
    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(canvas)
    const visibilityObserver = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; if (visible) requestDraw() })
    visibilityObserver.observe(canvas)
    canvas.addEventListener("pointermove", onMove)
    canvas.addEventListener("pointerleave", onLeave)
    reducedMotion.addEventListener("change", onLeave)
    return () => {
      cancelAnimationFrame(frame)
      resizeObserver.disconnect()
      visibilityObserver.disconnect()
      canvas.removeEventListener("pointermove", onMove)
      canvas.removeEventListener("pointerleave", onLeave)
      reducedMotion.removeEventListener("change", onLeave)
    }
  }, [resolvedTheme])

  return <div className="particle-word" aria-hidden="true"><span className={ready ? "particle-fallback is-ready" : "particle-fallback"}>build.</span><canvas ref={canvasRef}/><span className="particle-caption">A LITTLE CURIOSITY. A LOT OF CRAFT.</span></div>
}
