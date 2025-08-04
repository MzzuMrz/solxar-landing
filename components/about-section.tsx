"use client"

import { useLanguage } from "@/context/language-context"
import { Users, Rocket, Globe, Zap } from "lucide-react"
import type { CSSProperties } from "react"


const featureKeys = ["community", "projects", "reach", "impact"]
const featureIcons: { [key: string]: React.ElementType } = { community: Users, projects: Rocket, reach: Globe, impact: Zap }

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section id="about" className="superteam-section overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Columna Izquierda: Contenido Principal y Stats */}
        <div className="about-fused-content">
          <h2 className="superteam-section-title text-left mb-6">{t("about.title")}</h2>
          <p className="superteam-section-subtitle text-left !max-w-full mb-10">{t("about.subtitle")}</p>
        </div>

        {/* Columna Derecha: Features */}
        <div className="grid grid-cols-2 gap-6">
          {featureKeys.map((key, index) => {
            const Icon = featureIcons[key]
            return (
              <div key={key} className="superteam-card fused-feature-card" style={{ "--card-delay": `${index * 0.1}s` } as CSSProperties}>
                <Icon size={32} className="text-solana-green mb-4" />
                <h3 className="superteam-card-title !text-xl">{t(`about.features.${key}.title`)}</h3>
                <p className="superteam-card-text !text-base">{t(`about.features.${key}.description`)}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}