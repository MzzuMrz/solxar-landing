"use client"

import { createContext, useState, useCallback, type ReactNode, useEffect, useContext } from "react"
import esTranslations from "@/locales/es.json"
import enTranslations from "@/locales/en.json"

type Language = "es" | "en"

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: (key: string) => string
}

const translations: { [key: string]: any } = {
  es: esTranslations,
  en: enTranslations,
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language
    if (savedLang && ["es", "en"].includes(savedLang)) {
      setLanguage(savedLang)
      return
    }
    const browserLang = navigator.language.split("-")[0]
    const newLang: Language = browserLang === "es" ? "es" : "en"
    setLanguage(newLang)
    localStorage.setItem("language", newLang)
  }, [])

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => {
      const newLang = prev === "es" ? "en" : "es"
      localStorage.setItem("language", newLang)
      return newLang
    })
  }, [])

  const t = useCallback(
    (key: string): string => {
      const keys = key.split('.')
      let result = translations[language]
      for (const k of keys) {
        result = result?.[k]
        if (result === undefined) return key
      }
      return result
    },
    [language]
  )

  const value = { language, toggleLanguage, t }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}