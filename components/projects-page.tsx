"use client"

import type React from "react"

import { useState, useEffect, useMemo } from "react"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/context/language-context"
import { X, Award, Coins, Music, Headphones, Mail, Check, Loader2 } from "lucide-react"
import { CursorEffect } from "@/components/cursor-effect"
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider"

// Asegurar que la página de proyectos actualice correctamente el idioma
export function ProjectsPage() {
  const { language } = useLanguage()

  // Forzar la actualización del componente cuando cambia el idioma
  const [key, setKey] = useState(0)

  useEffect(() => {
    // Incrementar la key para forzar un re-render completo cuando cambia el idioma
    setKey((prev) => prev + 1)
  }, [language])

  const [selectedCategory, setSelectedCategory] = useState(language === "es" ? "Todos" : "All")
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [filteredProjects, setFilteredProjects] = useState<any[]>([])
  const [layoutType, setLayoutType] = useState<"grid-3" | "grid-2" | "horizontal">("grid-3")
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [contactForm, setContactForm] = useState({
    email: "",
    subject: "",
    message: "",
  })
  const [formErrors, setFormErrors] = useState({
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  // 2. Añadir estado y funciones para el modal de envío de proyecto
  const [isSubmitProjectModalOpen, setIsSubmitProjectModalOpen] = useState(false)
  const [projectForm, setProjectForm] = useState({
    name: "",
    email: "",
    projectTitle: "",
    projectDescription: "",
    category: "",
    website: "",
    socialLinks: "",
    additionalInfo: "",
  })
  const [projectFormErrors, setProjectFormErrors] = useState({
    name: "",
    email: "",
    projectTitle: "",
    projectDescription: "",
    category: "",
  })
  const [isProjectSubmitting, setIsProjectSubmitting] = useState(false)
  const [projectSubmitSuccess, setProjectSubmitSuccess] = useState(false)

  const openSubmitProjectModal = () => {
    setProjectForm({
      name: "",
      email: "",
      projectTitle: "",
      projectDescription: "",
      category: "",
      website: "",
      socialLinks: "",
      additionalInfo: "",
    })
    setProjectFormErrors({
      name: "",
      email: "",
      projectTitle: "",
      projectDescription: "",
      category: "",
    })
    setProjectSubmitSuccess(false)
    setIsSubmitProjectModalOpen(true)
  }

  const closeSubmitProjectModal = () => {
    setIsSubmitProjectModalOpen(false)
  }

  const handleProjectFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setProjectForm((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Limpiar errores al escribir
    if (projectFormErrors[name as keyof typeof projectFormErrors]) {
      setProjectFormErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const validateProjectForm = () => {
    let valid = true
    const newErrors = {
      name: "",
      email: "",
      projectTitle: "",
      projectDescription: "",
      category: "",
    }

    // Validar nombre
    if (!projectForm.name) {
      newErrors.name = language === "es" ? "El nombre es requerido" : "Name is required"
      valid = false
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!projectForm.email) {
      newErrors.email = language === "es" ? "El correo es requerido" : "Email is required"
      valid = false
    } else if (!emailRegex.test(projectForm.email)) {
      newErrors.email = language === "es" ? "Correo inválido" : "Invalid email format"
      valid = false
    }

    // Validar título del proyecto
    if (!projectForm.projectTitle) {
      newErrors.projectTitle = language === "es" ? "El título del proyecto es requerido" : "Project title is required"
      valid = false
    }

    // Validar descripción del proyecto
    if (!projectForm.projectDescription) {
      newErrors.projectDescription =
        language === "es" ? "La descripción del proyecto es requerida" : "Project description is required"
      valid = false
    }

    // Validar categoría
    if (!projectForm.category) {
      newErrors.category = language === "es" ? "La categoría es requerida" : "Category is required"
      valid = false
    }

    setProjectFormErrors(newErrors)
    return valid
  }

  const handleSubmitProjectForm = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateProjectForm()) return

    setIsProjectSubmitting(true)

    try {
      // Aquí iría la lógica para enviar el correo con la información del proyecto
      // Simulamos una petición exitosa después de 1 segundo
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Mostrar mensaje de éxito
      setProjectSubmitSuccess(true)

      // Cerrar el modal después de 3 segundos
      setTimeout(() => {
        closeSubmitProjectModal()
      }, 3000)
    } catch (error) {
      console.error("Error sending project information:", error)
    } finally {
      setIsProjectSubmitting(false)
    }
  }

  const categories =
    language === "es"
      ? ["Todos", "DeFi", "NFT", "Gaming", "Infraestructura", "Educación", "Social", "Música", "Contenido"]
      : ["All", "DeFi", "NFT", "Gaming", "Infrastructure", "Education", "Social", "Music", "Content"]

  const projects = useMemo(
    () => [
      {
        id: 1,
        title: "ORO",
        description:
          language === "es"
            ? "Stablecoin basada en oro con respaldo físico 1:1 con yield anual. Transformando la propiedad del oro para hacerlo más valioso, poderoso y accesible."
            : "Gold-backed stablecoin with 1:1 physical backing and annual yield. Transforming gold ownership to make it more valuable, powerful, and accessible.",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-12%20at%2012.19.05%E2%80%AFAM-XHQTVkNbH0fykfo9LsUVQ61SEJNwAW.png",
        category: language === "es" ? "DeFi" : "DeFi",
        tags: language === "es" ? ["Stablecoin", "Oro", "Yield"] : ["Stablecoin", "Gold", "Yield"],
        status: language === "es" ? "Desarrollo" : "Development",
        funding: "Pre-seed",
        hasMVP: true,
        seekingFunding: true,
        link: "/projects/oro",
        contact: {
          name: language === "es" ? "Equipo ORO" : "ORO Team",
          avatar: "/placeholder.svg?height=80&width=80",
          social: {
            x: "https://x.com/oro_network",
            telegram: "https://t.me/oro_network",
            discord: "oro_network",
            website: "https://oro.network",
          },
        },
      },
      {
        id: 2,
        title: "Continent",
        description:
          language === "es"
            ? "Una dapp diseñada para que las comunidades cripto-nativas se conecten IRL."
            : "A dapp designed for crypto-native communities to connect IRL.",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/continent.jpg-mIYcq2KNjdMGVUQwGN3jrTDbI0ju1r.jpeg",
        category: language === "es" ? "Social" : "Social",
        tags: language === "es" ? ["Social", "Web3", "Comunidad"] : ["Social", "Web3", "Community"],
        status: language === "es" ? "Desarrollo" : "Development",
        funding: "Pre-seed",
        hasMVP: true,
        seekingFunding: true,
        link: "/projects/continent",
        contact: {
          name: language === "es" ? "Equipo Continent" : "Continent Team",
          avatar: "/placeholder.svg?height=80&width=80",
          social: {
            x: "https://x.com/continent",
            telegram: "https://t.me/continent",
            discord: "continent",
            website: "https://continent.xyz",
          },
        },
      },
      {
        id: 3,
        title: "Mana",
        description:
          language === "es"
            ? "Web3 AI tool para analizar comportamientos reales y crear un scoring del comportamiento en comunidades."
            : "Web3 AI tool to analyze real behaviors and create a scoring system for community behavior.",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-11%20at%2011.06.55%E2%80%AFPM-alEYLCHEsbGYcWuSb8DkFhmlaFwGir.png",
        category: language === "es" ? "Infraestructura" : "Infrastructure",
        tags: language === "es" ? ["AI", "Analytics", "Comunidad"] : ["AI", "Analytics", "Community"],
        status: language === "es" ? "Desarrollo" : "Development",
        funding: "Bootstrap",
        hasMVP: false,
        seekingFunding: true,
        link: "/projects/mana",
        contact: {
          name: language === "es" ? "Equipo Mana" : "Mana Team",
          avatar: "/placeholder.svg?height=80&width=80",
          social: {
            x: "https://x.com/mana_project",
            telegram: "https://t.me/mana_project",
            discord: "mana_project",
            website: "https://mana.ai",
          },
        },
      },
      {
        id: 4,
        title: "bioVault",
        description:
          language === "es"
            ? "Solución de identidad digital segura basada en biometría para el ecosistema Solana."
            : "Secure digital identity solution based on biometrics for the Solana ecosystem.",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-12%20at%2012.22.26%E2%80%AFAM-nhOeonZHSMrDuP2ssft89uzlNc62Gn.png",
        category: language === "es" ? "Infraestructura" : "Infrastructure",
        tags: language === "es" ? ["Identidad", "Biometría", "Seguridad"] : ["Identity", "Biometrics", "Security"],
        status: language === "es" ? "Idea" : "Idea",
        funding: "Bootstrap",
        hasMVP: false,
        seekingFunding: true,
        contact: {
          name: language === "es" ? "Equipo bioVault" : "bioVault Team",
          avatar: "/placeholder.svg?height=80&width=80",
          social: {
            x: "https://x.com/biovault",
            telegram: "https://t.me/biovault",
            discord: "biovault",
            website: "https://biovault.io",
          },
        },
      },
      {
        id: 5,
        title: "Tuneport",
        description:
          language === "es"
            ? "Plataforma de música para promover la interacción entre artistas, fans, coleccionistas y sellos discográficos. Revolucionando el streaming musical con remixes en cadena y colaboración sin límites."
            : "Music platform to promote interaction between artists, fans, collectors, and record labels. Revolutionizing music streaming with on-chain remixes and limitless collaboration.",
        image:
          "https://sjc.microlink.io/bGQV3H9fjyd7ANbFzEHI-qDcbO8-a8RXAlh19-OqTpXow9SqhwCMtLmHPQE6gRilZnmemMYgpBoyoWP5LTVFog.jpeg",
        category: language === "es" ? "Música" : "Music",
        tags: language === "es" ? ["Música", "NFT", "Streaming"] : ["Music", "NFT", "Streaming"],
        status: language === "es" ? "Desarrollo" : "Development",
        funding: "Seed",
        hasMVP: true,
        seekingFunding: true,
        contact: {
          name: "Fernando López",
          avatar: "/placeholder.svg?height=80&width=80",
          social: {
            x: "https://x.com/beor22",
            telegram: "https://t.me/tuneportxyz",
            discord: "tuneport",
            website: "https://www.tuneport.xyz/",
          },
        },
      },
      {
        id: 6,
        title: "El Vacío Podcast",
        description:
          language === "es"
            ? "Podcast mensual que explora las novedades del ecosistema blockchain con un enfoque filosófico y artístico, analizando cómo la tecnología blockchain ha revolucionado la creación de contenido."
            : "Monthly podcast exploring blockchain ecosystem news with a philosophical and artistic approach, analyzing how blockchain technology has revolutionized content creation.",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-11%20at%209.12.44%E2%80%AFPM-x3pwi1I0AbvukPyB8WDsAFVIrMpilh.png",
        category: language === "es" ? "Contenido" : "Content",
        tags: language === "es" ? ["Podcast", "Arte", "Filosofía"] : ["Podcast", "Art", "Philosophy"],
        status: "Live",
        funding: "Bootstrap",
        hasMVP: true,
        seekingFunding: false,
        contact: {
          name: language === "es" ? "Equipo El Vacío" : "El Vacío Team",
          avatar: "/placeholder.svg?height=80&width=80",
          social: {
            x: "https://x.com/elvaciopodcast",
            telegram: "https://t.me/elvaciopodcast",
            discord: "elvacio",
            website: "https://elvaciopodcast.xyz",
          },
        },
      },
    ],
    [language],
  )

  // Extraer todos los tags únicos de los proyectos
  const allTags = useMemo(() => Array.from(new Set(projects.flatMap((project) => project.tags))), [projects])

  // Función para determinar si un número es primo
  const isPrime = (num: number): boolean => {
    if (num <= 1) return false
    if (num <= 3) return true
    if (num % 2 === 0 || num % 3 === 0) return false
    let i = 5
    while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) return false
      i += 6
    }
    return true
  }

  // Actualizar la categoría seleccionada cuando cambia el idioma
  useEffect(() => {
    setSelectedCategory(language === "es" ? "Todos" : "All")
  }, [language])

  // Determinar el tipo de layout basado en la cantidad de proyectos
  useEffect(() => {
    const count = filteredProjects.length

    if (count % 3 === 0) {
      setLayoutType("grid-3")
    } else if (count % 2 === 0) {
      setLayoutType("grid-2")
    } else if (isPrime(count)) {
      setLayoutType("horizontal")
    } else {
      // Para otros casos, usar grid-3 como fallback
      setLayoutType("grid-3")
    }
  }, [filteredProjects])

  // Corregir el problema de filtrado de proyectos
  // Filtrar proyectos según categoría y tags seleccionados
  useEffect(() => {
    let filtered = [...projects]

    // Filtrar por categoría
    if ((selectedCategory !== "Todos" && language === "es") || (selectedCategory !== "All" && language === "en")) {
      filtered = filtered.filter((project) => {
        // Manejar las categorías en ambos idiomas
        const categoryMatches =
          project.category === selectedCategory ||
          (selectedCategory === "Educación" && project.category === "Education") ||
          (selectedCategory === "Education" && project.category === "Educación") ||
          (selectedCategory === "Infraestructura" && project.category === "Infrastructure") ||
          (selectedCategory === "Infrastructure" && project.category === "Infraestructura") ||
          (selectedCategory === "Música" && project.category === "Music") ||
          (selectedCategory === "Music" && project.category === "Música") ||
          (selectedCategory === "Contenido" && project.category === "Content") ||
          (selectedCategory === "Content" && project.category === "Contenido")

        return categoryMatches
      })
    }

    // Filtrar por tags
    if (selectedTags.length > 0) {
      filtered = filtered.filter((project) => selectedTags.some((tag) => project.tags.includes(tag)))
    }

    // Asegurarse de que filteredProjects nunca esté vacío si hay proyectos disponibles
    setFilteredProjects(filtered.length > 0 ? filtered : projects)
  }, [selectedCategory, selectedTags, language, projects])

  // Manejar selección de tag
  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  // Limpiar todos los tags seleccionados
  const clearTags = () => {
    setSelectedTags([])
  }

  // Determinar las clases de layout
  const layoutClasses = useMemo(() => {
    switch (layoutType) {
      case "grid-3":
        return "grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      case "grid-2":
        return "grid md:grid-cols-2 gap-8"
      case "horizontal":
        return "flex flex-col md:flex-row gap-8 overflow-x-auto pb-4"
      default:
        return "grid md:grid-cols-2 lg:grid-cols-3 gap-8"
    }
  }, [layoutType])

  // Determinar las clases de las tarjetas de proyecto
  const projectCardClasses = useMemo(() => {
    if (layoutType === "horizontal") {
      return "backdrop-blur-md bg-black/60 rounded-xl overflow-hidden border border-white/10 transition-all duration-300 hover:transform hover:scale-[1.02] md:min-w-[350px] md:max-w-[400px] flex-shrink-0"
    }
    return "backdrop-blur-md bg-black/60 rounded-xl overflow-hidden border border-white/10 transition-all duration-300 hover:transform hover:scale-[1.02]"
  }, [layoutType])

  // Función para obtener el icono según la categoría
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Música":
      case "Music":
        return <Music className="w-4 h-4" />
      case "Contenido":
      case "Content":
        return <Headphones className="w-4 h-4" />
      default:
        return null
    }
  }

  const openContactModal = (project: any) => {
    setSelectedProject(project)
    setContactForm({
      email: "",
      subject: "",
      message: "",
    })
    setFormErrors({
      email: "",
      subject: "",
      message: "",
    })
    setSubmitSuccess(false)
    setIsContactModalOpen(true)
  }

  const closeContactModal = () => {
    setIsContactModalOpen(false)
    setSelectedProject(null)
  }

  const handleContactFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setContactForm((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Limpiar errores al escribir
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const validateForm = () => {
    let valid = true
    const newErrors = { email: "", subject: "", message: "" }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!contactForm.email) {
      newErrors.email = language === "es" ? "El correo es requerido" : "Email is required"
      valid = false
    } else if (!emailRegex.test(contactForm.email)) {
      newErrors.email = language === "es" ? "Correo inválido" : "Invalid email format"
      valid = false
    }

    // Validar asunto
    if (!contactForm.subject) {
      newErrors.subject = language === "es" ? "El asunto es requerido" : "Subject is required"
      valid = false
    }

    // Validar mensaje
    if (!contactForm.message) {
      newErrors.message = language === "es" ? "El mensaje es requerido" : "Message is required"
      valid = false
    }

    setFormErrors(newErrors)
    return valid
  }

  const handleSubmitContactForm = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      // Aquí iría la lógica para enviar el correo
      // Simulamos una petición exitosa después de 1 segundo
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Mostrar mensaje de éxito
      setSubmitSuccess(true)

      // Cerrar el modal después de 3 segundos
      setTimeout(() => {
        closeContactModal()
      }, 3000)
    } catch (error) {
      console.error("Error sending email:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Componente del modal de contacto
  const ContactModal = () => {
    if (!isContactModalOpen || !selectedProject) return null

    const formattedSubject = `Contact Form - SOLxAR - ${selectedProject.title}${contactForm.subject ? ` - ${contactForm.subject}` : ""}`

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
        <div className="relative w-full max-w-md bg-black/90 rounded-xl border border-white/20 p-6 shadow-xl">
          <button onClick={closeContactModal} className="absolute top-4 right-4 text-white/50 hover:text-white">
            <X size={20} />
          </button>

          <h3 className="text-xl font-bold mb-1 solana-text-gradient">
            {language === "es" ? "Contactar a" : "Contact"} {selectedProject.title}
          </h3>
          <p className="text-white/70 text-sm mb-4">
            {language === "es"
              ? "Completa el formulario para enviar un mensaje al equipo del proyecto."
              : "Fill out the form to send a message to the project team."}
          </p>

          {submitSuccess ? (
            <div className="bg-solana-teal/20 border border-solana-teal/30 rounded-lg p-4 text-center">
              <div className="flex justify-center mb-2">
                <div className="w-12 h-12 rounded-full bg-solana-teal/20 flex items-center justify-center">
                  <Check className="w-6 h-6 text-solana-teal" />
                </div>
              </div>
              <h4 className="font-semibold text-white mb-1">
                {language === "es" ? "¡Mensaje enviado!" : "Message sent!"}
              </h4>
              <p className="text-white/70 text-sm">
                {language === "es"
                  ? "Tu mensaje ha sido enviado correctamente. El equipo se pondrá en contacto contigo pronto."
                  : "Your message has been sent successfully. The team will contact you soon."}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmitContactForm} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
                  {language === "es" ? "Tu correo electrónico" : "Your email"}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={contactForm.email}
                  onChange={handleContactFormChange}
                  className={`w-full bg-black/50 border ${formErrors.email ? "border-red-500" : "border-white/20"} rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-solana-teal/50`}
                  placeholder={language === "es" ? "tu@email.com" : "your@email.com"}
                />
                {formErrors.email && <p className="mt-1 text-xs text-red-500">{formErrors.email}</p>}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-white/80 mb-1">
                  {language === "es" ? "Asunto" : "Subject"}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={contactForm.subject}
                    onChange={handleContactFormChange}
                    className={`w-full bg-black/50 border ${formErrors.subject ? "border-red-500" : "border-white/20"} rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-solana-teal/50`}
                    placeholder={language === "es" ? "Añade un asunto personalizado" : "Add a custom subject"}
                  />
                </div>
                <p className="mt-1 text-xs text-white/50">
                  {language === "es"
                    ? `El asunto completo será: "${formattedSubject}"`
                    : `The complete subject will be: "${formattedSubject}"`}
                </p>
                {formErrors.subject && <p className="mt-1 text-xs text-red-500">{formErrors.subject}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">
                  {language === "es" ? "Mensaje" : "Message"}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={contactForm.message}
                  onChange={handleContactFormChange}
                  rows={4}
                  className={`w-full bg-black/50 border ${formErrors.message ? "border-red-500" : "border-white/20"} rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-solana-teal/50`}
                  placeholder={language === "es" ? "Escribe tu mensaje aquí..." : "Write your message here..."}
                />
                {formErrors.message && <p className="mt-1 text-xs text-red-500">{formErrors.message}</p>}
              </div>

              <Button type="submit" variant="solana" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span className="flex items-center">
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    {language === "es" ? "Enviando..." : "Sending..."}
                  </span>
                ) : language === "es" ? (
                  "Enviar mensaje"
                ) : (
                  "Send message"
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    )
  }

  // Componente del modal de envío de proyecto
  const SubmitProjectModal = () => {
    if (!isSubmitProjectModalOpen) return null

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
        <div className="relative w-full max-w-2xl bg-black/90 rounded-xl border border-white/20 p-6 shadow-xl max-h-[90vh] overflow-y-auto">
          <button onClick={closeSubmitProjectModal} className="absolute top-4 right-4 text-white/50 hover:text-white">
            <X size={20} />
          </button>

          <h3 className="text-xl font-bold mb-1 solana-text-gradient">
            {language === "es" ? "Enviar Proyecto" : "Submit Project"}
          </h3>
          <p className="text-white/70 text-sm mb-4">
            {language === "es"
              ? "Comparte tu proyecto con la comunidad SOLxAR y conecta con otros desarrolladores, inversores y usuarios."
              : "Share your project with the SOLxAR community and connect with other developers, investors, and users."}
          </p>

          {projectSubmitSuccess ? (
            <div className="bg-solana-teal/20 border border-solana-teal/30 rounded-lg p-4 text-center">
              <div className="flex justify-center mb-2">
                <div className="w-12 h-12 rounded-full bg-solana-teal/20 flex items-center justify-center">
                  <Check className="w-6 h-6 text-solana-teal" />
                </div>
              </div>
              <h4 className="font-semibold text-white mb-1">
                {language === "es" ? "¡Proyecto enviado!" : "Project submitted!"}
              </h4>
              <p className="text-white/70 text-sm">
                {language === "es"
                  ? "Tu proyecto ha sido enviado correctamente. Revisaremos la información y nos pondremos en contacto contigo pronto."
                  : "Your project has been submitted successfully. We will review the information and contact you soon."}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmitProjectForm} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">
                    {language === "es" ? "Tu nombre" : "Your name"}*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={projectForm.name}
                    onChange={handleProjectFormChange}
                    className={`w-full bg-black/50 border ${projectFormErrors.name ? "border-red-500" : "border-white/20"} rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-solana-teal/50`}
                    placeholder={language === "es" ? "Nombre completo" : "Full name"}
                  />
                  {projectFormErrors.name && <p className="mt-1 text-xs text-red-500">{projectFormErrors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
                    {language === "es" ? "Tu correo electrónico" : "Your email"}*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={projectForm.email}
                    onChange={handleProjectFormChange}
                    className={`w-full bg-black/50 border ${projectFormErrors.email ? "border-red-500" : "border-white/20"} rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-solana-teal/50`}
                    placeholder={language === "es" ? "tu@email.com" : "your@email.com"}
                  />
                  {projectFormErrors.email && <p className="mt-1 text-xs text-red-500">{projectFormErrors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="projectTitle" className="block text-sm font-medium text-white/80 mb-1">
                  {language === "es" ? "Título del proyecto" : "Project title"}*
                </label>
                <input
                  type="text"
                  id="projectTitle"
                  name="projectTitle"
                  value={projectForm.projectTitle}
                  onChange={handleProjectFormChange}
                  className={`w-full bg-black/50 border ${projectFormErrors.projectTitle ? "border-red-500" : "border-white/20"} rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-solana-teal/50`}
                  placeholder={language === "es" ? "Nombre de tu proyecto" : "Your project name"}
                />
                {projectFormErrors.projectTitle && (
                  <p className="mt-1 text-xs text-red-500">{projectFormErrors.projectTitle}</p>
                )}
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-white/80 mb-1">
                  {language === "es" ? "Categoría" : "Category"}*
                </label>
                <select
                  id="category"
                  name="category"
                  value={projectForm.category}
                  onChange={handleProjectFormChange}
                  className={`w-full bg-black/50 border ${projectFormErrors.category ? "border-red-500" : "border-white/20"} rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-solana-teal/50`}
                >
                  <option value="">{language === "es" ? "Selecciona una categoría" : "Select a category"}</option>
                  {categories
                    .filter((cat) => cat !== "Todos" && cat !== "All")
                    .map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                </select>
                {projectFormErrors.category && (
                  <p className="mt-1 text-xs text-red-500">{projectFormErrors.category}</p>
                )}
              </div>

              <div>
                <label htmlFor="projectDescription" className="block text-sm font-medium text-white/80 mb-1">
                  {language === "es" ? "Descripción del proyecto" : "Project description"}*
                </label>
                <textarea
                  id="projectDescription"
                  name="projectDescription"
                  value={projectForm.projectDescription}
                  onChange={handleProjectFormChange}
                  rows={4}
                  className={`w-full bg-black/50 border ${projectFormErrors.projectDescription ? "border-red-500" : "border-white/20"} rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-solana-teal/50`}
                  placeholder={
                    language === "es"
                      ? "Describe tu proyecto, su propósito y características principales..."
                      : "Describe your project, its purpose, and main features..."
                  }
                />
                {projectFormErrors.projectDescription && (
                  <p className="mt-1 text-xs text-red-500">{projectFormErrors.projectDescription}</p>
                )}
              </div>

              <div>
                <label htmlFor="website" className="block text-sm font-medium text-white/80 mb-1">
                  {language === "es" ? "Sitio web (opcional)" : "Website (optional)"}
                </label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  value={projectForm.website}
                  onChange={handleProjectFormChange}
                  className="w-full bg-black/50 border border-white/20 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-solana-teal/50"
                  placeholder="https://..."
                />
              </div>

              <div>
                <label htmlFor="socialLinks" className="block text-sm font-medium text-white/80 mb-1">
                  {language === "es" ? "Enlaces a redes sociales (opcional)" : "Social media links (optional)"}
                </label>
                <textarea
                  id="socialLinks"
                  name="socialLinks"
                  value={projectForm.socialLinks}
                  onChange={handleProjectFormChange}
                  rows={2}
                  className="w-full bg-black/50 border border-white/20 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-solana-teal/50"
                  placeholder={
                    language === "es" ? "Twitter, Telegram, Discord, etc." : "Twitter, Telegram, Discord, etc."
                  }
                />
              </div>

              <div>
                <label htmlFor="additionalInfo" className="block text-sm font-medium text-white/80 mb-1">
                  {language === "es" ? "Información adicional (opcional)" : "Additional information (optional)"}
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={projectForm.additionalInfo}
                  onChange={handleProjectFormChange}
                  rows={3}
                  className="w-full bg-black/50 border border-white/20 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-solana-teal/50"
                  placeholder={
                    language === "es"
                      ? "Estado del proyecto, financiamiento, equipo, etc."
                      : "Project status, funding, team, etc."
                  }
                />
              </div>

              <p className="text-xs text-white/50">{language === "es" ? "* Campos requeridos" : "* Required fields"}</p>

              <Button type="submit" variant="solana" className="w-full" disabled={isProjectSubmitting}>
                {isProjectSubmitting ? (
                  <span className="flex items-center">
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    {language === "es" ? "Enviando..." : "Sending..."}
                  </span>
                ) : language === "es" ? (
                  "Enviar proyecto"
                ) : (
                  "Submit project"
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    )
  }

  // Añadir la key al componente principal para forzar el re-render
  return (
    <SmoothScrollProvider key={key}>
      <main className="min-h-screen">
        {/* Fondo cuadriculado */}
        <div className="grid-background"></div>
        <CursorEffect />


        <section className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 solana-text-gradient">
                {language === "es" ? "Proyectos" : "Projects"}
              </h1>
              <p className="text-white/70 mb-12 max-w-3xl">
                {language === "es"
                  ? "Explora los proyectos desarrollados por miembros de la comunidad SOLxAR. Desde aplicaciones DeFi hasta colecciones NFT, descubre la innovación que está sucediendo en el ecosistema Solana en Buenos Aires."
                  : "Explore projects developed by SOLxAR community members. From DeFi applications to NFT collections, discover the innovation happening in the Solana ecosystem in Buenos Aires."}
              </p>

              {/* Categories filter */}
              <div className="flex flex-wrap gap-3 mb-6">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${
                      category === selectedCategory
                        ? "bg-primary text-white"
                        : "bg-white/10 text-white/70 hover:bg-white/20"
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    <div className="flex items-center gap-1">
                      {getCategoryIcon(category)}
                      <span>{category}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Tags filter */}
              <div className="mb-12">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-medium">{language === "es" ? "Filtrar por tags" : "Filter by tags"}</h3>
                  {selectedTags.length > 0 && (
                    <button className="text-sm text-primary flex items-center gap-1" onClick={clearTags}>
                      {language === "es" ? "Limpiar filtros" : "Clear filters"}
                      <X size={14} />
                    </button>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {allTags.map((tag, index) => (
                    <button
                      key={index}
                      className={`px-3 py-1 rounded-full text-xs transition-colors ${
                        selectedTags.includes(tag)
                          ? "bg-solana-teal/30 text-white border border-solana-teal/50"
                          : "bg-black/40 text-white/60 border border-white/10 hover:bg-black/60"
                      }`}
                      onClick={() => handleTagToggle(tag)}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
                {selectedTags.length > 0 && (
                  <div className="mt-3 text-sm text-white/60">
                    {language === "es"
                      ? `Mostrando ${filteredProjects.length} de ${projects.length} proyectos`
                      : `Showing ${filteredProjects.length} of ${projects.length} projects`}
                  </div>
                )}
              </div>

              {/* Layout info */}
              <div className="mb-4 text-sm text-white/60">
                <p>
                  {language === "es"
                    ? `Mostrando ${filteredProjects.length} proyectos en formato ${
                        layoutType === "grid-3"
                          ? "cuadrícula (3 columnas)"
                          : layoutType === "grid-2"
                            ? "cuadrícula (2 columnas)"
                            : "horizontal"
                      }`
                    : `Showing ${filteredProjects.length} projects in ${
                        layoutType === "grid-3"
                          ? "grid (3 columns)"
                          : layoutType === "grid-2"
                            ? "grid (2 columns)"
                            : "horizontal"
                      } layout`}
                </p>
              </div>

              {/* Projects layout - dinámico según cantidad */}
              <div className={layoutClasses}>
                {filteredProjects.map((project) => (
                  <div key={project.id} className={projectCardClasses}>
                    <div className="aspect-video w-full overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={350}
                        height={200}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary flex items-center gap-1">
                          {getCategoryIcon(project.category)}
                          {project.category}
                        </span>
                      </div>
                      <p className="text-white/70 mb-4">{project.description}</p>

                      <div className="mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-white/70">
                            {language === "es" ? "Estado del proyecto:" : "Project status:"}
                          </span>
                          <span className="text-sm font-medium text-white">{project.status}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          {(language === "es"
                            ? ["Idea", "Desarrollo", "Live", "Expansión"]
                            : ["Idea", "Development", "Live", "Expansion"]
                          ).map((status) => {
                            // Verificar si el estado actual coincide con este estado, considerando traducciones
                            const isCurrentStatus =
                              project.status === status ||
                              (status === "Desarrollo" && project.status === "Development") ||
                              (status === "Development" && project.status === "Desarrollo") ||
                              (status === "Expansión" && project.status === "Expansion") ||
                              (status === "Expansion" && project.status === "Expansión")

                            return (
                              <div key={status} className="flex flex-col items-center">
                                <div
                                  className={`w-3 h-3 rounded-full ${
                                    isCurrentStatus ? "bg-solana-teal" : "bg-white/20"
                                  }`}
                                ></div>
                                <span className="text-xs text-white/50 mt-1">{status}</span>
                              </div>
                            )
                          })}
                        </div>
                      </div>

                      {/* Financiamiento con puntos discretos */}
                      <div className="mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-white/70">
                            {language === "es" ? "Financiamiento:" : "Funding:"}
                          </span>
                          <span className="text-sm font-medium text-white">{project.funding}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          {["Bootstrap", "Crowdfunding", "Pre-seed", "Seed", "Series A"].map((funding) => (
                            <div key={funding} className="flex flex-col items-center">
                              <div
                                className={`w-3 h-3 rounded-full ${
                                  project.funding === funding ? "bg-solana-purple" : "bg-white/20"
                                }`}
                              ></div>
                              <span className="text-xs text-white/50 mt-1">{funding}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Indicadores especiales */}
                      <div className="flex gap-3 mb-4">
                        {project.hasMVP && (
                          <div className="flex items-center gap-1 bg-solana-teal/20 text-solana-teal px-2 py-1 rounded-full text-xs">
                            <Award size={12} />
                            <span>MVP</span>
                          </div>
                        )}
                        {project.seekingFunding && (
                          <div className="flex items-center gap-1 bg-solana-purple/20 text-solana-purple px-2 py-1 rounded-full text-xs">
                            <Coins size={12} />
                            <span>{language === "es" ? "Buscando inversión" : "Seeking investment"}</span>
                          </div>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className={`text-xs px-2 py-1 rounded-full ${
                              selectedTags.includes(tag)
                                ? "bg-solana-teal/30 text-white border border-solana-teal/50"
                                : "bg-white/10 text-white/80"
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Sección de contacto ampliada */}
                      <div className="flex flex-col gap-3 p-3 bg-black/30 rounded-lg border border-white/10">
                        <div className="flex items-center justify-between gap-3 pb-2 border-b border-white/10">
                          <div className="flex items-center gap-3">
                            <Image
                              src={project.contact.avatar || "/placeholder.svg"}
                              alt={project.contact.name}
                              width={40}
                              height={40}
                              className="rounded-full w-10 h-10 object-cover"
                            />
                            <span className="font-medium">{project.contact.name}</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-3 pt-1">
                          {project.link &&
                            project.title !== "ORO" &&
                            project.title !== "Continent" &&
                            project.title !== "Mana" && (
                              <Link href={project.link}>
                                <Button variant="solana" size="sm">
                                  {language === "es" ? "Ver proyecto" : "View project"}
                                </Button>
                              </Link>
                            )}
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-solana-teal/50 text-solana-teal"
                              onClick={() => openContactModal(project)}
                            >
                              <Mail className="w-4 h-4 mr-1" />
                              {language === "es" ? "Contactar" : "Contact"}
                            </Button>
                            <Link href={project.contact.social.x} target="_blank" rel="noopener noreferrer">
                              <Button variant="outline" size="icon" className="w-8 h-8 rounded-full p-0">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="text-white/70 hover:text-white transition-colors"
                                >
                                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                                </svg>
                              </Button>
                            </Link>
                            <Link href={project.contact.social.telegram} target="_blank" rel="noopener noreferrer">
                              <Button variant="outline" size="icon" className="w-8 h-8 rounded-full p-0">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="text-white/70 hover:text-white transition-colors"
                                >
                                  <path d="M21.5 4.5L2.5 12.5L11.5 14.5L14.5 21.5L21.5 4.5Z"></path>
                                </svg>
                              </Button>
                            </Link>
                            {project.contact.social.website && (
                              <Link href={project.contact.social.website} target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" size="icon" className="w-8 h-8 rounded-full p-0">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-white/70 hover:text-white transition-colors"
                                  >
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="2" y1="12" x2="22" y2="12"></line>
                                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                  </svg>
                                </Button>
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mensaje cuando no hay proyectos que coincidan con los filtros */}
              {filteredProjects.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-white/70 mb-4">
                    {language === "es"
                      ? "No se encontraron proyectos que coincidan con los filtros seleccionados."
                      : "No projects found matching the selected filters."}
                  </p>
                  <Button variant="outline" onClick={clearTags}>
                    {language === "es" ? "Limpiar filtros" : "Clear filters"}
                  </Button>
                </div>
              )}

              {/* Submit project CTA */}
              <div className="mt-16 text-center p-8 backdrop-blur-md bg-black/60 rounded-xl border border-white/10">
                <h2 className="text-2xl font-bold mb-4">
                  {language === "es" ? "¿Tienes un proyecto en Solana?" : "Do you have a project on Solana?"}
                </h2>
                <p className="text-white/70 mb-6 max-w-2xl mx-auto">
                  {language === "es"
                    ? "Comparte tu proyecto con la comunidad SOLxAR y conecta con otros desarrolladores, inversores y usuarios interesados en el ecosistema Solana."
                    : "Share your project with the SOLxAR community and connect with other developers, investors, and users interested in the Solana ecosystem."}
                </p>
                <Button variant="solana" size="lg" onClick={openSubmitProjectModal}>
                  {language === "es" ? "Enviar Proyecto" : "Submit Project"}
                </Button>
              </div>
            </div>
          </div>
        </section>

        <ContactModal />
        <SubmitProjectModal />
      </main>
    </SmoothScrollProvider>
  )
}
