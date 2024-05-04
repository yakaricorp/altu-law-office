import { v4 as createId } from 'uuid'
import classNames from 'classnames'

import Section from "@/ui/components/section"
import IconHeaderWithSlidingText from "@/ui/components/icon-header-with-sliding-text"

const titleDescriptionData = [{
  key: createId(),
}, {
  key: createId(),
}, {
  key: createId(),
}, {
  key: createId(),
}, {
  key: createId(),
}]

type Props = {
  className?: string;
}

export default function ServiceTypeTiles({ className }: Props) {
  return (
    <Section header="Hello world" subHeader="Header" className={classNames(className)}>
      <div className="flex flex-wrap justify-center gap-8">
        {
          titleDescriptionData.map(data => (
            <IconHeaderWithSlidingText key={data.key} />
          ))
        }
      </div>
    </Section>
  )
}