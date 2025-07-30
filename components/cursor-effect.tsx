"use client"

import { useEffect, useState } from "react"

export function CursorEffect() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show default cursor
    document.body.style.cursor = "auto"

    // Small delay to ensure smooth transition
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  // Return null - no custom cursor rendered
  return null
}
