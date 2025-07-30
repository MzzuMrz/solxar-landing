"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function LogoAnimation() {
  const [animationState, setAnimationState] = useState<"hidden" | "initial" | "visible" | "fading">("hidden")

  useEffect(() => {
    // Start animation sequence - reducida en un 30%
    const showTimeout = setTimeout(() => {
      setAnimationState("initial")

      // Move to main animation state
      const visibleTimeout = setTimeout(() => {
        setAnimationState("visible")

        // Start fading out after extended time
        const fadeTimeout = setTimeout(() => {
          setAnimationState("fading")

          // Hide completely after fade animation completes
          const hideTimeout = setTimeout(() => {
            setAnimationState("hidden")
          }, 1050) // 1.5s * 0.7 = 1.05s para fade out

          return () => clearTimeout(hideTimeout)
        }, 2450) // 3.5s * 0.7 = 2.45s de duración visible

        return () => clearTimeout(fadeTimeout)
      }, 700) // 1s * 0.7 = 0.7s para animación inicial

      return () => clearTimeout(visibleTimeout)
    }, 350) // 500ms * 0.7 = 350ms de retraso inicial

    return () => clearTimeout(showTimeout)
  }, [])

  if (animationState === "hidden") {
    return null
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black">
      <div className="relative">
        {/* Blockchain network effect */}
        <div className="absolute inset-0 -m-32 blockchain-nodes opacity-70"></div>

        {/* Logo with animations */}
        <div
          className={`relative transform transition-all duration-1000 will-change-transform will-change-opacity ${
            animationState === "initial"
              ? "scale-50 opacity-0"
              : animationState === "visible"
                ? "scale-100 opacity-100"
                : "opacity-0 scale-110"
          }`}
        >
          {/* Glowing effect behind logo */}
          <div className="absolute inset-0 blur-2xl bg-gradient-to-r from-solana-purple via-solana-blue to-solana-teal opacity-50 rounded-full"></div>

          {/* Rotating rings */}
          <div className="absolute inset-0 -m-16 border-2 border-solana-blue/30 rounded-full animate-spin-slow"></div>
          <div className="absolute inset-0 -m-32 border border-solana-purple/20 rounded-full animate-reverse-spin"></div>
          <div className="absolute inset-0 -m-48 border border-solana-teal/10 rounded-full animate-spin-slow"></div>

          {/* Main logo - 50% larger */}
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mesa%20de%20trabajo%2097-4ao3x0yknAXZRjIhcABgsdMoQ4CBzr.png"
            alt="SOLxAR Logo"
            width={900}
            height={900}
            className="w-[240px] h-[240px] md:w-[450px] md:h-[450px] object-contain relative z-10"
          />
        </div>
      </div>
    </div>
  )
}
