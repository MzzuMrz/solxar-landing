"use client"

export type Language = "es" | "en"

export interface Translations {
  [key: string]: {
    [lang in Language]: string
  }
}

export const translations: Translations = {
  aboutUs: { es: "Sobre Nosotros", en: "About Us" },
  events: { es: "Eventos", en: "Events" },
  hackathons: { es: "Hackathons", en: "Hackathons" },
  projects: { es: "Proyectos", en: "Projects" },
  validator: { es: "Validador", en: "Validator" },
  partnerships: { es: "Partnerships", en: "Partnerships" },
  community: { es: "Comunidad", en: "Community" },
  resources: { es: "Recursos", en: "Resources" },

  heroTitle: { es: "Primer Hub de Solana en LATAM", en: "First Solana Hub in LATAM" },
  heroDescriptionLine1: { es: "SOLxAR es el punto donde los caminos de los builders, entusiastas y creadores se juntan.", en: "SOLxAR is where the paths of builders, enthusiasts, and creators cross." },
  heroDescriptionLine2: { es: "Por la comunidad para la comunidad.", en: "By the community for the community." },
  upcomingEvents: { es: "Próximos Eventos", en: "Upcoming Events" },
  coworkCTA: { es: "Ven a trabajar a nuestro cowork", en: "Come work at our coworking space" },

  whatIsSOLxAR: { es: "¿Qué es SOLxAR?", en: "What is SOLxAR?" },
  aboutDescription: { es: "SOLxAR es la primer hub de Solana en Argentina, creada para conectar, impulsar y fortalecer el ecosistema blockchain en la región. Es un espacio donde desarrolladores, emprendedores y entusiastas de Web3 pueden colaborar, aprender y construir sobre Solana, promoviendo la innovación y el crecimiento del ecosistema.", en: "SOLxAR is the first Solana hub in Argentina, created to connect, boost, and strengthen the blockchain ecosystem in the region. It is a space where developers, entrepreneurs, and Web3 enthusiasts can collaborate, learn, and build on Solana, promoting innovation and ecosystem growth." },
  meetOurCommunity: { es: "Conoce Nuestra Comunidad", en: "Meet Our Community" },
  whatWeDo: { es: "¿Qué hacemos en SOLxAR?", en: "What do we do at SOLxAR?" },

  ourSponsors: { es: "Nuestros Patrocinadores", en: "Our Supporters" },

  upcomingEvent: { es: "Próximo Evento", en: "Upcoming Event" },
  collaboratePrize: { es: "¡Colabora para hacer crecer este pozo!", en: "Collaborate to grow this prize pool!" },
  wantToParticipate: { es: "Quiero participar", en: "I want to participate" },
  wantToSupport: { es: "Quiero soportar", en: "I want to support" },
  wantToOrganize: { es: "¿Quieres organizar un hackathon?", en: "Want to organize a hackathon?" },
  organizeDescription: { es: "Si representas a una empresa o institución y estás interesado en organizar un hackathon con SOLxAR, contáctanos para discutir posibilidades de colaboración.", en: "If you represent a company or institution and are interested in organizing a hackathon with SOLxAR, contact us to discuss collaboration possibilities." },
  contact: { es: "Contactar", en: "Contact" },

  whatAreOurBuildersShipping: { es: "¿Qué están shippeando nuestros builders?", en: "What are our builders shipping?" },
  discoverProjects: { es: "Descubre los proyectos más innovadores de nuestra comunidad", en: "Discover the most innovative projects from our community" },
  viewProject: { es: "Ver Proyecto", en: "View Project" },
  viewAllProjects: { es: "Ver Todos los Proyectos", en: "View All Projects" },

  bestProducts: { es: "Mejores Productos en Solana", en: "Best Solana Products" },
  discoverApps: { es: "Descubre las aplicaciones más populares del ecosistema Solana con nuestros códigos de referencia", en: "Discover the most popular applications in the Solana ecosystem with our referral codes" },
  visit: { es: "Visitar", en: "Visit" },
  referralCode: { es: "Código de referido:", en: "Referral code:" },

  ourMission: { es: "Nuestra Misión", en: "Our Mission" },
  
  ourCommunity: { es: "Nuestra Comunidad", en: "Our Community" },
  members: { es: "Miembros", en: "Members" },
  joinNetworks: { es: "Únete a Nuestras Redes", en: "Join Our Networks" },
  stayUpdated: { es: "Mantente al día con las últimas noticias, eventos y oportunidades en el ecosistema Solana en Argentina.", en: "Stay up to date with the latest news, events, and opportunities in the Solana ecosystem in Argentina." },
  followOnX: { es: "Seguir en X", en: "Follow on X" },
  joinTelegram: { es: "Unirse al Grupo de Telegram", en: "Join Telegram Group" },

  becomeASponsor: { es: "¿Quieres convertirte en sponsor de SOLxAR?", en: "Want to become a SOLxAR sponsor?" },
  contactUs: { es: "Contáctanos", en: "Contact Us" },
  solxarValidator: { es: "Validador SOLxAR", en: "SOLxAR Validator" },

  exploreResources: { es: "Explora", en: "Explore" },

  projectsPageTitle: { es: "Proyectos", en: "Projects" },
  projectsPageDescription: { es: "Explora los proyectos desarrollados por miembros de la comunidad SOLxAR. Desde aplicaciones DeFi hasta colecciones NFT, descubre la innovación que está sucediendo en el ecosistema Solana en Buenos Aires.", en: "Explore projects developed by SOLxAR community members. From DeFi applications to NFT collections, discover the innovation happening in the Solana ecosystem in Buenos Aires." },
  
  resourcesPageTitle: { es: "Recursos", en: "Resources" },
  resourcesPageDescription: { es: "Explora nuestra colección de recursos para aprender, desarrollar y conectar con el ecosistema Solana. Desde documentación técnica hasta tutoriales y herramientas, aquí encontrarás todo lo que necesitas para comenzar tu viaje en Solana.", en: "Explore our collection of resources to learn, develop, and connect with the Solana ecosystem. From technical documentation to tutorials and tools, here you'll find everything you need to start your journey in Solana." },
}