'use client'

import useScrollAnimations from "app/ui/hooks/use-scroll-animations"

import JumboOverlay from "app/ui/components/homepage/jumbo-image-overlay"
import ContactAboutUs from "app/ui/components/homepage/contact-about-us"
import MilestoneBanner from "app/ui/components/homepage/milestone-banner"
import OurTeamOverview from "app/ui/components/homepage/our-team-overview"
import GetInTouch from "app/ui/components/homepage/get-in-touch"
import CaseTypeTiles from "app/ui/components/homepage/case-type-tiles"
import ServiceTypeTiles from "app/ui/components/homepage/service-type-tiles"

import withTranslations from "app/ui/components/hoc/withTranslations/client"
const GetInTouchWithT = withTranslations(GetInTouch)

const attorneys = [
  {
    imageUri: '/attorney-2.JPG',
    fullname: 'Av. Mehmet Aldemir',
    jobTitle: 'Founder',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, expedita. Explicabo omnis odio illum molestias dolor magni tempora eius iste maiores commodi nesciunt, facilis sunt consectetur nam autem, quasi quo.',
  },
  {
    imageUri: '/attorney-1.jpeg',
    fullname: 'Av. Asil Tuna',
    jobTitle: 'Founder',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, expedita. Explicabo omnis odio illum molestias dolor magni tempora eius iste maiores commodi nesciunt, facilis sunt consectetur nam autem, quasi quo.',
  }
]

export default function Homepage() {
  useScrollAnimations()

  return (
    <main>
      <JumboOverlay></JumboOverlay>
      <CaseTypeTiles id="case-type-tiles" className="py-16 bg-white"></CaseTypeTiles>
      <ServiceTypeTiles className="py-16 bg-gray"></ServiceTypeTiles>
      <ContactAboutUs></ContactAboutUs>
      <OurTeamOverview attorneys={attorneys}></OurTeamOverview>
      <MilestoneBanner></MilestoneBanner>
      <GetInTouchWithT className="py-16"></GetInTouchWithT>
    </main>
  )
}
