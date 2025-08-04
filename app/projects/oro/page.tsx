"use client"

import { Button } from "@/components/ui/button"
import { CursorEffect } from "@/components/cursor-effect"
import { LanguageProvider } from "@/context/language-context"
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider"
import Image from "next/image"
import { Check } from "lucide-react"

export default function OroPage() {
  return (
    <LanguageProvider>
      <SmoothScrollProvider>
        <main className="min-h-screen bg-[#002118]">
          <CursorEffect />

          {/* Hero Section */}
          <section className="pt-32 pb-20 relative overflow-hidden bg-[#002118]">
            <div className="container mx-auto px-4 relative z-10">
              <div className="flex flex-col md:flex-row gap-12 items-center max-w-6xl mx-auto">
                <div className="md:w-1/2">
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white font-serif">
                    Your gold should do more.
                    <br />
                    <span className="text-[#AA9564]">ORO makes it happen.</span>
                  </h1>
                  <p className="text-xl text-white/80 mb-8">
                    Gold, but better - more valuable, more powerful, more accessible.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="outline" size="lg" className="bg-white text-[#002118] hover:bg-white/90 border-0">
                      Join Waitlist
                    </Button>
                    <Button variant="outline" size="lg" className="border-white/20">
                      Learn More
                    </Button>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="relative aspect-square max-w-md mx-auto">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-12%20at%2012.19.05%E2%80%AFAM-XHQTVkNbH0fykfo9LsUVQ61SEJNwAW.png"
                      alt="ORO Hero"
                      width={600}
                      height={600}
                      className="rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 bg-[#001810]">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-16 text-white text-center">
                  Unlock the full potential of your gold.
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-[#002118] p-8 rounded-xl border border-[#AA9564]/20">
                    <div className="w-12 h-12 bg-[#AA9564]/10 rounded-full flex items-center justify-center mb-6">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                          stroke="#AA9564"
                          strokeWidth="2"
                        />
                        <path d="M15 9L9 15M9 9L15 15" stroke="#AA9564" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">1:1 Gold Backing</h3>
                    <p className="text-white/70">
                      Every ORO token is backed by one gram of 99.99% pure gold, securely stored and fully audited.
                    </p>
                  </div>

                  <div className="bg-[#002118] p-8 rounded-xl border border-[#AA9564]/20">
                    <div className="w-12 h-12 bg-[#AA9564]/10 rounded-full flex items-center justify-center mb-6">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 2V6M12 18V22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M2 12H6M18 12H22M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93"
                          stroke="#AA9564"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">Yield Generation</h3>
                    <p className="text-white/70">
                      Earn passive income on your gold holdings through our innovative yield-generating strategies.
                    </p>
                  </div>

                  <div className="bg-[#002118] p-8 rounded-xl border border-[#AA9564]/20">
                    <div className="w-12 h-12 bg-[#AA9564]/10 rounded-full flex items-center justify-center mb-6">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                          stroke="#AA9564"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">Instant Liquidity</h3>
                    <p className="text-white/70">
                      Trade your gold-backed tokens instantly on Solana, without the limitations of traditional gold
                      markets.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="py-20 bg-[#002118]">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-16 text-white text-center">How ORO Works</h2>

                <div className="grid md:grid-cols-2 gap-16 items-center">
                  <div>
                    <div className="bg-[#001810] rounded-xl overflow-hidden h-[400px] relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 rounded-full bg-[#AA9564]/20 flex items-center justify-center">
                          <div className="w-24 h-24 rounded-full bg-[#AA9564]/30 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-[#AA9564] flex items-center justify-center">
                              <svg
                                width="32"
                                height="32"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                  fill="#002118"
                                />
                                <path d="M15.5 12L10.5 15.5V8.5L15.5 12Z" fill="#002118" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="space-y-8">
                      <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-[#AA9564] flex-shrink-0 flex items-center justify-center text-[#002118] font-bold">
                          1
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2 text-white">Purchase ORO Tokens</h3>
                          <p className="text-white/70">
                            Buy ORO tokens on Solana DEXs or directly through our platform. Each token represents 1 gram
                            of gold.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-[#AA9564] flex-shrink-0 flex items-center justify-center text-[#002118] font-bold">
                          2
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2 text-white">Earn Yield</h3>
                          <p className="text-white/70">
                            Your gold automatically generates yield through our secure lending and staking protocols.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-[#AA9564] flex-shrink-0 flex items-center justify-center text-[#002118] font-bold">
                          3
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2 text-white">Redeem or Trade</h3>
                          <p className="text-white/70">
                            Redeem your tokens for physical gold or trade them instantly on the open market.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-20 bg-[#001810]">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-16 text-white text-center">Why Choose ORO</h2>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-[#002118] p-8 rounded-xl border border-[#AA9564]/20">
                    <div className="flex items-start gap-4">
                      <div className="mt-1">
                        <Check className="text-[#AA9564]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-white">Security & Transparency</h3>
                        <p className="text-white/70">
                          All gold reserves are stored in high-security vaults, regularly audited, and fully insured.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#002118] p-8 rounded-xl border border-[#AA9564]/20">
                    <div className="flex items-start gap-4">
                      <div className="mt-1">
                        <Check className="text-[#AA9564]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-white">Solana Speed & Efficiency</h3>
                        <p className="text-white/70">
                          Benefit from Solana's fast transactions and low fees when trading or transferring your
                          gold-backed tokens.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#002118] p-8 rounded-xl border border-[#AA9564]/20">
                    <div className="flex items-start gap-4">
                      <div className="mt-1">
                        <Check className="text-[#AA9564]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-white">Passive Income</h3>
                        <p className="text-white/70">
                          Unlike traditional gold, ORO generates yield, turning a static asset into a productive
                          investment.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#002118] p-8 rounded-xl border border-[#AA9564]/20">
                    <div className="flex items-start gap-4">
                      <div className="mt-1">
                        <Check className="text-[#AA9564]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-white">Fractional Ownership</h3>
                        <p className="text-white/70">
                          Own as little as 1 gram of gold, making precious metal investment accessible to everyone.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-[#002118]">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                  Ready to transform your gold experience?
                </h2>
                <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                  Join the waitlist to be among the first to access ORO when we launch.
                </p>
                <Button className="bg-[#AA9564] hover:bg-[#8A7544] text-white px-8 py-6 text-lg rounded-md">
                  Join Waitlist
                </Button>
              </div>
            </div>
          </section>
        </main>
      </SmoothScrollProvider>
    </LanguageProvider>
  )
}
