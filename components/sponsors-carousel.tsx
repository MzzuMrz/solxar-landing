"use client"
import { useContext, useRef, useEffect, useState } from "react"
import { LanguageContext } from "@/context/language-context"

export function SponsorsCarousel() {
  const { t, language } = useContext(LanguageContext)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [isInitialized, setIsInitialized] = useState(false)

  const sponsors = [
    {
      name: "Keystone",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/keystone.jpg-lYfCX75vwS8Xa25aFZMnEbxR9LLpdw.jpeg",
      link: "https://keyst.one/",
    },
    {
      name: "Solflare",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/solflare.jpg-CFiFxjtPp13USOlYeLToDyoV75cSgq.jpeg",
      link: "https://solflare.com/",
    },
    {
      name: "ORO",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/oro-9Uf6pcel0IuHEagOagEOdQHi5TxiPU.png",
      link: "https://oro.network/",
    },
    {
      name: "Kast Finance",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kast.jpg-txdg0bHkrXZ3C3nRzaiovA12CbyqoJ.jpeg",
      link: "https://kast.xyz/",
    },
    {
      name: "Forma",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/forma.jpg-ZFg8OytBYJu7LIzetntlgwYuDveOex.jpeg",
      link: "https://forma.city/",
    },
    {
      name: "Star Atlas",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/star%20atlas.jpg-k1XCbuIxDrXhMGXi6WyTSFwfEZvmiz.jpeg",
      link: "https://staratlas.com/",
    },
    {
      name: "Triton One",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/triton.jpg-dMeSpH4qD7jbNxrNDyiWmtC5QtHEX8.jpeg",
      link: "https://triton.one/",
    },
  ]

  // Animación del carrusel con loop infinito
  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    // Preparar el carrusel con suficientes elementos para un loop perfecto
    const setupCarousel = () => {
      if (!carousel) return

      // Limpiar el carrusel de manera más eficiente
      carousel.innerHTML = ""

      // Crear un fragmento de documento para mejorar el rendimiento
      const fragment = document.createDocumentFragment()

      // Crear tres conjuntos de elementos para asegurar un loop perfecto
      const allSponsors = [...sponsors, ...sponsors, ...sponsors]

      allSponsors.forEach((sponsor) => {
        const link = document.createElement("a")
        link.href = sponsor.link
        link.target = "_blank"
        link.rel = "noopener noreferrer"
        link.className =
          "flex-shrink-0 flex flex-col items-center backdrop-blur-md bg-black/60 p-4 rounded-lg border border-white/10 transition-all hover:transform hover:scale-105 w-[200px] cursor-pointer hover:border-solana-teal/50"

        const imageContainer = document.createElement("div")
        imageContainer.className = "w-[150px] h-[80px] flex items-center justify-center mb-3"

        const img = document.createElement("img")
        img.src = sponsor.logo || "/placeholder.svg"
        img.alt = sponsor.name
        img.width = 120
        img.height = 60
        img.className = "max-w-[120px] max-h-[60px] object-contain"
        img.loading = "lazy" // Añadir carga perezosa

        const title = document.createElement("h3")
        title.className = "text-center font-medium"
        title.textContent = sponsor.name

        imageContainer.appendChild(img)
        link.appendChild(imageContainer)
        link.appendChild(title)

        fragment.appendChild(link)
      })

      // Añadir todos los elementos de una vez
      carousel.appendChild(fragment)
    }

    setupCarousel()
    setIsInitialized(true)

    // Calcular dimensiones
    const itemWidth = 224 // 200px ancho + 24px gap
    const singleSetWidth = itemWidth * sponsors.length

    // Posicionar inicialmente el carrusel para empezar desde el primer conjunto
    let position = 0
    carousel.style.transform = `translateX(0px)`

    // Configurar animación
    let animationId: number
    const speed = 0.5 // Velocidad del carrusel (píxeles por frame)

    const animate = () => {
      position += speed
      carousel.style.transform = `translateX(-${position}px)`

      // Cuando el primer conjunto ha pasado completamente, reiniciar al inicio del segundo conjunto
      // Esto crea un loop perfecto porque los conjuntos son idénticos
      if (position >= singleSetWidth) {
        position = 0
        carousel.style.transform = `translateX(0px)`
      }

      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    // Pausar la animación al pasar el ratón
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId)
    }

    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate)
    }

    carousel.addEventListener("mouseenter", handleMouseEnter)
    carousel.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationId)
      if (carousel) {
        carousel.removeEventListener("mouseenter", handleMouseEnter)
        carousel.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [sponsors])

  return (
    <section className="py-12 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 solana-text-gradient text-center">Our Supporters</h2>

        {/* Contenedor del carrusel con overflow hidden */}
        <div className="overflow-hidden relative">
          {/* Carrusel con elementos */}
          <div
            ref={carouselRef}
            className="flex items-center gap-6 py-4"
            style={{
              willChange: "transform",
              opacity: isInitialized ? 1 : 0, // Evitar parpadeo inicial
            }}
          >
            {/* Los elementos se crearán dinámicamente en el useEffect */}
          </div>
        </div>
      </div>
    </section>
  )
}
