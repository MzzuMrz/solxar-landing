"use client";

import { useLanguage } from "@/context/language-context";
import Image from "next/image";
import { eventsData, Event } from "@/lib/events";

interface EventsSectionProps {
  id?: string;
}

const NoEventsFallback = () => {
  const { t } = useLanguage();
  return (
    <div className="w-full flex justify-center items-center bg-black/40 border border-white/10 rounded-lg p-4">
      <Image
        src="/no-upcoming.png"
        alt={t("eventsSection.noEventsTitle") || "No hay eventos próximos"}
        width={800}
        height={450}
        style={{ maxWidth: "100%", height: "auto" }}
        priority
      />
    </div>
  );
};

const EventCard = ({ event }: { event: Event }) => {
  const eventDate = new Date(`${event.date}T12:00:00Z`);
  const formattedDate = new Intl.DateTimeFormat("es-AR", {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    timeZone: 'UTC'
  }).format(eventDate);

  return (
    <div className="bg-black/30 border border-white/10 rounded-lg overflow-hidden flex flex-row mb-6 backdrop-blur-sm transition-all hover:border-white/20 hover:scale-[1.02]">
      <div className="relative w-32 md:w-44 aspect-square flex-shrink-0">
        <Image
          src={event.imageUrl}
          alt={`Imagen de ${event.title}`}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 md:p-5 flex flex-col flex-grow">
        <h3 className="text-lg md:text-xl font-bold mb-2 solana-text-gradient leading-tight">{event.title}</h3>
        <div className="text-xs md:text-sm text-white/70 mb-3 space-y-1">
          <p className="flex items-center">
            <span className="w-5 mr-1.5 opacity-80">🗓️</span>
            <span className="capitalize">{formattedDate}</span>
          </p>
          <p className="flex items-center">
            <span className="w-5 mr-1.5 opacity-80">⏰</span>
            {event.time.start} - {event.time.end}
          </p>
          <p className="flex items-center">
            <span className="w-5 mr-1.5 opacity-80">📍</span>
            {event.location}
          </p>
        </div>
        <p className="text-sm text-white/80 mb-4 flex-grow hidden sm:block">{event.description}</p>
        <a
          href={event.eventUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto px-4 py-1.5 md:px-5 md:py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-semibold w-fit text-sm"
        >
          Ver Evento
        </a>
      </div>
    </div>
  );
};


export function EventsSection({ id }: EventsSectionProps) {
  const { t } = useLanguage();

  return (
    <section id={id} className="py-12 relative overflow-hidden">
      <div className="w-full backdrop-blur-md bg-black/60 border-y border-white/10 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 solana-text-gradient">
              {t("eventsSection.title")}
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              {t("eventsSection.subtitle")}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {eventsData && eventsData.length > 0 ? (
              <div>
                {eventsData.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            ) : (
              <NoEventsFallback />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}