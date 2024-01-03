// import { Playfair_Display } from 'next/font/google'
import SidebarDesktop from '@/ui/components/sidebar/sidebar-desktop'
import SidebarMobile from '@/ui/components/sidebar/sidebar-mobile'
import type { SidebarMenuItem } from '@/lib/definitions'

import { randomUUID } from 'crypto'

// const pfDisplay = Playfair_Display({ weight: '400', subsets: ['latin'] })

export default function Sidebar() {
  console.log('Render sidebar')

  const navMenuItems: SidebarMenuItem[] = [
    {
      key: randomUUID(),
      text: 'Anasayfa'
    },
    {
      key: randomUUID(),
      text: 'Hakkında'
    },
    {
      key: randomUUID(),
      text: 'Hizmetler'
    },
    {
      key: randomUUID(),
      text: 'Davalar'
    },
    {
      key: randomUUID(),
      text: 'SSS'
    },
    {
      key: randomUUID(),
      text: 'İletişim'
    },
  ]

  const desktop = [
    {
      key: 'sad',
      text: 'Desktop'
    },
    ...navMenuItems
  ]

  const mobile = [
    {
      key: 'das',
      text: 'Mobile'
    },
    ...navMenuItems
  ]

  return (
    <>
      <SidebarDesktop menuItems={desktop}></SidebarDesktop>
      {/* <SidebarMobile menuItems={mobile}></SidebarMobile> */}
    </>
  )
}
