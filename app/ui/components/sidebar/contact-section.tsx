import classNames from 'classnames'
import { ReactNode } from 'react'

import PhoneSvg from '@/ui/icons/phone.svg'
import MailSvg from '@/ui/icons/mail.svg'
import { font_mukta } from 'app/ui/fonts'
import { languages } from 'app/i18n/settings'
import { useTranslation } from 'app/i18n/client'

type ContactSectionItemProps = {
  icon: ReactNode,
  text: string;
  hoverText: string;
  textClasses?: string;
}
function ContactSectionItem({ icon, text, hoverText, textClasses }: ContactSectionItemProps) {

  const textDefaultClasses = 'text-right tracking-wider text-primary break-keep whitespace-nowrap'

  return (
    <li className="border rounded-full border-gray-var-1 flex items-center mx-8 my-2 px-4 py-1 h-10 cursor-pointer parent-hover overflow-hidden relative">
      <span className="w-4 text-primary">
        {icon}
      </span>
      <span className={classNames([
        'flex-1 transition-transform parent-hover:translate-x-full',
        textDefaultClasses,
        textClasses,
      ])}>{ text }</span>
      <span className={classNames([
        textDefaultClasses,
        'text-sm transition-transform translate-x-full absolute parent-hover:-translate-x-[1rem] right-0',
      ])}>{hoverText}</span>
    </li>
  )
}

type Props = {
  className?: string;
}
export default function SidebarContactSection({ className }: Props) {
  const [lng] = languages
  const { t } = useTranslation(lng)

  return (
    <ul className={classNames([
      font_mukta.className,
      'font-semibold',
      className,
    ])}>
      <ContactSectionItem
        icon={<PhoneSvg/>}
        text={t('attorney-name', { firstname: 'Mehmet', lastname: 'ALDEMİR' })}
        textClasses="text-xl"
        hoverText={t('contact')}
      />
      <ContactSectionItem
        icon={<PhoneSvg/>}
        text={t('attorney-name', { firstname: 'Asil', lastname: 'TUNA' })}
        textClasses="text-xl"
        hoverText={t('contact')}
      />
      <ContactSectionItem
        icon={<MailSvg/>}
        text={'altuhukuk@gmail.com'}
        textClasses="text-xs"
        hoverText={t('send-email')}
      />
    </ul>
  )
}