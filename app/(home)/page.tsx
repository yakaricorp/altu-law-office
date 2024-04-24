'use client'

import useScrollAnimations from "@/ui/hooks/use-scroll-animations"

import JumboOverlay from "@/ui/components/homepage/jumbo-image-overlay"
import ScalingImageWithHeading from "@/ui/components/scaling-image-with-heading"
import IconHeaderWithSlidingText from "@/ui/components/icon-header-with-sliding-text"
import Section from "@/ui/components/section"
import ContactAboutUs from "@/ui/components/homepage/contact-about-us"
import MilestoneBanner from "@/ui/components/homepage/milestone-banner"
import OurTeamOverview from "@/ui/components/homepage/our-team-overview"
import GetInTouch from "@/ui/components/homepage/get-in-touch"

export default function Homepage() {
  useScrollAnimations()

  return (
    <main>
      <JumboOverlay></JumboOverlay>

      <div className="bg-white">
        <Section header="Hello world" subHeader="Header" className="py-16">
          <div className="flex flex-wrap gap-8">
            <ScalingImageWithHeading className="flex-1" image="/pxfuel.jpg" heading="Family Violence" />
            <ScalingImageWithHeading className="flex-1" image="/pxfuel-2.jpg" heading="Divorce" />
            <ScalingImageWithHeading className="flex-1" image="/pxfuel.jpg" heading="Something Else" />
          </div>
        </Section>
      </div>

      <div className="bg-backGray">
        <Section header="Hello world" subHeader="Header" className="py-16">
          <div className="flex flex-wrap justify-center gap-8">
            <IconHeaderWithSlidingText />
            <IconHeaderWithSlidingText />
            <IconHeaderWithSlidingText />
          </div>
        </Section>
      </div>

      <ContactAboutUs></ContactAboutUs>
      <OurTeamOverview></OurTeamOverview>
      <MilestoneBanner></MilestoneBanner>
      <GetInTouch></GetInTouch>
    </main>
  )
}
