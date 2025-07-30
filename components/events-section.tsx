"use client"

import { useLanguage } from "@/context/language-context"
import { useState } from "react"

interface EventsSectionProps {
  id?: string
}

const EventsSkeleton = () => (
  <div className="w-full h-[600px] bg-white/5 rounded-lg animate-pulse" />
)

const EventsErrorFallback = () => {
  const { t } = useLanguage()
  return (
    <div className="w-full h-[600px] flex flex-col items-center justify-center text-center p-8 bg-black/40 border border-destructive/50 rounded-lg">
      <h3 className="text-xl font-semibold mb-4 text-destructive">{t("eventsSection.errorTitle")}</h3>
      <p className="text-white/70 mb-6 max-w-md">{t("eventsSection.errorMessage")}</p>
      <a
        href="https://lu.ma/SOLxAR"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-semibold"
      >
        {t("eventsSection.errorButton")}
      </a>
    </div>
  )
}

export function EventsSection({ id }: EventsSectionProps) {
  const { t } = useLanguage()
  const [iframeStatus, setIframeStatus] = useState<'loading' | 'loaded' | 'error'>('loading')

  return (
    <section id={id} className="py-12 relative overflow-hidden">
      <div className="w-full backdrop-blur-md bg-black/60 border-y border-white/10 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 solana-text-gradient">{t("eventsSection.title")}</h2>
            <p className="text-white/70 max-w-2xl mx-auto">{t("eventsSection.subtitle")}</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {iframeStatus === 'loading' && <EventsSkeleton />}
            {iframeStatus === 'error' && <EventsErrorFallback />}
            
            <iframe
              src="https://lu.ma/embed/calendar/cal-1gNqFpiBnoe4rRF/events"
              className="events-iframe"
              style={{ display: iframeStatus === 'loaded' ? 'block' : 'none' }}
              onLoad={() => setIframeStatus('loaded')}
              onError={() => setIframeStatus('error')}
              title="SOLxAR Events Calendar"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
            />
          </div>
        </div>
      </div>
    </section>
  )
}