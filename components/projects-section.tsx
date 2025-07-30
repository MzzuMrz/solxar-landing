import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function ProjectsSection() {
  const projects = [
    {
      title: "SOLxAR Hackathon",
      description: "Competencia de desarrollo para construir aplicaciones descentralizadas en Solana.",
      image: "/placeholder.svg?height=200&width=350",
      link: "#",
      tags: ["Hackathon", "Desarrollo", "Premios"],
      status: "Desarrollo",
      funding: "Crowdfunding",
    },
    {
      title: "Solana Pay Argentina",
      description: "Implementación de pagos con Solana para comercios locales en Buenos Aires.",
      image: "/placeholder.svg?height=200&width=350",
      link: "#",
      tags: ["Pagos", "Comercio", "Integración"],
      status: "Live",
      funding: "Seed",
    },
    {
      title: "NFT Buenos Aires",
      description: "Colección de NFTs que representa lugares icónicos de Buenos Aires en la blockchain de Solana.",
      image: "/placeholder.svg?height=200&width=350",
      link: "#",
      tags: ["NFT", "Arte", "Cultura"],
      status: "Idea",
      funding: "Bootstrap",
    },
    {
      title: "DeFi Education",
      description: "Programa educativo sobre finanzas descentralizadas en el ecosistema Solana.",
      image: "/placeholder.svg?height=200&width=350",
      link: "#",
      tags: ["Educación", "DeFi", "Workshops"],
      status: "Expansión",
      funding: "Series A",
    },
  ]

  // Mapeo de estados a valores numéricos para las barras de progreso
  const statusMap = {
    Idea: 1,
    Desarrollo: 2,
    Live: 3,
    Expansión: 4,
  }

  const fundingMap = {
    Bootstrap: 1,
    Crowdfunding: 2,
    "Pre-seed": 3,
    Seed: 4,
    "Series A": 5,
  }

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-black/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 solana-text-gradient text-center">Proyectos Destacados</h2>
          <p className="text-white/70 mb-12 max-w-2xl mx-auto text-center">
            Descubre los proyectos desarrollados por miembros de nuestra comunidad en el ecosistema Solana
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="backdrop-blur-md bg-black/60 rounded-xl overflow-hidden border border-white/10"
              >
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
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-white/70 mb-4">{project.description}</p>

                  {/* Barras de progreso para estado del proyecto */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-white/70">Estado del proyecto:</span>
                      <span className="text-sm font-medium text-white">{project.status}</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full solana-gradient"
                        style={{ width: `${(statusMap[project.status as keyof typeof statusMap] / 4) * 100}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-white/50 mt-1">
                      <span>Idea</span>
                      <span>Desarrollo</span>
                      <span>Live</span>
                      <span>Expansión</span>
                    </div>
                  </div>

                  {/* Barras de progreso para financiamiento */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-white/70">Financiamiento:</span>
                      <span className="text-sm font-medium text-white">{project.funding}</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full solana-gradient"
                        style={{ width: `${(fundingMap[project.funding as keyof typeof fundingMap] / 5) * 100}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-white/50 mt-1">
                      <span>Bootstrap</span>
                      <span>Crowdfunding</span>
                      <span>Pre-seed</span>
                      <span>Seed</span>
                      <span>Series A</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link href={project.link}>
                    <Button variant="outline" className="border-white/20">
                      Ver Proyecto
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-white/70 mb-6">¿Tienes un proyecto en Solana y quieres mostrarlo a la comunidad?</p>
            <Link href="#community">
              <Button variant="solana">Enviar Proyecto</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
