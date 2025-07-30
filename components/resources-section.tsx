import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

export function ResourcesSection() {
  const { language } = useLanguage()
  const resources = [
    {
      title: "Documentación de Solana",
      description: "Guías oficiales y documentación para desarrolladores",
      link: "https://docs.solana.com/",
    },
    {
      title: "Solana Cookbook",
      description: "Recetas y ejemplos para construir en Solana",
      link: "https://solanacookbook.com/",
    },
    {
      title: "Solana University",
      description: "Recursos educativos para aprender sobre Solana",
      link: "https://solana.com/developers",
    },
    {
      title: "Solana Playground",
      description: "Entorno de desarrollo en línea para Solana",
      link: "https://beta.solpg.io/",
    },
  ]

  return (
    <section id="resources" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 solana-text-gradient text-center">Recursos</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((resource) => (
              <div key={resource.title} className="backdrop-blur-md bg-black/60 p-6 rounded-lg border border-white/10">
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

          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-4">¿Quieres contribuir?</h3>
            <p className="text-white/70 mb-6">
              Si tienes conocimientos sobre Solana y quieres compartirlos con la comunidad, ¡contáctanos!
            </p>
            <Link href="https://t.me/solx_ar" target="_blank" rel="noopener noreferrer">
              <Button variant="solana">{language === "es" ? "Contactar" : "Contact"}</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
