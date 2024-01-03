'use client'

import Image from 'next/image'
import { SidebarMenuItem } from '@/lib/definitions'
import { Mukta } from 'next/font/google'
import { Playfair_Display } from 'next/font/google'

const pfDisplay = Playfair_Display({ weight: '400', subsets: ['latin'] })
const mukta = Mukta({ weight: '300', subsets: ['latin'] })

export const render = ({ menuItems }: { menuItems: SidebarMenuItem[] }): JSX.Element => {
  return (
    <div className={`${pfDisplay.className} h-screen bg-secondary fixed z-3 w-[320px]`}>
      <div className="p-8 text-center">
        <h1 className="text-primary text-4xl mb-2 tracking-wider">ALTU</h1>
        <h2 className="text-textPrimary text-sm tracking-[0.3rem] uppercase">Hukuk Bürosu</h2>
      </div>
      <div className="p-8">
        <ul className="text-textPrimary">
          {
            menuItems.map(menuItem => (
              <li key={menuItem.key} className="flex align-center mb-2 cursor-pointer hover:text-primary">
                <Image
                  src="/icons/sparkles.svg"
                  width={12}
                  height={12}
                  alt={menuItem.text}
                />
                <span className="ml-2 text-lg">{menuItem.text}</span>
              </li>
            ))
          }
        </ul>
      </div>
      <div className="p-8">
        <div className="text-primary text-sm tracking-widest uppercase pb-2">Bizi Arayın (24/7)</div>
        <div className={ mukta.className + ' text-textPrimary text-2xl' }>(232) 667 67 67</div>
      </div>
    </div>
  )
}
