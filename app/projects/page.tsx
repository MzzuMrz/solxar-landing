"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useLanguage } from "@/context/language-context"
import { ProjectsPage } from "@/components/projects-page"
import { LanguageProvider } from "@/context/language-context"
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider"

// Simplificar la redirección para evitar bucles
export default function EnglishProjectsPage() {
  const { language } = useLanguage()
  const router = useRouter()

  // Redirect to /proyectos when language is Spanish - solo una vez al cargar
  useEffect(() => {
    // Solo redirigir si el idioma es español y estamos en la página de proyectos en inglés
    if (language === "es" && window.location.pathname === "/projects") {
      router.push("/proyectos")
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
