"use client"

import { createContext, useContext, type ReactNode } from "react"

interface ScrollContextType {
  scrollToSection: (sectionId: string) => void
}

const ScrollContext = createContext<ScrollContextType>({
  scrollToSection: () => {},
})

export const useSmoothScroll = () => useContext(ScrollContext)

interface SmoothScrollProviderProps {
  children: ReactNode
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const scrollToSection = (sectionId: string) => {
    // Remove the # if it's included
    const id = sectionId.startsWith("#") ? sectionId.substring(1) : sectionId

    const element = document.getElementById(id)

    if (element) {
      // Scroll to the element with smooth behavior
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return <ScrollContext.Provider value={{ scrollToSection }}>{children}</ScrollContext.Provider>
}
