import classNames from "classnames"

import Section from "@/ui/components/section"
import Map from "@/ui/components/map"
import IconTitleDescription from "@/ui/components/icon-title-desctiption"
import SendMessageForm from "@/ui/components/send-message-form"
import { font_playfair } from "@/ui/fonts"

import PhoneOutlineSvg from "@/ui/icons/phone-outline.svg"
import MailOutlineSvg from "@/ui/icons/mail-outline.svg"
import ClockSvg from "@/ui/icons/clock.svg"

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

type Props = {
  className?: string;
}

export default function GetInTouch({ className }: Props) {
  return (
    <Section header="Get In Touch" subHeader="Contact Us" className={classNames(className)}>
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
          <div className="flex-1 min-w-[400px] xs:min-w-full max-w-[800px] ml-auto">
            <h1 className={classNames([font_playfair.className, 'mb-4 text-2xl'])}>{'Don\'t hesitate to ask'}</h1>
            <p className="mb-4">Law is complicate matter. It can cause you a big problem if you ignore it. Let us help you!</p>
            <SendMessageForm></SendMessageForm>
          </div>
        </div>
      </div>
    </Section>
  )
}