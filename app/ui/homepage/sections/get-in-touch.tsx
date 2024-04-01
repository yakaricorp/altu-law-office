import classNames from "classnames"

import Section from "@/ui/components/section"
import Map from "@/ui/components/map"
import IconTitleDescription from "@/ui/components/icon-title-desctiption"
import SendMessageForm from "@/ui/components/send-message-form"
import { font_playfair } from "@/ui/fonts"

import PhoneOutlineSvg from "@/ui/icons/phone-outline.svg"
import MailOutlineSvg from "@/ui/icons/mail-outline.svg"
import ClockSvg from "@/ui/icons/clock.svg"

export default function GetInTouch() {

  const getInTouchData = [{
    key: 'phone',
    icon: <PhoneOutlineSvg />,
    title: 'Phone',
    description: '(555) 555 55 55',
  }, {
    key: 'email',
    icon: <MailOutlineSvg />,
    title: 'E-Mail',
    description: 'altuhukuk@gmail.com',
  }, {
    key: 'work-hours',
    icon: <ClockSvg />,
    title: 'Work Hours',
    description: 'Mon-Fri: 08:00-19:00',
  }]

  return (
    <Section header="Get In Touch" subHeader="Contact Us" className="py-16">
      <div>
        <Map></Map>
        <div className="flex flex-wrap gap-32 py-6 mt-8">
          <ul className="[&>*]:mb-6">
            {
              getInTouchData.map(data => (
                <IconTitleDescription
                  key={data.key}
                  icon={data.icon}
                  title={data.title}
                  description={data.description}
                />
              ))
            }
          </ul>
          <div className="flex-1 min-w-[400px] max-w-[800px] justify-self-end">
            <h1 className={classNames([font_playfair.className, 'mb-4 text-2xl'])}>{'Don\'t hesitate to ask'}</h1>
            <p className="mb-4">Law is complicate matter. It can cause you a big problem if you ignore it. Let us help you!</p>
            <SendMessageForm></SendMessageForm>
          </div>
        </div>
      </div>
    </Section>
  )
}