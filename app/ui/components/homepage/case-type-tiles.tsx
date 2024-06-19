import { v4 as createId } from 'uuid'
import classNames from 'classnames'

import Section from "app/ui/components/section"
import ScalingImageWithHeading from "app/ui/components/scaling-image-with-heading"
import { languages } from 'app/i18n/settings'
import { useTranslation } from 'app/i18n/client'

const caseTypesData = [{
  key: createId(),
  image: '/family-violence.jpeg',
  heading: 'categories.0',
}, {
  key: createId(),
  image: '/criminal-law.jpeg',
  heading: 'categories.1',
}, {
  key: createId(),
  image: '/construction-law.webp',
  heading: 'categories.2',
}, {
  key: createId(),
  image: '/business-law.jpeg',
  heading: 'categories.3',
}]

type Props = {
  id?: string;
  className?: string;
}
export default function CaseTypeTiles({ id, className }: Props) {
  const [lng] = languages
  const { t } = useTranslation(lng)

  return (
    <Section id={id} header={t('case-type-tiles.header')} subHeader={t('case-type-tiles.subheader')} className={classNames(className)}>
      <div className="flex flex-wrap gap-8 sm:justify-center">
        {
          caseTypesData.map(data => (
            <ScalingImageWithHeading
              key={data.key}
              className="flex-1 use-anim"
              animationTarget="tile"
              image={data.image}
              heading={t(`case-type-tiles.${data.heading}`)}
            />
          ))
        }
      </div>
    </Section>
  )
}