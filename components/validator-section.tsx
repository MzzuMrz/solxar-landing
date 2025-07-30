"use client"

import { useContext, useEffect, useRef, useState, useMemo } from "react"
import { useInView } from "react-intersection-observer"
import { LanguageContext } from "@/context/language-context"

interface ValidatorSectionProps {
  id: string
}

export function ValidatorSection({ id }: ValidatorSectionProps) {
  const { language } = useContext(LanguageContext)
  const [animationFrame, setAnimationFrame] = useState(0)
  const [displayedLines, setDisplayedLines] = useState<string[]>([])
  const [currentLine, setCurrentLine] = useState("")
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const [isTyping, setIsTyping] = useState(false)
  const { ref: sectionRef, inView } = useInView({ threshold: 0.3 })
  const animationStarted = useRef(false)
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Generar un PID aleatorio entre 10000 y 18750 (solo una vez al montar el componente)
  const randomPID = useMemo(() => {
    return Math.floor(Math.random() * (18750 - 10000 + 1)) + 10000
  }, [])

  // Commands to display in the console with different colors
  const commands = useMemo(
    () => [
      { text: `+ SOLANA_PID=${randomPID}`, color: "#4eeaff" },
      { text: "+ SOLANA_EXIT_CODE=0", color: "#4eeaff" },
      { text: " start_solana", color: "#ff9c4e" },
      { text: "INFO  solana_metrics::metrics] host id: soLxarsAk9GGLTBQDEWfruf9LhwNTYU7qexzrTVKLSZ", color: "#4eff7e" },
      {
        text: "INFO  solana_metrics::metrics] vote account : SoLxARvqMrLRsS9ew8SU229pgjWiGFoVmcVTF8sSqkb",
        color: "#4eff7e",
      },
      { text: "WARN  solana_core::validator] voting disabled", color: "#ffee4e" },
      { text: " SOLANA_EXIT_CODE=0", color: "#4eeaff" },
    ],
    [randomPID],
  )

  // Animation effect for the server/blockchain visualization
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationFrame((prev) => (prev + 1) % 8)
    }, 500)

    return () => clearInterval(interval)
  }, [])

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  // Start typing animation when in view
  useEffect(() => {
    if (inView && !animationStarted.current) {
      animationStarted.current = true
      setIsTyping(true)
      setCurrentLineIndex(0)
      setCurrentCharIndex(0)
      setCurrentLine("")
      setDisplayedLines([])
    }
  }, [inView])

  // Handle typing animation - reescrito para evitar bucles infinitos
  useEffect(() => {
    // Función para manejar la animación de escritura
    const handleTypingAnimation = () => {
      if (!isTyping) return

      // Si hemos completado todas las líneas, detener la animación
      if (currentLineIndex >= commands.length) {
        setIsTyping(false)
        return
      }

      const currentCommand = commands[currentLineIndex].text

      // Si hemos completado la línea actual
      if (currentCharIndex >= currentCommand.length) {
        // Añadir la línea completada a las líneas mostradas
        setDisplayedLines((prev) => [...prev, currentLine])
        setCurrentLine("")

        // Pasar a la siguiente línea después de una pausa
        typingTimeoutRef.current = setTimeout(() => {
          setCurrentLineIndex((prevIndex) => prevIndex + 1)
          setCurrentCharIndex(0)
        }, 700) // Pausa entre líneas
      } else {
        // Escribir el siguiente carácter
        typingTimeoutRef.current = setTimeout(() => {
          setCurrentLine((prev) => prev + currentCommand[currentCharIndex])
          setCurrentCharIndex((prevIndex) => prevIndex + 1)
        }, 100) // Velocidad de escritura
      }
    }

    // Limpiar cualquier timeout existente
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current)
    }

    // Iniciar la animación
    handleTypingAnimation()

    // Limpiar al desmontar
    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current)
      }
    }
  }, [isTyping, currentLineIndex, currentCharIndex, commands])

  // Función para obtener el color de una línea completada
  const getCommandColor = (index: number) => {
    return index < commands.length ? commands[index].color : "#ffffff"
  }

  return (
    <section id={id} className="py-12 relative overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 solana-text-gradient text-center">
            {language === "es" ? "Validador SOLxAR" : "SOLxAR Validator"}
          </h2>

          <div className="solana-border-gradient p-8 rounded-xl backdrop-blur-sm bg-black/20">
            {/* Flex container for side-by-side layout */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Terminal Console Animation - Now on the left */}
              <div className="w-full md:w-3/5 bg-black/80 rounded-md border border-solana-blue/30 overflow-hidden">
                <div className="h-6 bg-black/90 border-b border-solana-blue/20 flex items-center px-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/70"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/70"></div>
                  </div>
                  <div className="text-xs text-white/50 mx-auto font-mono">agave-validator</div>
                </div>
                <div className="p-4 font-mono text-left min-h-[200px]">
                  {/* Completed lines */}
                  {displayedLines.map((line, i) => (
                    <div
                      key={i}
                      className="text-sm mb-2 font-mono"
                      style={{
                        color: getCommandColor(i),
                        textShadow: `0 0 5px ${getCommandColor(i)}80, 0 0 10px ${getCommandColor(i)}40`,
                      }}
                    >
                      {line}
                    </div>
                  ))}

                  {/* Currently typing line */}
                  {currentLineIndex < commands.length && (
                    <div className="text-sm mb-2 flex items-center font-mono">
                      <span
                        className="neon-text"
                        style={{
                          color: commands[currentLineIndex].color,
                          textShadow: `0 0 5px ${commands[currentLineIndex].color}80, 0 0 10px ${commands[currentLineIndex].color}40, 0 0 15px ${commands[currentLineIndex].color}20`,
                        }}
                      >
                        {currentLine}
                      </span>
                      <span
                        className={`ml-0.5 ${showCursor ? "opacity-100" : "opacity-0"} transition-opacity`}
                        style={{
                          color: commands[currentLineIndex].color,
                          textShadow: `0 0 5px ${commands[currentLineIndex].color}80, 0 0 10px ${commands[currentLineIndex].color}40, 0 0 15px ${commands[currentLineIndex].color}20`,
                        }}
                      >
                        _
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Server/Data Center Animation - Now on the right */}
              <div className="w-full md:w-2/5 flex justify-center">
                <div className="relative w-48 h-48">
                  {/* Server Rack */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-40 bg-black/70 rounded-md border border-solana-blue/30 flex flex-col justify-between p-2">
                    {/* Server Units */}
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="w-full h-6 bg-black/80 rounded border border-white/10 flex items-center px-2"
                      >
                        <div
                          className={`w-2 h-2 rounded-full ${i % 2 === animationFrame % 2 ? "bg-solana-teal" : "bg-solana-purple"} mr-2`}
                        ></div>
                        <div className="flex-1 h-1 bg-black/60 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-solana-purple to-solana-teal"
                            style={{
                              width: `${((animationFrame + i) % 8) * 12.5}%`,
                              transition: "width 0.5s ease-in-out",
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}

                    {/* Blockchain Visualization */}
                    <div className="w-full h-8 mt-2 flex items-center justify-center">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-3 h-3 mx-0.5 rounded-sm transition-all duration-300 ${
                            i === animationFrame
                              ? "bg-solana-teal scale-125"
                              : i < animationFrame
                                ? "bg-solana-purple/70"
                                : "bg-white/20"
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Connection Lines */}
                  <div className="absolute top-0 left-1/2 w-px h-12 bg-solana-teal/30"></div>
                  <div className="absolute bottom-0 left-1/2 w-px h-12 bg-solana-teal/30"></div>
                </div>
              </div>
            </div>

            {/* Description text below both elements */}
            <p className="text-white/70 max-w-2xl mx-auto mt-8 text-center">
              {language === "es"
                ? "Estamos seteando un validador de Solana para potenciar nuestra comunidad. Al stakear tus SOL con nosotros, no solo recibirás recompensas, sino que fortalecerás la seguridad de la red y financiarás directamente programas educativos y de desarrollo en Argentina."
                : "We are setting up a Solana validator to empower our community. By staking your SOL with us, you'll not only earn rewards, but also strengthen network security and directly fund educational and development programs in Argentina."}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
