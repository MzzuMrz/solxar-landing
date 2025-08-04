"use client"

import { ValidatorSection } from "@/components/validator-section"
import { CursorEffect } from "@/components/cursor-effect"
import { LanguageProvider } from "@/context/language-context"
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider"
import { useLanguage } from "@/context/language-context"
import { ChevronLeft, Home } from "lucide-react"
import Link from "next/link"

function ValidatorPageContent() {
  const { language } = useLanguage()

  const translations = {
    en: {
      backToHome: "Back to Home",
      home: "Home",
      validator: "Validator",
      title: "SOLxAR Validator",
      subtitle: "Empowering the Solana network while funding educational and development programs in Argentina",
      whyStake: "Why Stake with SOLxAR?",
      competitiveRewards: "Competitive staking rewards",
      supportEducation: "Support educational programs in Argentina",
      strengthenNetwork: "Strengthen the Solana network security",
      fundDevelopment: "Fund local blockchain development",
      validatorStats: "Validator Stats",
      commission: "Commission:",
      uptime: "Uptime:",
      status: "Status:",
      voteAccount: "Vote Account:",
      comingSoon: "Coming Soon",
      howToStake: "How to Stake",
      howToStakeDesc:
        "Our validator is currently in setup phase. Once live, you'll be able to stake your SOL and start earning rewards while supporting the Argentine Solana ecosystem.",
      step1: "Connect your wallet",
      step2: "Choose amount to stake",
      step3: "Start earning rewards",
    },
    es: {
      backToHome: "Volver al Inicio",
      home: "Inicio",
      validator: "Validador",
      title: "Validador SOLxAR",
      subtitle: "Potenciando la red Solana mientras financiamos programas educativos y de desarrollo en Argentina",
      whyStake: "¿Por qué hacer Staking con SOLxAR?",
      competitiveRewards: "Recompensas competitivas de staking",
      supportEducation: "Apoyar programas educativos en Argentina",
      strengthenNetwork: "Fortalecer la seguridad de la red Solana",
      fundDevelopment: "Financiar desarrollo blockchain local",
      validatorStats: "Estadísticas del Validador",
      commission: "Comisión:",
      uptime: "Tiempo activo:",
      status: "Estado:",
      voteAccount: "Cuenta de voto:",
      comingSoon: "Próximamente",
      howToStake: "Cómo hacer Staking",
      howToStakeDesc:
        "Nuestro validador está actualmente en fase de configuración. Una vez activo, podrás hacer staking de tu SOL y comenzar a ganar recompensas mientras apoyas el ecosistema Solana argentino.",
      step1: "Conecta tu billetera",
      step2: "Elige la cantidad a stakear",
      step3: "Comienza a ganar recompensas",
    },
  }

  const t = translations[language]

  return (
    <main className="min-h-screen">
      <CursorEffect />

      {/* Breadcrumb navigation */}
      <section className="pt-24 pb-4 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm text-white/60 mb-8">
            <Link href="/" className="flex items-center gap-1 hover:text-solana-teal transition-colors duration-300">
              <Home className="w-4 h-4" />
              {t.home}
            </Link>
            <span>/</span>
            <span className="text-white/80">{t.validator}</span>
          </nav>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-solana-teal transition-colors duration-300 mb-6"
          >
            <ChevronLeft className="w-4 h-4" />
            {t.backToHome}
          </Link>
        </div>
      </section>

      {/* Hero section for validator page */}
      <section className="pb-12 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 solana-text-gradient">{t.title}</h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">{t.subtitle}</p>
          </div>
        </div>
      </section>

      <ValidatorSection id="validator" />

      {/* Additional information section */}
      <section className="py-12 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="solana-border-gradient p-6 rounded-xl backdrop-blur-sm bg-black/20">
                <h3 className="text-2xl font-bold mb-4 solana-text-gradient">{t.whyStake}</h3>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-solana-teal mt-2 flex-shrink-0"></div>
                    <span>{t.competitiveRewards}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-solana-purple mt-2 flex-shrink-0"></div>
                    <span>{t.supportEducation}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-solana-teal mt-2 flex-shrink-0"></div>
                    <span>{t.strengthenNetwork}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-solana-purple mt-2 flex-shrink-0"></div>
                    <span>{t.fundDevelopment}</span>
                  </li>
                </ul>
              </div>

              <div className="solana-border-gradient p-6 rounded-xl backdrop-blur-sm bg-black/20">
                <h3 className="text-2xl font-bold mb-4 solana-text-gradient">{t.validatorStats}</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white/70">{t.commission}</span>
                    <span className="text-solana-teal font-semibold">5%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/70">{t.uptime}</span>
                    <span className="text-solana-teal font-semibold">99.9%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/70">{t.status}</span>
                    <span className="text-green-400 font-semibold">{t.comingSoon}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/70">{t.voteAccount}</span>
                    <span className="text-solana-purple font-mono text-sm">SoLxAR...</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="solana-border-gradient p-6 rounded-xl backdrop-blur-sm bg-black/20">
                <h3 className="text-2xl font-bold mb-4 solana-text-gradient">{t.howToStake}</h3>
                <p className="text-white/70 mb-4">{t.howToStakeDesc}</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="bg-black/40 px-4 py-2 rounded-lg border border-white/10">
                    <span className="text-sm text-white/60">Step 1:</span>
                    <p className="text-white">{t.step1}</p>
                  </div>
                  <div className="bg-black/40 px-4 py-2 rounded-lg border border-white/10">
                    <span className="text-sm text-white/60">Step 2:</span>
                    <p className="text-white">{t.step2}</p>
                  </div>
                  <div className="bg-black/40 px-4 py-2 rounded-lg border border-white/10">
                    <span className="text-sm text-white/60">Step 3:</span>
                    <p className="text-white">{t.step3}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default function ValidatorPage() {
  return (
    <LanguageProvider>
      <SmoothScrollProvider>
        <ValidatorPageContent />
      </SmoothScrollProvider>
    </LanguageProvider>
  )
}
