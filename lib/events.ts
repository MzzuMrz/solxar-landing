export interface Speaker {
  name: string;
  title: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: {
    start: string;
    end: string;
    timezone: string;
  };
  format: 'Online' | 'Presencial';
  location: string;
  imageUrl: string;
  eventUrl: string;
  description: string;
  speakers: Speaker[];
}

export const eventsData: Event[] = [
  {
    id: "monkedao-4th-anniversary-ba",
    title: "Cripto MonkeDAO 4th Anniversary on BA",
    date: "2025-08-14",
    time: {
      start: "17:30",
      end: "21:00",
      timezone: "GMT-3",
    },
    format: "Presencial",
    location: "SOLxAR, Darwin 1154, C1414CUX Cdad. Autónoma de Buenos Aires, Argentina",
    imageUrl: "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=280,height=280/event-covers/e3/ff24d55b-7eed-41a7-8f00-57bf144a874e.png",
    eventUrl: "https://lu.ma/kroe5emb",
    description: "🎉 Join us to celebrate MonkeDAO’s 4th Anniversary – for the first time ever in Buenos Aires! Meet fellow Monkes, vibe IRL, and make history at our inaugural Argentina meetup.",
    speakers: [],
  },
  {
    id: "padel-tournament-4",
    title: "Padel Tournament 4.0",
    date: "2025-08-10",
    time: {
      start: "12:30",
      end: "15:30",
      timezone: "GMT-3",
    },
    format: "Presencial",
    location: "Costa Rica 6043, C1414BTM Cdad. Autónoma de Buenos Aires, Argentina",
    imageUrl: "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=280,height=280/event-covers/79/5187279b-1fc1-4375-98df-f6b539f8382d.jpg",
    eventUrl: "https://lu.ma/z9dl4e2e",
    description: "¡Bienvenidos al Padel Tournament for Startups & VCs! Un encuentro para conectar a través del deporte. Las parejas se armarán aleatoreamente para fomentar networking y juego en equipo.",
    speakers: [],
  },
];