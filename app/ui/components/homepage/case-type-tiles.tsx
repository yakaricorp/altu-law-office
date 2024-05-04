import { v4 as createId } from 'uuid'
import classNames from 'classnames'

import Section from "@/ui/components/section"
import ScalingImageWithHeading from "@/ui/components/scaling-image-with-heading"

const caseTypesData = [{
  key: createId(),
  image: '/pxfuel.jpg',
  heading: 'Family Violence',
}, {
  key: createId(),
  image: '/pxfuel-2.jpg',
  heading: 'Divorce',
}, {
  key: createId(),
  image: '/pxfuel.jpg',
  heading: 'Family Violence',
}, {
  key: createId(),
  image: '/pxfuel-2.jpg',
  heading: 'Divorce',
}]

type Props = {
  className?: string;
}

export default function CaseTypeTiles({ className }: Props) {
  return (
    <Section header="Hello world" subHeader="Header" className={classNames(className)}>
      <div className="flex flex-wrap gap-8">
        {
          caseTypesData.map(data => (
            <ScalingImageWithHeading key={data.key} className="flex-1" image={data.image} heading={data.heading} />
          ))
        }
      </div>
    </Section>
  )
}