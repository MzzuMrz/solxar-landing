"use client"

import Link from "next/link"
import { useContext, useState } from "react"
import { LanguageContext } from "@/context/language-context"
import { BookOpen, Rocket, Users, Code, Building2, Trophy } from "lucide-react"

export function AboutActivities() {
  const { t, language } = useContext(LanguageContext)
  const [selectedActivity, setSelectedActivity] = useState(0)

  const activities = [
    {
      icon: <Building2 className="w-6 h-6 text-solana-teal" />,
      title: language === "es" ? "Espacio de coworking" : "Coworking Hub",
      shortTitle: language === "es" ? "Coworking" : "Coworking",
      description:
        language === "es"
          ? "Unimos a la comunidad en entornos colaborativos donde se pueden desarrollar ideas y soluciones."
          : "We cultivate a collaborative environment where the Solana community can come together to build, share, and grow. More than just a workspace, our hub is a place where ideas turn into solutions, and meaningful connections are made.\n\nDesigned to feel like a second home, we foster a welcoming, solution-driven atmosphere where developers, founders, and creators support each other, exchange knowledge, and co-create with purpose—always surrounded by good energy and shared ambition.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: <Users className="w-6 h-6 text-solana-blue" />,
      title: language === "es" ? "Networking y afterparties" : "Networking & Afterparties",
      shortTitle: language === "es" ? "Networking" : "Networking",
      description:
        language === "es"
          ? "Encuentros para conectar con otros builders, compartir experiencias y potenciar el ecosistema."
          : "We host curated gatherings that bring together builders, developers, founders, creatives, and ecosystem contributors in a friendly, inclusive atmosphere.\n\nIt's not just about exchanging contacts, it's about building real relationships, sharing experiences, and connecting through a new kind of networking, one rooted in collaboration, community, and good energy.\n\nWhether during meetups or afterparties, we create spaces where ideas flow and meaningful connections are made.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-solana-purple" />,
      title: language === "es" ? "Recursos educativos" : "Educational Resources",
      shortTitle: language === "es" ? "Educación" : "Education",
      description:
        language === "es"
          ? "Facilitamos aprendizaje sobre Solana, blockchain y Web3 a través de tutoriales, guías y eventos."
          : "We make learning accessible and engaging by collaborating with leading startups, projects, and companies in the Solana ecosystem to deliver hands-on workshops, tutorials, and events.\n\nWhether you're just starting out or deepening your expertise, our educational spaces are designed to be practical, community-driven, and welcoming, where knowledge is shared openly, and everyone grows together. It's all about learning by building, surrounded by peers who inspire and support.",
      link: language === "es" ? "Ver recursos →" : "View resources →",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: <Code className="w-6 h-6 text-solana-teal" />,
      title: language === "es" ? "Desarrollo de proyectos" : "Project Development",
      shortTitle: language === "es" ? "Desarrollo" : "Development",
      description:
        language === "es"
          ? "Impulsamos el desarrollo de aplicaciones descentralizadas en el ecosistema Solana."
          : "We support and guide the creation of decentralized applications by connecting builders with the right tools, frameworks, and expert-led workshops from across the Solana ecosystem.\n\nFrom early-stage ideas to launch-ready dApps, we help new and emerging teams find the resources they need to grow, backed by a community that's all about sharing knowledge, solving challenges together, and building with good vibes.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: <Trophy className="w-6 h-6 text-solana-blue" />,
      title: language === "es" ? "Hackathons y meetups" : "Hackathons & Meetups",
      shortTitle: language === "es" ? "Hackathons" : "Hackathons",
      description:
        language === "es"
          ? "Espacios donde se desarrollan proyectos innovadores y se fomenta el networking."
          : "We're creating inspiring spaces where new builders are invited to experiment, collaborate, and launch innovative projects within the Solana ecosystem.\n\nWhether you're a developer, designer, founder, or curious learner, our hackathons and meetups are designed to spark creativity, grow ideas into real solutions, and connect you with a vibrant community that builds together, with good energy and shared purpose.",
      comingSoon: true,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: <Rocket className="w-6 h-6 text-solana-purple" />,
      title: language === "es" ? "Incubadora de startups" : "Startup Incubator",
      shortTitle: language === "es" ? "Incubadora" : "Incubator",
      description:
        language === "es"
          ? "Apoyamos a los mejores proyectos con financiamiento, mentoría y acceso a recursos."
          : "We're here to help the most promising projects born in our ecosystem take the next big step. Through mentorship, funding opportunities, and access to key resources, we support builders in turning great ideas into successful startups.\n\nOur incubator is all about elevating talent, fostering sustainable growth, and creating a community where builders thrive together, with purpose, passion, and good energy.",
      comingSoon: true,
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <section className="py-12 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Título */}
          <h3 className="text-2xl font-semibold mb-8 solana-text-gradient text-center">{t("whatWeDoInSOLxAR")}</h3>

          {/* Tabs Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {activities.map((activity, index) => (
              <button
                key={index}
                onClick={() => setSelectedActivity(index)}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg border transition-all duration-300 ${
                  selectedActivity === index
                    ? "bg-solana-purple/20 border-solana-purple text-white"
                    : "bg-black/40 border-white/10 text-white/70 hover:bg-black/60 hover:border-white/20"
                }`}
              >
                {activity.icon}
                <span className="text-sm font-medium">
                  {activity.shortTitle}
                  {activity.comingSoon && (
                    <span className="ml-1 text-xs opacity-60">
                      ({language === "es" ? "Próximamente" : "Coming soon"})
                    </span>
                  )}
                </span>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="backdrop-blur-md bg-black/60 rounded-lg border border-white/10 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Text Content */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  {activities[selectedActivity].icon}
                  <h4 className="text-2xl font-semibold">
                    {activities[selectedActivity].title}
                    {activities[selectedActivity].comingSoon && (
                      <span className="ml-2 text-sm text-solana-teal">
                        ({language === "es" ? "Próximamente" : "Coming soon"})
                      </span>
                    )}
                  </h4>
                </div>
                <p className="text-white/80 whitespace-pre-line leading-relaxed mb-6">
                  {activities[selectedActivity].description}
                </p>
                {activities[selectedActivity].link && (
                  <Link
                    href={selectedActivity === 2 ? "/resources" : "#"}
                    className="inline-flex items-center text-solana-teal hover:text-solana-blue transition-colors"
                  >
                    {activities[selectedActivity].link}
                  </Link>
                )}
              </div>

              {/* Image */}
              <div className="lg:border-l border-white/10">
                <img
                  src={activities[selectedActivity].image || "/placeholder.svg"}
                  alt={activities[selectedActivity].title}
                  className="w-full h-full object-cover min-h-[300px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
