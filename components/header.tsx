"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X, Home } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/context/language-context"
import { useSmoothScroll } from "@/components/smooth-scroll-provider"
import { usePathname } from "next/navigation"
import { LanguageSwitcher } from "@/components/language-switcher"

const navLinks = [
  { type: "scroll", key: "nav.validator", sectionId: "validator", displayOn: "home" },
  { type: "link", key: "nav.home", href: "/", displayOn: "subpage", icon: Home },
  { type: "link", key: "nav.projects", href: "/projects", displayOn: "all" },
  { type: "link", key: "nav.resources", href: "/resources", displayOn: "all" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [shibaVisible, setShibaVisible] = useState(false)
  const { t, language } = useLanguage()
  const { scrollToSection } = useSmoothScroll()
  const pathname = usePathname()

  const isSubPage = pathname !== "/"

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

    return navLinks
      .filter(link => link.displayOn === "all" || (link.displayOn === "home" && !isSubPage) || (link.displayOn === "subpage" && isSubPage))
      .map(link => {
        if (link.type === "scroll") {
          return (
            <button key={link.key} onClick={() => handleScrollClick(link.sectionId!)} className={linkClass}>
              {t(link.key)}
            </button>
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
        <Link href="/" onClick={(e) => { e.preventDefault(); handleScrollClick("top") }} className="superteam-logo-container" onMouseEnter={() => setShibaVisible(true)}>
          <Image src="/images/solxar-logo.png" alt="Logo SOLxAR" width={120} height={40} className="superteam-logo-image" priority />
          <Image src="/images/yoshi.png" alt="Shiba Pixel" width={90} height={90} className={`shiba-from-line ${shibaVisible ? 'visible' : ''}`} aria-hidden="true" />
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