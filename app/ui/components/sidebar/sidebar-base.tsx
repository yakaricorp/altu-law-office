'use client'

import classNames from 'classnames'
import Link from 'next/link'
import StarSvg from '@/ui/icons/star.svg'
import { font_mukta, font_playfair } from 'app/ui/fonts'

import type { SidebarMenuItem } from 'app/lib/definitions'
import SidebarContactSection from './contact-section'
import { languages } from 'app/i18n/settings'
import { useTranslation } from 'app/i18n/client'

export default function SidebarBase ({ menuItems }: { menuItems: SidebarMenuItem[] }) {
  const ICON_SIZE = 10

  const [lng] = languages
  const { t } = useTranslation(lng)

  return (
    <div className={classNames([
      font_playfair.className,
      'bg-secondary h-[100%]',
    ])}>
      <div className="px-8 py-12 text-center">
        <h1 className="text-primary text-6xl mb-2 tracking-wider">
          { t('altu') }
        </h1>
        <h2 className={classNames([
          font_mukta.className,
          'text-text-primary font-thin text-xl tracking-widest uppercase'
        ])}>
          { t('law-office') }
        </h2>
      </div>
      <div className="px-8">
        <ul className="text-text-primary">
          {
            menuItems.map(menuItem => (
              <li key={menuItem.key} className="flex items-center mb-3 cursor-pointer hover:text-primary">
                <StarSvg
                  width={ICON_SIZE}
                  height={ICON_SIZE}
                ></StarSvg>
                <Link href={menuItem.route}>
                  <span className="ml-2 tracking-wider text-lg">{menuItem.text}</span>
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
      <SidebarContactSection className="mt-24" />
    </div>
  )
}
