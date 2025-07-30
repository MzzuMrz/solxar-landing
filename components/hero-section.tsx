"use client"

import { useLanguage } from "@/context/language-context"
import { useSmoothScroll } from "@/components/smooth-scroll-provider"
import { ArrowRight, Play } from "lucide-react"
import { useTypingEffect } from "@/hooks/useTypingEffect"
import { useMemo } from "react"
import Link from "next/link"

export function HeroSection() {
  const { t } = useLanguage()
  const { scrollToSection } = useSmoothScroll()
  
  const titleLines = t("hero.title") as unknown as string[]
  const wordsToType = t("hero.subtitleWords") as unknown as string[]
  const typedWord = useTypingEffect(wordsToType)
  const subtitleTemplate = t("hero.subtitle")

  const subtitleParts = useMemo(() => subtitleTemplate.split('{word}'), [subtitleTemplate])

  return (
    <section id="top" className="superteam-hero">
      <div className="superteam-hero-content">
        <h1 className="superteam-hero-title">
          {Array.isArray(titleLines) && titleLines.map((line, index) => (
            <span key={index} className="block">{line}</span>
          ))}
          <span className="gradient-text">{t("hero.titleHighlight")}</span>
        </h1>

        <p className="superteam-hero-subtitle">
          {subtitleParts[0]}
          <span className="gradient-text">{typedWord}</span>
          <span className="typing-cursor" />
          {subtitleParts[1]}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
          <a
            href="https://t.me/solx_ar/1"
            target="_blank"
            rel="noopener noreferrer"
            className="superteam-btn superteam-btn-primary"
          >
            {t("hero.buttonPrimary")} <ArrowRight size={20} />
          </a>
          <button onClick={() => scrollToSection("about")} className="superteam-btn superteam-btn-secondary">
            <Play size={20} /> {t("hero.buttonSecondary")}
          </button>
        </div>
      </div>
    </section>
  )
}