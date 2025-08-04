"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExternalLink, BookOpen, Code, Video, FileText, Users, Lightbulb } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { CursorEffect } from "@/components/cursor-effect"
import { useMemo, useState, useEffect } from "react"


// Asegurar que la página de recursos actualice correctamente el idioma
export function ResourcesPage() {
  const { language } = useLanguage()

  // Forzar la actualización del componente cuando cambia el idioma
  const [key, setKey] = useState(0)

  useEffect(() => {
    // Incrementar la key para forzar un re-render completo cuando cambia el idioma
    setKey((prev) => prev + 1)
  }, [language])

  // Mover la definición de resourceCategories fuera del cuerpo de la función
  // o usar useMemo para evitar recreaciones innecesarias
  const resourceCategories = useMemo(
    () => [
      {
        title: language === "es" ? "Documentación" : "Documentation",
        icon: <BookOpen className="w-6 h-6 text-solana-purple" />,
        resources: [
          {
            title: language === "es" ? "Documentación de Solana" : "Solana Documentation",
            description:
              language === "es"
                ? "Guías oficiales y documentación para desarrolladores"
                : "Official guides and documentation for developers",
            link: "https://docs.solana.com/",
          },
          {
            title: "Solana Cookbook",
            description:
              language === "es"
                ? "Recetas y ejemplos para construir en Solana"
                : "Recipes and examples for building on Solana",
            link: "https://solanacookbook.com/",
          },
          {
            title: "Anchor Framework",
            description:
              language === "es"
                ? "Framework para desarrollo de programas en Solana"
                : "Framework for Solana program development",
            link: "https://www.anchor-lang.com/",
          },
          {
            title: "Solana CLI",
            description:
              language === "es" ? "Herramientas de línea de comandos para Solana" : "Command line tools for Solana",
            link: "https://docs.solana.com/cli/install-solana-cli-tools",
          },
          {
            title: "Solana Web3.js",
            description:
              language === "es"
                ? "Biblioteca JavaScript para interactuar con Solana"
                : "JavaScript library for interacting with Solana",
            link: "https://solana-labs.github.io/solana-web3.js/",
          },
        ],
      },
      {
        title: language === "es" ? "Desarrollo" : "Development",
        icon: <Code className="w-6 h-6 text-solana-blue" />,
        resources: [
          {
            title: "Solana Playground",
            description:
              language === "es"
                ? "Entorno de desarrollo en línea para Solana"
                : "Online development environment for Solana",
            link: "https://beta.solpg.io/",
          },
        ],
      },
      {
        title: language === "es" ? "Tutoriales" : "Tutorials",
        icon: <Video className="w-6 h-6 text-solana-teal" />,
        resources: [
          {
            title: "Solana University",
            description:
              language === "es"
                ? "Recursos educativos para aprender sobre Solana"
                : "Educational resources to learn about Solana",
            link: "https://solana.com/developers",
          },
          {
            title: "Solana Bootcamp",
            description:
              language === "es"
                ? "Bootcamp intensivo para desarrolladores de Solana"
                : "Intensive bootcamp for Solana developers",
            link: "https://www.soldev.app/",
          },
          {
            title: "Heavy Duty Builders Bootcamp",
            description:
              language === "es"
                ? "Bootcamp completo de desarrollo en Solana con Rust por Heavy Duty Builders"
                : "Complete Solana development bootcamp with Rust by Heavy Duty Builders",
            link: "https://www.youtube.com/watch?v=qi8aqeam3YM&list=PLqGHwsp-WqwKCT3uPgPWkqdHHUqGeT1Hy",
          },
        ],
      },
      {
        title: language === "es" ? "Comunidad" : "Community",
        icon: <Users className="w-6 h-6 text-solana-purple" />,
        resources: [
          {
            title: language === "es" ? "Foro de Solana" : "Solana Forum",
            description:
              language === "es" ? "Foro oficial de la comunidad de Solana" : "Official Solana community forum",
            link: "https://forums.solana.com/",
          },
          {
            title: language === "es" ? "Discord de Solana" : "Solana Discord",
            description: language === "es" ? "Canal de Discord oficial de Solana" : "Official Solana Discord channel",
            link: "https://discord.com/invite/solana",
          },
          {
            title: "Telegram SOLxAR",
            description:
              language === "es" ? "Grupo de Telegram de la comunidad SOLxAR" : "SOLxAR community Telegram group",
            link: "https://t.me/solx_ar",
          },
        ],
      },
      {
        title: language === "es" ? "Artículos" : "Articles",
        icon: <FileText className="w-6 h-6 text-solana-blue" />,
        resources: [
          {
            title: language === "es" ? "Blog de Solana" : "Solana Blog",
            description:
              language === "es" ? "Artículos oficiales del equipo de Solana" : "Official articles from the Solana team",
            link: "https://solana.com/news",
          },
          {
            title: "Solana Daily",
            description:
              language === "es"
                ? "Noticias diarias sobre el ecosistema Solana"
                : "Daily news about the Solana ecosystem",
            link: "https://solanadaily.io/",
          },
          {
            title: "Solana Compass",
            description: language === "es" ? "Guías y tutoriales sobre Solana" : "Guides and tutorials about Solana",
            link: "https://solanacompass.com/",
          },
        ],
      },
      {
        title: language === "es" ? "Inspiración" : "Inspiration",
        icon: <Lightbulb className="w-6 h-6 text-solana-teal" />,
        resources: [
          {
            title: "Solana Showcase",
            description:
              language === "es" ? "Proyectos destacados construidos en Solana" : "Featured projects built on Solana",
            link: "https://solana.com/ecosystem",
          },
          {
            title: "Solana Breakpoint",
            description: language === "es" ? "Conferencia anual de Solana" : "Annual Solana conference",
            link: "https://solana.com/breakpoint",
          },
          {
            title: "Solana Hacker House",
            description: language === "es" ? "Eventos para desarrolladores de Solana" : "Events for Solana developers",
            link: "https://solana.com/events",
          },
        ],
      },
    ],
    [language],
  ) 

  return (
    <main className="min-h-screen" key={key}>
      <div className="grid-background"></div>

      <CursorEffect />


      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 solana-text-gradient">
              {language === "es" ? "Recursos" : "Resources"}
            </h1>
            <p className="text-white/70 mb-12 max-w-3xl">
              {language === "es"
                ? "Explora nuestra colección de recursos para aprender, desarrollar y conectar con el ecosistema Solana. Desde documentación técnica hasta tutoriales y herramientas, aquí encontrarás todo lo que necesitas para comenzar tu viaje en Solana."
                : "Explore our collection of resources to learn, develop, and connect with the Solana ecosystem. From technical documentation to tutorials and tools, here you'll find everything you need to start your journey in Solana."}
            </p>

            {/* Resources by category */}
            <div className="space-y-16">
              {resourceCategories.map((category, index) => (
                <div key={index}>
                  <div className="flex items-center gap-3 mb-6">
                    {category.icon}
                    <h2 className="text-2xl font-bold">{category.title}</h2>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    {category.resources.map((resource, resourceIndex) => (
                      <div
                        key={resourceIndex}
                        className="backdrop-blur-md bg-black/60 p-6 rounded-xl border border-white/10 transition-all duration-300 hover:transform hover:scale-[1.02]"
                      >
                        <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                        <p className="text-white/70 mb-4">{resource.description}</p>
                        <Link href={resource.link} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" className="border-white/20 flex items-center gap-2">
                            {language === "es" ? "Explorar" : "Explore"}
                            <ExternalLink size={16} />
                          </Button>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Contribute resources CTA */}
            <div className="mt-16 text-center p-8 backdrop-blur-md bg-black/60 rounded-xl border border-white/10">
              <h2 className="text-2xl font-bold mb-4">
                {language === "es" ? "¿Conoces algún recurso útil?" : "Know any useful resources?"}
              </h2>
              <p className="text-white/70 mb-6 max-w-2xl mx-auto">
                {language === "es"
                  ? "Si conoces algún recurso que podría ser útil para la comunidad SOLxAR, compártelo con nosotros y ayuda a otros a aprender y crecer en el ecosistema Solana."
                  : "If you know of any resource that could be useful for the SOLxAR community, share it with us and help others learn and grow in the Solana ecosystem."}
              </p>
              <Button variant="solana" size="lg">
                {language === "es" ? "Compartir Recurso" : "Share Resource"}
              </Button>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}