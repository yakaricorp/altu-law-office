import { useMemo } from 'react'
import { v4 as createId } from 'uuid'
import classNames from 'classnames'

import Section from "app/ui/components/section"
import IconHeaderWithSlidingText from "app/ui/components/icon-header-with-sliding-text"
import { languages } from 'app/i18n/settings'
import { useTranslation } from 'app/i18n/client'

type ServiceTypeTranslationObject = {
  name: string
  description: string
}

type Props = {
  id?: string;
  className?: string;
}
export default function ServiceTypeTiles({ id, className }: Props) {
  const [lng] = languages
  const { t } = useTranslation(lng)

  const items = useMemo(() => {
    const translations = t('service-type-tiles.services') as unknown as ServiceTypeTranslationObject[]
    return translations.map((data) => ({
      key: createId(),
      name: data.name,
      description: data.description,
    }))
  }, [])

  return (
    <Section id={id} header={t('service-type-tiles.header')} subHeader={t('service-type-tiles.subheader')} className={classNames(className)}>
      <div className="flex flex-wrap justify-center gap-8">
        {
          items.map(data => (
            <IconHeaderWithSlidingText
              key={data.key}
              title={data.name}
              description={data.description}
              className="use-anim"
              animationTarget="card"
            />
          ))
        }
      </div>
    </Section>
  )
}