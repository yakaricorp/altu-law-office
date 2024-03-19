'use client'

import { useEffect } from "react"
import ScalingImageWithHeading from "@/ui/components/scaling-image-with-heading"
import IconHeaderWithSlidingText from "@/ui/components/icon-header-with-sliding-text"
import Map from "@/ui/components/map"
import Section from "@/ui/components/section"
import ContactAboutUs from "./sections/contact-about-us"
import MilestoneBanner from "./sections/milestone-banner"
import OurTeamOverview from "./sections/our-team-overview"

const CLASSNAME_SECTION = 'page-section'
const CLASSNAME_SECTION_ANIMATE = 'page-section-slide-in'
const CLASSNAME_SECTION_HIDDEN = 'page-section-hidden'
const INTERSECTION_THRESHOLD = 0.2

export default function HomepageSection() {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(CLASSNAME_SECTION_ANIMATE)
          entry.target.classList.remove(CLASSNAME_SECTION_HIDDEN)
          observer.unobserve(entry.target)
          return
        }
      })
    }, {
      threshold: INTERSECTION_THRESHOLD
    })

    const sections = document.querySelectorAll(`.${CLASSNAME_SECTION}`)
    sections.forEach(element => {
      element.classList.add(CLASSNAME_SECTION_HIDDEN)
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div className="bg-white">
        <Section header="Hello world" subHeader="Header" className="py-16">
          <div className="flex flex-wrap gap-8">
            <ScalingImageWithHeading className="flex-1" image="/pxfuel.jpg" heading="Family Violence" />
            <ScalingImageWithHeading className="flex-1" image="/pxfuel-2.jpg" heading="Divorce" />
            <ScalingImageWithHeading className="flex-1" image="/pxfuel.jpg" heading="Something Else" />
          </div>
        </Section>
      </div>

      <ContactAboutUs></ContactAboutUs>

      <OurTeamOverview></OurTeamOverview>

      <div className="bg-backGray">
        <Section header="Hello world" subHeader="Header" className="py-16">
          <div className="flex flex-wrap gap-8">
            <IconHeaderWithSlidingText />
            <IconHeaderWithSlidingText />
            <IconHeaderWithSlidingText />
          </div>
        </Section>
      </div>

      <MilestoneBanner></MilestoneBanner>

      <div>
        <div className="px-10 py-16 flex flex-wrap gap-8">
          <Map></Map>
        </div>
      </div>
    </>
  )
}