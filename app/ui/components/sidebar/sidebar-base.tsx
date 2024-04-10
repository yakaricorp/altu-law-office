'use client'

import classNames from 'classnames'
import Link from 'next/link'
import StarSvg from '@/ui/icons/star.svg'
import { font_mukta, font_playfair } from '@/ui/fonts'

import type { SidebarMenuItem } from '@/lib/definitions'

export const render = ({ menuItems }: { menuItems: SidebarMenuItem[] }): JSX.Element => {
  const ICON_SIZE = 10

  return (
    <div className={classNames([
      font_playfair.className,
      'bg-secondary h-[100%]',
    ])}>
      <div className="px-8 py-12 text-center">
        <h1 className="text-primary text-6xl mb-2 tracking-wider">ALTU</h1>
        <h2 className={classNames([
          font_mukta.className,
          'text-textPrimary font-thin text-xl tracking-widest uppercase'
        ])}>Hukuk Bürosu</h2>
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
                <Link href={menuItem.route}>
                  <span className="ml-2 tracking-wider text-lg">{menuItem.text}</span>
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
      {/* <SidebarContactSection /> */}
    </div>
  )
}
