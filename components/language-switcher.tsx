"use client"

import { useLanguage } from "@/context/language-context"
import { useRouter, usePathname } from "next/navigation"
import { useState, useTransition } from "react"
import { Globe } from "lucide-react"

const pathMap: Record<string, { es: string; en: string }> = {
  "/projects": { es: "/proyectos", en: "/projects" },
  "/proyectos": { es: "/proyectos", en: "/projects" },
  "/resources": { es: "/recursos", en: "/resources" },
  "/recursos": { es: "/recursos", en: "/resources" },
}

export function LanguageSwitcher() {
  const { language, toggleLanguage, t } = useLanguage()
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  const handleLanguageChange = () => {
    const newLang = language === "es" ? "en" : "es"
    const newPath = pathMap[pathname]?.[newLang]

    toggleLanguage()

    if (newPath && newPath !== pathname) {
      startTransition(() => {
        router.push(newPath)
      })
    }
  }

  return (
    <button
      onClick={handleLanguageChange}
      className="language-switcher-btn"
      disabled={isPending}
      aria-label={t("nav.switchLanguage")}
      title={t("nav.switchLanguage")}
    >
      <Globe size={16} className={`transition-transform duration-300 mr-2 ${isPending ? 'animate-spin' : ''}`} />
      <span className={language === 'en' ? 'font-bold' : 'opacity-60'}>EN</span>
      <span className="mx-0.5 opacity-50">/</span>
      <span className={language === 'es' ? 'font-bold' : 'opacity-60'}>ES</span>
    </button>
  )
}