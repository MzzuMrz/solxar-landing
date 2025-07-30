"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useLanguage } from "@/context/language-context"
import { ResourcesPage } from "@/components/resources-page"
import { LanguageProvider } from "@/context/language-context"

// Simplificar la redirección para evitar bucles
export default function EnglishResourcesPage() {
  const { language } = useLanguage()
  const router = useRouter()

  // Redirect to /recursos when language is Spanish - solo una vez al cargar
  useEffect(() => {
    // Solo redirigir si el idioma es español y estamos en la página de recursos en inglés
    if (language === "es" && window.location.pathname === "/resources") {
      router.push("/recursos")
    }
  }, [language, router])

  // Renderizar la página de recursos directamente
  return (
    <LanguageProvider>
      <ResourcesPage />
    </LanguageProvider>
  )
}
