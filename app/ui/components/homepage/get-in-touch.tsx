import classNames from "classnames"

import Section from "app/ui/components/section"
import Map from "app/ui/components/map"
import IconTitleDescription from "app/ui/components/icon-title-desctiption"
import SendMessageForm from "app/ui/components/send-message-form"
import { font_playfair } from "app/ui/fonts"
import type { Translations } from "app/ui/components/hoc/withTranslations/types"

import PhoneOutlineSvg from "@/ui/icons/phone-outline.svg"
import MailOutlineSvg from "@/ui/icons/mail-outline.svg"
import ClockSvg from "@/ui/icons/clock.svg"

const getInTouchData = [{
  id: 'phone',
  IconComponent: PhoneOutlineSvg,
  title: 'Phone',
  description: '(555) 555 55 55',
}, {
  id: 'email',
  IconComponent: MailOutlineSvg,
  title: 'E-Mail',
  description: 'altuhukuk@gmail.com',
}, {
  id: 'work-hours',
  IconComponent: ClockSvg,
  title: 'Work Hours',
  description: 'Mon-Fri: 08:00-19:00',
}]

type Props = {
  className?: string;
} & Translations
export default function GetInTouch({ className, t }: Props) {

  if (!t) {
    throw new Error('Component needs to be wrapped with withTranslations HOC.')
  }

  return (
    <Section
      header={t('get-in-touch.header')}
      subHeader={t('get-in-touch.subheader')}
      className={classNames(className)}
    >
      <div>
        <Map></Map>
        <div className="flex flex-wrap gap-32 py-6 mt-8">
          <ul className="[&>*]:mb-6">
            {
              getInTouchData.map(data => (
                <IconTitleDescription key={data.id} { ...data } />
              ))
            }
          </ul>
          <div className="flex-1 min-w-[400px] xs:min-w-full max-w-[800px] ml-auto">
            <h1 className={classNames([font_playfair.className, 'mb-4 text-2xl'])}>
              { t('contact-form.header') }
            </h1>
            <p className="mb-4">
              { t('contact-form.subheader') }
            </p>
            <SendMessageForm></SendMessageForm>
          </div>
        </div>
      </div>
    </Section>
  )
}
