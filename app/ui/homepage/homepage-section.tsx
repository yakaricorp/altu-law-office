'use client'

import { useEffect } from "react"
import ScalingImageWithHeading from "@/ui/components/scaling-image-with-heading"
import IconHeaderWithSlidingText from "@/ui/components/icon-header-with-sliding-text"
import Map from "@/ui/components/map"
import Section from "@/ui/components/section"

export default function HomepageSection() {

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('page-section-slide-in')
          entry.target.classList.remove('page-section-hidden')
          observer.unobserve(entry.target)
          return
        }
      })
    }, {
      threshold: 0.2
    })

    const sections = document.querySelectorAll('.page-section')
    sections.forEach(element => {
      element.classList.add('page-section-hidden')
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
      <div className="bg-backGray">
        <Section header="Hello world" subHeader="Header" className="py-16">
          <div className="flex flex-wrap gap-8">
            <IconHeaderWithSlidingText />
            <IconHeaderWithSlidingText />
            <IconHeaderWithSlidingText />
          </div>
        </Section>
      </div>
      <div>
        <div className="px-10 py-16 flex flex-wrap gap-8">
          <Map></Map>
        </div>
      </div>
    </>
  )
}