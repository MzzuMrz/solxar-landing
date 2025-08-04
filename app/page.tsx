"use client"

import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { MissionSection } from "@/components/mission-section"
import { VideoSection } from "@/components/video-section"
import { EventsSection } from "@/components/events-section"
import { CommunitySection } from "@/components/community-section"
import { CommunityMembers } from "@/components/community-members"
import { TrendingProjects } from "@/components/trending-projects"
import { SponsorsCarousel } from "@/components/sponsors-carousel"
import { BestSolanaProducts } from "@/components/best-solana-products"
import { PartnershipsSection } from "@/components/partnerships-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <VideoSection />
      <EventsSection />
      <SponsorsCarousel />
      <CommunitySection />
      <CommunityMembers />
      {/* <TrendingProjects /> */}
      <PartnershipsSection />
    </>
  )
}