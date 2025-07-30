"use client"
import { useState, useEffect } from "react"

export function CapybaraAnimation() {
  const [isVisible, setIsVisible] = useState(false)
  const [position, setPosition] = useState(0)

  useEffect(() => {
    const startAnimation = () => {
      // Aparece cada 15-20 segundos aleatoriamente
      const randomDelay = Math.random() * 5000 + 15000

      setTimeout(() => {
        setIsVisible(true)
        // Comienza desde la derecha (100% del ancho de la sección)
        setPosition(100)

        // Animación de correr de derecha a izquierda
        const animationInterval = setInterval(() => {
          setPosition((prev) => {
            if (prev < -20) {
              setIsVisible(false)
              clearInterval(animationInterval)
              // Reinicia el ciclo
              setTimeout(startAnimation, 20000)
              return 100
            }
            return prev - 0.5 // Velocidad más lenta para ser más sutil
          })
        }, 16) // 60fps
      }, randomDelay)
    }

    startAnimation()
  }, [])

  if (!isVisible) return null

  return (
    <div
      className="absolute z-0 pointer-events-none"
      style={{
        left: `${position}%`,
        bottom: "20%",
        transform: "scaleX(-1)", // Voltea horizontalmente para que mire hacia la izquierda
        transition: "none",
      }}
    >
      <img
        src="/capybara-running.gif"
        alt="Capybara running"
        className="w-12 h-12 opacity-60"
        style={{
          filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))",
          background: "transparent",
          mixBlendMode: "multiply",
        }}
      />
    </div>
  )
}
