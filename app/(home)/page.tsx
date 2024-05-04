'use client'

import useScrollAnimations from "@/ui/hooks/use-scroll-animations"

import JumboOverlay from "@/ui/components/homepage/jumbo-image-overlay"
import ContactAboutUs from "@/ui/components/homepage/contact-about-us"
import MilestoneBanner from "@/ui/components/homepage/milestone-banner"
import OurTeamOverview from "@/ui/components/homepage/our-team-overview"
import GetInTouch from "@/ui/components/homepage/get-in-touch"
import CaseTypeTiles from "@/ui/components/homepage/case-type-tiles"
import ServiceTypeTiles from "@/ui/components/homepage/service-type-tiles"

export default function Homepage() {
  useScrollAnimations()

  return (
    <main>
      <JumboOverlay></JumboOverlay>
      <CaseTypeTiles className="py-16 bg-white"></CaseTypeTiles>
      <ServiceTypeTiles className="py-16 bg-gray"></ServiceTypeTiles>
      <ContactAboutUs></ContactAboutUs>
      <OurTeamOverview></OurTeamOverview>
      <MilestoneBanner></MilestoneBanner>
      <GetInTouch className="py-16"></GetInTouch>
    </main>
  )
}
