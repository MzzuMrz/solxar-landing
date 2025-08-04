"use client"


import { Button } from "@/components/ui/button"
import { CursorEffect } from "@/components/cursor-effect"
import { LanguageProvider } from "@/context/language-context"
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider"
import Link from "next/link"
import Image from "next/image"
import { Users, MessageSquare, Shield, Zap } from "lucide-react"

export default function ContinentPage() {
  return (
    <LanguageProvider>
      <SmoothScrollProvider>
        <main className="min-h-screen">
          <CursorEffect />

          {/* Hero Section */}
          <section className="pt-32 pb-20 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
              <div className="flex flex-col md:flex-row gap-12 items-center max-w-6xl mx-auto">
                <div className="md:w-1/2">
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 solana-text-gradient">Continent</h1>
                  <p className="text-xl text-white/80 mb-8">
                    La red social diseñada por y para cripto-nativos en Solana
                  </p>
                  <div className="flex flex-wrap gap-4 mb-8">
                    <span className="px-3 py-1 rounded-full bg-solana-purple/20 text-solana-purple text-sm">
                      Social
                    </span>
                    <span className="px-3 py-1 rounded-full bg-solana-blue/20 text-solana-blue text-sm">Web3</span>
                    <span className="px-3 py-1 rounded-full bg-solana-teal/20 text-solana-teal text-sm">Comunidad</span>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="solana" size="lg">
                      Unirse a la beta
                    </Button>
                    <Button variant="outline" size="lg">
                      Conocer más
                    </Button>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="relative aspect-square max-w-md mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-solana-purple/30 via-solana-blue/20 to-solana-teal/30 rounded-2xl blur-2xl"></div>
                    <div className="relative z-10 bg-black/40 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 p-4">
                      <Image
                        src="/placeholder.svg?height=400&width=400"
                        alt="Continent App Preview"
                        width={400}
                        height={400}
                        className="rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Description Section */}
          <section className="py-20 bg-black/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 solana-text-gradient text-center">
                  Sobre Continent
                </h2>
                <div className="backdrop-blur-md bg-black/60 p-8 rounded-xl border border-white/10">
                  <p className="text-white/80 mb-6">
                    ContinentLabs es un equipo de desarrolladores nativos del mundo cripto que está construyendo una red
                    social innovadora basada en la blockchain de Solana. Su misión es conectar a poseedores de tokens
                    —desde fanáticos de memecoins hasta miembros de clubes NFT exclusivos, como amantes del vino— en
                    comunidades digitales seguras, libres de bots y diseñadas para maximizar el valor y la interacción
                    (high-alpha).
                  </p>
                  <p className="text-white/80 mb-6">
                    A diferencia de plataformas tradicionales como Discord, ContinentLabs ofrece una experiencia pensada
                    por y para cripto-nativos, con comunidades beta ofrece una experiencia pensada por y para
                    cripto-nativos, con comunidades beta token-gated (acceso restringido por posesión de tokens o NFTs).
                    Este enfoque garantiza autenticidad, exclusividad y una conexión genuina entre usuarios que
                    comparten intereses únicos, todo impulsado por la velocidad y eficiencia de Solana.
                  </p>
                  <p className="text-white/80">
                    En resumen, ContinentLabs busca revolucionar la interacción social en el ecosistema cripto, creando
                    un espacio donde los holders puedan encontrar comunidad, utilidad y pertenencia sin las limitaciones
                    de las plataformas convencionales.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 solana-text-gradient text-center">
                  Características principales
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="backdrop-blur-md bg-black/60 p-8 rounded-xl border border-white/10">
                    <div className="w-12 h-12 bg-solana-purple/20 rounded-full flex items-center justify-center mb-6">
                      <Shield className="w-6 h-6 text-solana-purple" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">Comunidades Token-Gated</h3>
                    <p className="text-white/70">
                      Acceso exclusivo a comunidades basado en la posesión de tokens o NFTs específicos, garantizando
                      autenticidad y valor para los miembros.
                    </p>
                  </div>

                  <div className="backdrop-blur-md bg-black/60 p-8 rounded-xl border border-white/10">
                    <div className="w-12 h-12 bg-solana-blue/20 rounded-full flex items-center justify-center mb-6">
                      <Users className="w-6 h-6 text-solana-blue" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">Libre de Bots</h3>
                    <p className="text-white/70">
                      Entorno seguro y auténtico donde cada usuario es verificado a través de la blockchain, eliminando
                      spam y actividad fraudulenta.
                    </p>
                  </div>

                  <div className="backdrop-blur-md bg-black/60 p-8 rounded-xl border border-white/10">
                    <div className="w-12 h-12 bg-solana-teal/20 rounded-full flex items-center justify-center mb-6">
                      <MessageSquare className="w-6 h-6 text-solana-teal" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">Interacción High-Alpha</h3>
                    <p className="text-white/70">
                      Conversaciones de alto valor entre miembros con intereses compartidos, facilitando networking y
                      oportunidades de colaboración.
                    </p>
                  </div>

                  <div className="backdrop-blur-md bg-black/60 p-8 rounded-xl border border-white/10">
                    <div className="w-12 h-12 bg-solana-purple/20 rounded-full flex items-center justify-center mb-6">
                      <Zap className="w-6 h-6 text-solana-purple" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">Velocidad de Solana</h3>
                    <p className="text-white/70">
                      Experiencia fluida y rápida gracias a la infraestructura de Solana, permitiendo interacciones
                      instantáneas y verificaciones en tiempo real.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="py-20 bg-black/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 solana-text-gradient text-center">Casos de uso</h2>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="backdrop-blur-md bg-black/60 p-6 rounded-xl border border-white/10">
                    <div className="aspect-video w-full bg-black/50 rounded-lg mb-4 flex items-center justify-center">
                      <Image
                        src="/placeholder.svg?height=150&width=250"
                        alt="Comunidades de Memecoins"
                        width={250}
                        height={150}
                        className="rounded-lg"
                      />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-white">Comunidades de Memecoins</h3>
                    <p className="text-white/70 text-sm">
                      Espacios exclusivos para holders de memecoins donde pueden compartir información, estrategias y
                      construir comunidad.
                    </p>
                  </div>

                  <div className="backdrop-blur-md bg-black/60 p-6 rounded-xl border border-white/10">
                    <div className="aspect-video w-full bg-black/50 rounded-lg mb-4 flex items-center justify-center">
                      <Image
                        src="/placeholder.svg?height=150&width=250"
                        alt="Clubes NFT"
                        width={250}
                        height={150}
                        className="rounded-lg"
                      />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-white">Clubes NFT</h3>
                    <p className="text-white/70 text-sm">
                      Comunidades exclusivas para poseedores de colecciones NFT específicas, con beneficios y
                      experiencias únicas.
                    </p>
                  </div>

                  <div className="backdrop-blur-md bg-black/60 p-6 rounded-xl border border-white/10">
                    <div className="aspect-video w-full bg-black/50 rounded-lg mb-4 flex items-center justify-center">
                      <Image
                        src="/placeholder.svg?height=150&width=250"
                        alt="Comunidades de Interés"
                        width={250}
                        height={150}
                        className="rounded-lg"
                      />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-white">Comunidades de Interés</h3>
                    <p className="text-white/70 text-sm">
                      Grupos temáticos como amantes del vino, arte o deportes, verificados a través de tokens
                      relacionados con esos intereses.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 solana-text-gradient">
                  Únete a la revolución social en Web3
                </h2>
                <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                  Sé parte de las primeras comunidades token-gated en Continent y experimenta una nueva forma de
                  conectar con otros cripto-nativos.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button variant="solana" size="lg">
                    Unirse a la beta
                  </Button>
                  <Link href="https://twitter.com/continent_labs" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="lg">
                      Seguir en Twitter
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

        </main>
      </SmoothScrollProvider>
    </LanguageProvider>
  )
}
