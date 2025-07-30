"use client"

import { useLanguage } from "@/context/language-context"
import { Target, Heart, Lightbulb, Users } from "lucide-react"
import type { CSSProperties } from "react"

const valueKeys = ["mission", "values", "vision", "community"]

const valueIcons: { [key: string]: React.ElementType } = {
  mission: Target,
  values: Heart,
  vision: Lightbulb,
  community: Users,
}

export function MissionSection() {
  const { t } = useLanguage()

  return (
    <section className="superteam-section">
      <div className="text-center mb-16">
        <h2 className="superteam-section-title">{t("missionSection.title")}</h2>
        <p className="superteam-section-subtitle">{t("missionSection.subtitle")}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {valueKeys.map((key, index) => {
          const Icon = valueIcons[key]
          return (
            <div
              key={key}
              className="superteam-card mission-card"
              style={{ "--card-delay": `${index * 0.1}s` } as CSSProperties}
            >
              <div className="flex items-center mb-4">
                <Icon size={32} className="text-solana-purple mr-4" />
                <h3 className="superteam-card-title text-xl">{t(`missionSection.${key}.title`)}</h3>
              </div>
              <p className="superteam-card-text">{t(`missionSection.${key}.description`)}</p>
            </div>
          )
        })}
      </div>

      <div className="mt-16 text-center">
        <div className="superteam-card why-solxar-card max-w-4xl mx-auto">
          <h3 className="superteam-card-title text-2xl mb-4">{t("missionSection.why.title")}</h3>
          <p className="superteam-card-text text-lg">{t("missionSection.why.description")}</p>
        </div>
      </div>
    </section>
  )
}