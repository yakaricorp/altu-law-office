import ScalingImageWithHeading from "@/ui/components/scaling-image-with-heading"
import IconHeaderWithSlidingText from "@/ui/components/icon-header-with-sliding-text"
import Map from "@/ui/components/map"

export default function HomepageSection() {
  return (
    <>
      <div className="bg-white">
        <div className="px-10 py-16 flex flex-wrap gap-8">
          <ScalingImageWithHeading className="flex-1" image="/pxfuel.jpg" heading="Family Violence" />
          <ScalingImageWithHeading className="flex-1" image="/pxfuel-2.jpg" heading="Divorce" />
          <ScalingImageWithHeading className="flex-1" image="/pxfuel.jpg" heading="Something Else" />
        </div>
      </div>
      <div className="bg-backGray">
        <div className="px-10 py-16 flex flex-wrap gap-8">
          <IconHeaderWithSlidingText />
          <IconHeaderWithSlidingText />
          <IconHeaderWithSlidingText />
        </div>
      </div>
      <div>
        <div className="px-10 py-16 flex flex-wrap gap-8">
          <Map></Map>
        </div>
      </div>
    </>
  )
}