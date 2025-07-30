"use client"

import { useLanguage } from "@/context/language-context"
import { socialLinksData, footerSectionsData } from "@/lib/footer-data"
import { Mail } from "lucide-react"
import Image from "next/image"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="superteam-footer">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          <div className="lg:col-span-2">
            <p className="text-gray-400 mb-6 max-w-sm">{t("footer.description")}</p>
            <div className="flex gap-4">
              {socialLinksData.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-card p-3 rounded-lg transition-all hover:scale-110"
                    style={{ borderColor: `var(--solana-purple-hsl)` }} 
                  >
                    <Icon size={20} style={{ color: `hsl(var(--solana-purple-hsl))` }} />
                  </a>
                )
              })}
            </div>
          </div>

          {footerSectionsData.map((section) => (
            <div key={section.key}>
              <h4 className="text-white font-semibold mb-4">{t(`footer.sections.${section.key}.title`)}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.key}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {t(`footer.sections.${section.key}.links.${link.key}`)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="superteam-card mb-12">
          <div className="text-center">
            <h3 className="superteam-card-title text-xl mb-2">{t("footer.newsletterTitle")}</h3>
            <p className="superteam-card-text mb-6">{t("footer.newsletterSubtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t("footer.emailPlaceholder")}
                className="flex-1 px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              />
              <button className="superteam-btn superteam-btn-primary">
                <Mail size={16} />
                {t("footer.subscribeButton")}
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">{t("footer.copyright")}</div>
          <div className="flex gap-6 text-sm">
            <a href="#privacy" className="text-gray-400 hover:text-white transition-colors">{t("footer.privacy")}</a>
            <a href="#terms" className="text-gray-400 hover:text-white transition-colors">{t("footer.terms")}</a>
            <a href="#cookies" className="text-gray-400 hover:text-white transition-colors">{t("footer.cookies")}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
