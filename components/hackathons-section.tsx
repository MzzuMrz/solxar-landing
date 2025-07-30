"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Trophy, Users, Code } from "lucide-react"
import { useContext } from "react"
import { LanguageContext } from "@/context/language-context"

interface HackathonsSectionProps {
  id?: string
}

export function HackathonsSection({ id }: HackathonsSectionProps) {
  const { language } = useContext(LanguageContext)

  const upcomingHackathon = {
    title: "Winter Hackathon - 25",
    date: "TBA",
    location: "Buenos Aires, Argentina",
    description: "En este invierno estamos calentando para el Hackaton Global de Solana.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Flux_Dev_Aqu_tienes_un_prompt_en_ingls_para_generar_la_imagen__0-7G5ouGcOQC1ir0V3QNBwz841RZoPxg.jpeg",
    prizes: language === "es" ? "¡Colabora para hacer crecer este pozo!" : "Collaborate to grow this prize pool!",
    registrationLink: "#register",
  }

  return (
    <section id={id} className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 solana-text-gradient text-center">Hackathons</h2>
          <p className="text-white/70 mb-12 max-w-2xl mx-auto text-center">
            {language === "es"
              ? "Participa en nuestros hackathons y construye el futuro de Solana junto a desarrolladores talentosos de toda la región"
              : "Participate in our hackathons and build the future of Solana with talented developers from across the region"}
          </p>

          {/* Upcoming Hackathon */}
          <div className="backdrop-blur-md bg-black/60 rounded-xl overflow-hidden mb-16 border border-white/10">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative aspect-video md:aspect-auto">
                <Image
                  src={upcomingHackathon.image || "/placeholder.svg"}
                  alt={upcomingHackathon.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent md:hidden"></div>
              </div>

              <div className="p-8 flex flex-col justify-center">
                <div className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm mb-4">
                  {language === "es" ? "Próximo Evento" : "Upcoming Event"}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">{upcomingHackathon.title}</h3>

                <div className="flex items-center gap-2 text-white/70 mb-2">
                  <Calendar size={16} />
                  <span>{upcomingHackathon.date}</span>
                </div>

                <div className="flex items-center gap-2 text-white/70 mb-4">
                  <Users size={16} />
                  <span>{upcomingHackathon.location}</span>
                </div>

                <p className="text-white/80 mb-4">{upcomingHackathon.description}</p>

                <div className="flex items-center gap-2 text-solana-teal mb-6">
                  <Trophy size={16} />
                  <span className="font-semibold">{upcomingHackathon.prizes}</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href={upcomingHackathon.registrationLink}>
                    <Button variant="solana" size="lg">
                      {language === "es" ? "Quiero participar" : "I want to participate"}
                    </Button>
                  </Link>
                  <Link href={upcomingHackathon.registrationLink}>
                    <Button variant="outline" size="lg" className="border-white/20">
                      {language === "es" ? "Quiero soportar" : "I want to support"}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center p-8 backdrop-blur-md bg-black/60 rounded-xl border border-white/10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Code className="w-6 h-6 text-solana-blue" />
              <h3 className="text-xl font-semibold">
                {language === "es" ? "¿Quieres organizar un hackathon?" : "Want to organize a hackathon?"}
              </h3>
            </div>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              {language === "es"
                ? "Si representas a una empresa o institución y estás interesado en organizar un hackathon con SOLxAR, contáctanos para discutir posibilidades de colaboración."
                : "If you represent a company or institution and are interested in organizing a hackathon with SOLxAR, contact us to discuss collaboration possibilities."}
            </p>
            <Button variant="solana">{language === "es" ? "Contactar" : "Contact"}</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
