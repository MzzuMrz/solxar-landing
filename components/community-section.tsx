"use client"

import { useLanguage } from "@/context/language-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { SVGProps } from "react"

const IconX = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
const IconTelegram = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21.5 4.5L2.5 12.5L11.5 14.5L14.5 21.5L21.5 4.5Z"></path></svg>
const IconDiscord = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="9" cy="12" r="1"></circle><circle cx="15" cy="12" r="1"></circle><path d="M7.5 7.2c.3-.2.5-.2.8-.3a12.5 12.5 0 0 1 7.4 0c.3 0 .5.2.8.3 1 .4 1.9 1 2.6 1.7.9 1.6 2.2 2 3.5.3 1.3.4 2.7.2 4-.2 1.1-.5 2.2-1 3.2a2 2 0 0 1-.6.7 2 2 0 0 1-.7.5 1.8 1.8 0 0 1-1 0 1.8 1.8 0 0 1-.7-.4l-.8-.8a14.4 14.4 0 0 1-2.8.8 14.4 14.4 0 0 1-3.4 0c-.9-.1-1.8-.3-2.6-.7l-.9.7a2 2 0 0 1-.7.4 1.8 1.8 0 0 1-1 0 2 2 0 0 1-.7-.5 2 2 0 0 1-.6-.7 14.4 14.4 0 0 1-1-3.2 14.4 14.4 0 0 1 .2-4c.4-1.3 1-2.5 2-3.5.7-.7 1.6-1.3 2.5-1.7Z"></path><path d="M16.8 17.8c-.9.6-1.9 1-3 1.2-1.6.3-3.2.3-4.8 0-1.1-.2-2.1-.6-3-1.2"></path><path d="M13.2 6.8a22.8 22.8 0 0 0-2.4 0"></path></svg>

const statsData = [
  { value: "+10", key: "projects" },
  { value: "36", key: "members" },
  { value: "+200", key: "friends" },
  { value: "+30", key: "events" },
]

const socialsData = [
  { href: "https://x.com/solx_ar", icon: IconX, key: "socials.x" },
  { href: "https://t.me/solx_ar", icon: IconTelegram, key: "socials.telegram" },
  { href: "https://discord.gg/3pdbCNSS", icon: IconDiscord, key: "socials.discord" },
]

export function CommunitySection({ id }: { id?: string }) {
  const { t } = useLanguage()

  return (
    <section id={id} className="py-12 relative">
      <div className="w-full bg-black/20 border-y border-white/10 py-12">
        <div className="container mx-auto px-4">
          {/* <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold solana-text-gradient">{t("communitySection.title")}</h2>
          </div> */}

          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {statsData.map((stat, index) => (
              <div
                key={stat.key}
                className="stat-card"
                style={{ "--card-delay": `${index * 0.1}s` } as CSSProperties}
              >
                <div className="text-3xl md:text-4xl font-bold solana-text-gradient mb-2">{stat.value}</div>
                <div className="text-white/70 text-sm md:text-base">{t(`communitySection.stats.${stat.key}`)}</div>
              </div>
            ))}
          </div> */}

          <div className="bg-black/40 p-8 rounded-lg border border-white/10 max-w-xl mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-center">{t("communitySection.join")}</h3>
            <p className="text-white/80 mb-6 text-center">{t("communitySection.stayUpdated")}</p>
            <div className="flex flex-col gap-4">
              {socialsData.map(({ href, icon: Icon, key }) => (
                <Link key={href} href={href} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full border-white/20 hover:bg-white/5 hover:border-white/30 transition-colors duration-300 flex items-center gap-2 justify-center py-6 text-base">
                    <Icon /> {t(key)}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}