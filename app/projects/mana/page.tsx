"use client"

import { Button } from "@/components/ui/button"
import { LanguageProvider } from "@/context/language-context"
import Link from "next/link"
import Image from "next/image"
import { Brain, BarChart3, Users, Database } from "lucide-react"

export default function ManaPage() {
  return (
    <LanguageProvider>
      <main className="min-h-screen">

        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row gap-12 items-center max-w-6xl mx-auto">
              <div className="md:w-1/2">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 solana-text-gradient">MANA</h1>
                <p className="text-xl text-white/80 mb-8">
                  Herramienta de IA para Web3 que analiza comportamientos reales y crea scoring para comunidades
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <span className="px-3 py-1 rounded-full bg-solana-purple/20 text-solana-purple text-sm">AI</span>
                  <span className="px-3 py-1 rounded-full bg-solana-blue/20 text-solana-blue text-sm">Analytics</span>
                  <span className="px-3 py-1 rounded-full bg-solana-teal/20 text-solana-teal text-sm">Comunidad</span>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button variant="solana" size="lg">
                    Solicitar acceso
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
                      alt="MANA Dashboard Preview"
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
              <h2 className="text-3xl md:text-4xl font-bold mb-8 solana-text-gradient text-center">Sobre MANA</h2>
              <div className="backdrop-blur-md bg-black/60 p-8 rounded-xl border border-white/10">
                <p className="text-white/80 mb-6">
                  MANA es una herramienta de inteligencia artificial diseñada específicamente para el ecosistema Web3
                  que analiza comportamientos reales de usuarios en comunidades descentralizadas y crea un sistema de
                  scoring basado en su participación, contribuciones y compromiso.
                </p>
                <p className="text-white/80 mb-6">
                  Utilizando algoritmos avanzados de aprendizaje automático y análisis de datos on-chain, MANA
                  proporciona a los administradores de comunidades y proyectos blockchain información valiosa sobre sus
                  miembros, permitiéndoles tomar decisiones más informadas, identificar a los miembros más valiosos y
                  mejorar la salud general de sus comunidades.
                </p>
                <p className="text-white/80">
                  Construido sobre Solana para aprovechar su velocidad y eficiencia, MANA ofrece análisis en tiempo
                  real, visualizaciones intuitivas y métricas personalizables que ayudan a entender mejor la dinámica de
                  las comunidades Web3 y a optimizar las estrategias de participación y retención.
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
                    <Brain className="w-6 h-6 text-solana-purple" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">Análisis de IA avanzado</h3>
                  <p className="text-white/70">
                    Algoritmos de inteligencia artificial que analizan patrones de comportamiento complejos y
                    proporcionan insights accionables sobre la dinámica de la comunidad.
                  </p>
                </div>

                <div className="backdrop-blur-md bg-black/60 p-8 rounded-xl border border-white/10">
                  <div className="w-12 h-12 bg-solana-blue/20 rounded-full flex items-center justify-center mb-6">
                    <BarChart3 className="w-6 h-6 text-solana-blue" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">Scoring de comportamiento</h3>
                  <p className="text-white/70">
                    Sistema de puntuación multidimensional que evalúa la calidad de las interacciones, la consistencia
                    de la participación y el valor aportado por cada miembro.
                  </p>
                </div>

                <div className="backdrop-blur-md bg-black/60 p-8 rounded-xl border border-white/10">
                  <div className="w-12 h-12 bg-solana-teal/20 rounded-full flex items-center justify-center mb-6">
                    <Database className="w-6 h-6 text-solana-teal" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">Análisis on-chain</h3>
                  <p className="text-white/70">
                    Integración con datos de la blockchain para analizar transacciones, posesión de tokens y otras
                    actividades verificables que demuestran compromiso real.
                  </p>
                </div>

                <div className="backdrop-blur-md bg-black/60 p-8 rounded-xl border border-white/10">
                  <div className="w-12 h-12 bg-solana-purple/20 rounded-full flex items-center justify-center mb-6">
                    <Users className="w-6 h-6 text-solana-purple" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">Perfiles de comunidad</h3>
                  <p className="text-white/70">
                    Visualizaciones detalladas de la salud de la comunidad, identificando segmentos de usuarios,
                    tendencias de participación y oportunidades de mejora.
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
                      alt="DAOs"
                      width={250}
                      height={150}
                      className="rounded-lg"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">Organizaciones Autónomas Descentralizadas</h3>
                  <p className="text-white/70 text-sm">
                    Ayuda a las DAOs a identificar a los miembros más activos y valiosos para distribuir recompensas y
                    derechos de voto de manera más justa.
                  </p>
                </div>

                <div className="backdrop-blur-md bg-black/60 p-6 rounded-xl border border-white/10">
                  <div className="aspect-video w-full bg-black/50 rounded-lg mb-4 flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=150&width=250"
                      alt="Proyectos NFT"
                      width={250}
                      height={150}
                      className="rounded-lg"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">Proyectos NFT</h3>
                  <p className="text-white/70 text-sm">
                    Permite a los proyectos NFT entender mejor a sus coleccionistas y recompensar a los más
                    comprometidos con la comunidad.
                  </p>
                </div>

                <div className="backdrop-blur-md bg-black/60 p-6 rounded-xl border border-white/10">
                  <div className="aspect-video w-full bg-black/50 rounded-lg mb-4 flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=150&width=250"
                      alt="Protocolos DeFi"
                      width={250}
                      height={150}
                      className="rounded-lg"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">Protocolos DeFi</h3>
                  <p className="text-white/70 text-sm">
                    Ayuda a los protocolos financieros descentralizados a identificar a los usuarios más leales y a
                    diseñar programas de incentivos más efectivos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-16 solana-text-gradient text-center">
                Cómo funciona MANA
              </h2>

              <div className="grid md:grid-cols-4 gap-6">
                <div className="backdrop-blur-md bg-black/60 p-6 rounded-xl border border-white/10 text-center">
                  <div className="w-12 h-12 rounded-full bg-solana-purple flex items-center justify-center mx-auto mb-4 text-black font-bold">
                    1
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">Integración</h3>
                  <p className="text-white/70 text-sm">
                    Conecta MANA con tus plataformas comunitarias (Discord, Telegram) y wallets de Solana.
                  </p>
                </div>

                <div className="backdrop-blur-md bg-black/60 p-6 rounded-xl border border-white/10 text-center">
                  <div className="w-12 h-12 rounded-full bg-solana-blue flex items-center justify-center mx-auto mb-4 text-black font-bold">
                    2
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">Recopilación de datos</h3>
                  <p className="text-white/70 text-sm">
                    MANA comienza a recopilar datos de interacción, transacciones y participación de forma anónima.
                  </p>
                </div>

                <div className="backdrop-blur-md bg-black/60 p-6 rounded-xl border border-white/10 text-center">
                  <div className="w-12 h-12 rounded-full bg-solana-teal flex items-center justify-center mx-auto mb-4 text-black font-bold">
                    3
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">Análisis</h3>
                  <p className="text-white/70 text-sm">
                    Los algoritmos de IA analizan los datos para identificar patrones y asignar puntuaciones.
                  </p>
                </div>

                <div className="backdrop-blur-md bg-black/60 p-6 rounded-xl border border-white/10 text-center">
                  <div className="w-12 h-12 rounded-full bg-solana-purple flex items-center justify-center mx-auto mb-4 text-black font-bold">
                    4
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">Insights</h3>
                  <p className="text-white/70 text-sm">
                    Accede a un dashboard personalizado con métricas, visualizaciones y recomendaciones.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 solana-text-gradient">
                Potencia tu comunidad con MANA
              </h2>
              <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                Únete a la lista de espera para ser de los primeros en acceder a nuestra herramienta de análisis de
                comunidades basada en IA.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button variant="solana" size="lg">
                  Solicitar acceso
                </Button>
                <Link href="https://twitter.com/mana_project" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg">
                    Seguir en Twitter
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </LanguageProvider>
  )
}
