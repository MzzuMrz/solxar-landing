"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { CursorEffect } from "@/components/cursor-effect"
import { resourceData } from "@/lib/resources-data"
import type { CSSProperties } from "react"

function ResourceCard({ resourceKey, link }: { resourceKey: string, link: string }) {
  const { t } = useLanguage()
  return (
    <div className="resource-card">
      <h3 className="text-xl font-semibold mb-2">{t(`resourcesPage.resources.${resourceKey}.title`)}</h3>
      <p className="text-white/70 mb-4 flex-grow">{t(`resourcesPage.resources.${resourceKey}.description`)}</p>
      <Link href={link} target="_blank" rel="noopener noreferrer">
        <Button variant="outline" className="border-white/20 w-full">
          {t("resourcesPage.explore")} <ExternalLink size={16} className="ml-2" />
        </Button>
      </Link>
    </div>
  )
}

export default function ResourcesPage() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen">
      <div className="grid-background"></div>
      <CursorEffect />
      <Header />

      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 solana-text-gradient">{t("resourcesPage.title")}</h1>
            <p className="text-white/70 mb-16 max-w-3xl">{t("resourcesPage.subtitle")}</p>

            <div className="space-y-16">
              {resourceData.map((category, index) => {
                const Icon = category.icon
                return (
                  <div key={category.categoryKey} className="resource-category" style={{'--delay-index': index} as CSSProperties}>
                    <div className="flex items-center gap-4 mb-8">
                      <Icon className="w-8 h-8 text-solana-purple" />
                      <h2 className="text-3xl font-bold">{t(`resourcesPage.categories.${category.categoryKey}`)}</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {category.items.map(resource => (
                        <ResourceCard key={resource.key} resourceKey={resource.key} link={resource.link} />
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-24 text-center p-8 backdrop-blur-md bg-black/60 rounded-xl border border-white/10">
              <h2 className="text-2xl font-bold mb-4">{t("resourcesPage.ctaTitle")}</h2>
              <p className="text-white/70 mb-6 max-w-2xl mx-auto">{t("resourcesPage.ctaSubtitle")}</p>
              <Button variant="solana" size="lg">{t("resourcesPage.ctaButton")}</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}