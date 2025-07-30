"use client"

import { useEffect, useRef } from "react"

export function BlockchainBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Simple moving particle class
    class MovingParticle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      opacity: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 4 + 2
        this.speedX = (Math.random() - 0.5) * 1
        this.speedY = (Math.random() - 0.5) * 1
        this.color = this.getRandomColor()
        this.opacity = 0.6 + Math.random() * 0.4
      }

      getRandomColor() {
        const colors = [
          "#9945FF", // Solana purple
          "#00C2FF", // Solana blue
          "#14F195", // Solana teal
          "#FFFFFF", // White
        ]
        return colors[Math.floor(Math.random() * colors.length)]
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Bounce off edges
        if (this.x <= 0 || this.x >= canvas.width) this.speedX *= -1
        if (this.y <= 0 || this.y >= canvas.height) this.speedY *= -1

        // Keep within bounds
        this.x = Math.max(0, Math.min(canvas.width, this.x))
        this.y = Math.max(0, Math.min(canvas.height, this.y))
      }

      draw() {
        if (!ctx) return

        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.globalAlpha = this.opacity
        ctx.fill()
        ctx.globalAlpha = 1
      }
    }

    // Animated line class
    class AnimatedLine {
      startX: number
      startY: number
      endX: number
      endY: number
      progress: number
      speed: number
      color: string

      constructor() {
        this.startX = Math.random() * canvas.width
        this.startY = Math.random() * canvas.height
        this.endX = Math.random() * canvas.width
        this.endY = Math.random() * canvas.height
        this.progress = 0
        this.speed = 0.005 + Math.random() * 0.01
        this.color = Math.random() > 0.5 ? "#9945FF" : "#00C2FF"
      }

      update() {
        this.progress += this.speed
        if (this.progress >= 1) {
          this.progress = 0
          // Reset line position
          this.startX = Math.random() * canvas.width
          this.startY = Math.random() * canvas.height
          this.endX = Math.random() * canvas.width
          this.endY = Math.random() * canvas.height
        }
      }

      draw() {
        if (!ctx) return

        const currentX = this.startX + (this.endX - this.startX) * this.progress
        const currentY = this.startY + (this.endY - this.startY) * this.progress

        ctx.beginPath()
        ctx.moveTo(this.startX, this.startY)
        ctx.lineTo(currentX, currentY)
        ctx.strokeStyle = this.color
        ctx.globalAlpha = 0.4
        ctx.lineWidth = 2
        ctx.stroke()
        ctx.globalAlpha = 1
      }
    }

    // Create elements
    const particles: MovingParticle[] = []
    const lines: AnimatedLine[] = []

    // Create particles
    for (let i = 0; i < 25; i++) {
      particles.push(new MovingParticle())
    }

    // Create lines
    for (let i = 0; i < 8; i++) {
      lines.push(new AnimatedLine())
    }

    // Animation loop
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw and update lines
      lines.forEach((line) => {
        line.update()
        line.draw()
      })

      // Draw and update particles
      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1]"
      style={{ opacity: 0.3 }}
    />
  )
}
