'use client'

import classNames from 'classnames'
import SidebarContactSection from './contact-section'
import StarSvg from '@/ui/icons/star.svg'
import { font_playfair } from '@/ui/fonts'

import type { SidebarMenuItem } from '@/lib/definitions'

export const render = ({ menuItems }: { menuItems: SidebarMenuItem[] }): JSX.Element => {
  const ICON_SIZE = 10

  return (
    <div className={classNames([
      font_playfair.className,
      'bg-secondary h-[100%]',
    ])}>
      <div className="px-8 py-12 text-center">
        <h1 className="text-primary text-4xl mb-2 tracking-wider">ALTU</h1>
        <h2 className="text-textPrimary text-xl tracking-widest uppercase">Hukuk Bürosu</h2>
      </div>
      <div className="px-8">
        <ul className="text-textPrimary">
          {
            menuItems.map(menuItem => (
              <li key={menuItem.key} className="flex items-center mb-3 cursor-pointer hover:text-primary">
                <StarSvg
                  width={ICON_SIZE}
                  height={ICON_SIZE}
                ></StarSvg>
                <span className="ml-2 tracking-wider">{menuItem.text}</span>
              </li>
            ))
          }
        </ul>
      </div>
      <SidebarContactSection />
    </div>
  )
}
