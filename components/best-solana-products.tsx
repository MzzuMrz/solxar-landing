"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { useLanguage } from "@/context/language-context"
import { trendingProjectsData } from "@/lib/projects-data"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const TRANSITION_DURATION = 500; 
const AUTOPLAY_INTERVAL = 5000;

export function BestSolanaProducts() {
  const { t } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const isTransitioningRef = useRef(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioningRef.current) return;
    
    isTransitioningRef.current = true;
    setCurrentIndex(index);
    
    setTimeout(() => {
      isTransitioningRef.current = false;
    }, TRANSITION_DURATION);
  }, []);

  const nextSlide = useCallback(() => {
    const nextIndex = (currentIndex + 1) % trendingProjectsData.length;
    goToSlide(nextIndex);
  }, [currentIndex, goToSlide]);

  const prevSlide = useCallback(() => {
    const prevIndex = (currentIndex - 1 + trendingProjectsData.length) % trendingProjectsData.length;
    goToSlide(prevIndex);
  }, [currentIndex, goToSlide]);

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(nextSlide, AUTOPLAY_INTERVAL);
    }
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, nextSlide]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

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
              style={{ opacity: index === currentIndex ? 1 : 0, pointerEvents: index === currentIndex ? 'auto' : 'none' }}
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

        <button onClick={prevSlide} className="carousel-nav left-4" aria-label="Previous Project"><ChevronLeft size={24} /></button>
        <button onClick={nextSlide} className="carousel-nav right-4" aria-label="Next Project"><ChevronRight size={24} /></button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {trendingProjectsData.map((_, index) => (
            <button key={index} onClick={() => goToSlide(index)} className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? "bg-white" : "bg-white/30 hover:bg-white/50"}`} aria-label={`Go to project ${index + 1}`} />
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