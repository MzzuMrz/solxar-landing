import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/context/language-context"
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CursorEffect } from "@/components/cursor-effect"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "SOLxAR - Comunidad Solana en Buenos Aires",
  description: "Comunidad de Solana en Buenos Aires, Argentina. Eventos, recursos y más.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="grid-background"></div>
        <LanguageProvider>
          <SmoothScrollProvider>
            <CursorEffect />
            <Header />
            <main>{children}</main>
            <Footer />
          </SmoothScrollProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}