"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useLanguage } from "@/context/language-context"
import { ProjectsPage } from "@/components/projects-page"
import { LanguageProvider } from "@/context/language-context"
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider"

export default function ProyectosPage() {
  const { language } = useLanguage()
  const router = useRouter()

  // Redirect to /projects when language is English - solo una vez al cargar
  useEffect(() => {
    // Solo redirigir si el idioma es inglés y estamos en la página de proyectos en español
    if (language === "en" && window.location.pathname === "/proyectos") {
      router.push("/projects")
    }
  }, [language, router])

  // Renderizar la página de proyectos directamente
  return (
    <LanguageProvider>
      <SmoothScrollProvider>
        <ProjectsPage />
      </SmoothScrollProvider>
    </LanguageProvider>
  )
}
