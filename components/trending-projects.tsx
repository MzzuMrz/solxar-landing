"use client"

import { useLanguage } from "@/context/language-context"
import { useCarousel } from "@/hooks/useCarousel"
import { trendingProjectsData } from "@/lib/projects-data"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function TrendingProjects() {
  const { t } = useLanguage()
  const { currentIndex, goToSlide, next, prev, handleMouseEnter, handleMouseLeave } = useCarousel(trendingProjectsData.length);

  return (
    <section className="superteam-section">
      <h2 className="superteam-section-title">{t("projectsSection.title")}</h2>
      <p className="superteam-section-subtitle">{t("projectsSection.subtitle")}</p>

      <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10">
          {trendingProjectsData.map((project, index) => (
            <div
              key={project.id}
              className="absolute inset-0 transition-opacity duration-500"
              style={{ opacity: index === currentIndex ? 1 : 0 }}
            >
              <Image src={project.image} alt={t(`projectsSection.${project.id}.title`)} fill className="object-cover" sizes="(max-width: 768px) 100vw, 80vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-3xl font-bold">{t(`projectsSection.${project.id}.title`)}</h3>
                <p className="text-white/80 mt-2 mb-4 max-w-lg">{t(`projectsSection.${project.id}.description`)}</p>
                <div className="flex gap-2">
                  <span className="project-badge bg-solana-teal/20 text-solana-teal">{t(`projectsSection.${project.id}.status`)}</span>
                  <span className="project-badge bg-solana-purple/20 text-solana-purple">{t(`projectsSection.${project.id}.funding`)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button onClick={prev} className="carousel-nav left-4"><ChevronLeft size={24} /></button>
        <button onClick={next} className="carousel-nav right-4"><ChevronRight size={24} /></button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {trendingProjectsData.map((_, index) => (
            <button key={index} onClick={() => goToSlide(index)} className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? "bg-white" : "bg-white/30 hover:bg-white/50"}`} />
          ))}
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link href="/projects">
          <Button variant="outline" className="border-white/20">{t("projectsSection.viewAll")}</Button>
        </Link>
      </div>
    </section>
  )
}