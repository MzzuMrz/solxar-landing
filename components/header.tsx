"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X, Home } from "lucide-react"
import { useState, useEffect } from "react"
import { useLanguage } from "@/context/language-context"
import { useSmoothScroll } from "@/components/smooth-scroll-provider"
import { usePathname } from "next/navigation"
import { LanguageSwitcher } from "@/components/language-switcher"

type NavLink = {
  type: "scroll";
  key: string;
  sectionId: string;
} | {
  type: "link";
  key: string;
  href: string;
  icon?: any;
}

const navLinks: NavLink[] = [
  { type: "link", key: "nav.home", href: "/" },
  { type: "scroll", key: "nav.validator", sectionId: "validator" },
  { type: "link", key: "nav.projects", href: "/projects" },
  { type: "link", key: "nav.resources", href: "/resources" },
]

const yoshiFrames = [
  "/images/yoshi.png",
  "/images/yoshi2.png",
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [shibaVisible, setShibaVisible] = useState(false)
  const [yoshiFrame, setYoshiFrame] = useState(0)
  const [validatorHover, setValidatorHover] = useState(false)
  const { t, language } = useLanguage()
  const { scrollToSection } = useSmoothScroll()
  const pathname = usePathname()

  const isSubPage = pathname !== "/"

  useEffect(() => {
    if (!shibaVisible) return

    const interval = setInterval(() => {
      setYoshiFrame(prevFrame => (prevFrame + 1) % yoshiFrames.length)
    }, 350) 

    return () => clearInterval(interval)
  }, [shibaVisible])

  const handleScrollClick = (sectionId: string) => {
    setIsMenuOpen(false)
    scrollToSection(sectionId)
  }

  const getLocalizedPath = (path: string) => {
    if (language === "es") {
      if (path === "/projects") return "/proyectos"
      if (path === "/resources") return "/recursos"
    }
    return path
  }

  const renderNavLinks = (isMobile: boolean) => {
    const linkClass = isMobile ? "mobile-menu-link" : "superteam-nav-link"

    return navLinks.map(link => {
      if (link.type === "scroll") {
        return (
          <div key={link.key} className="relative" onMouseEnter={() => setValidatorHover(true)} onMouseLeave={() => setValidatorHover(false)}>
            <button onClick={() => handleScrollClick(link.sectionId!)} className={linkClass}>
              {t(link.key)}
            </button>
            {validatorHover && (
              <div className="absolute inset-0 flex items-center justify-center z-50">
                <Image 
                  src="/coming-soon.png" 
                  alt="Coming Soon" 
                  width={200} 
                  height={150} 
                  className="rounded-lg shadow-lg transform -rotate-12"
                />
              </div>
            )}
          </div>
        )
      }
      if (link.type === "link") {
        return (
          <Link key={link.key} href={getLocalizedPath(link.href!)} className={linkClass} onClick={() => setIsMenuOpen(false)}>
            {link.icon && <link.icon size={16} className="inline-block mr-1" />}
            {t(link.key)}
          </Link>
        )
      }
      return null
    })
  }

  return (
    <header className="superteam-header logo-shiba-hover">
      <nav className="superteam-nav">
        <Link 
          href="/" 
          onClick={(e) => { e.preventDefault(); handleScrollClick("top") }} 
          className="superteam-logo-container" 
          onMouseEnter={() => setShibaVisible(true)}
        >
          <Image src="/images/solxar-logo.png" alt="Logo SOLxAR" width={120} height={40} className="superteam-logo-image" priority />
          <Image 
            src={yoshiFrames[yoshiFrame]} 
            alt="Yoshi Pixel Animation" 
            width={90} 
            height={90} 
            className={`shiba-from-line ${shibaVisible ? 'visible' : ''}`} 
            aria-hidden="true" 
          />
        </Link>

        <div className="hidden md:flex items-center gap-x-10">
          {renderNavLinks(false)}
          <LanguageSwitcher />
        </div>

        <button className="md:hidden text-solana-purple" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <nav className="flex flex-col items-center gap-y-6 pt-8">
          {renderNavLinks(true)}
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  )
}