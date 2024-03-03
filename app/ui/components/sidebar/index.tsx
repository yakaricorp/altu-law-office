// import { Playfair_Display } from 'next/font/google'
import SidebarDesktop from '@/ui/components/sidebar/sidebar-desktop'
import type { SidebarMenuItem } from '@/lib/definitions'

import { randomUUID } from 'crypto'

// const pfDisplay = Playfair_Display({ weight: '400', subsets: ['latin'] })

export default function Sidebar() {
  const navMenuItems: SidebarMenuItem[] = [
    {
      key: randomUUID(),
      text: 'Anasayfa',
      route: '/',
    },
    {
      key: randomUUID(),
      text: 'Hakkında',
      route: '/about',
    },
    {
      key: randomUUID(),
      text: 'Hizmetler',
      route: '/',
    },
    {
      key: randomUUID(),
      text: 'Davalar',
      route: '/',
    },
    {
      key: randomUUID(),
      text: 'SSS',
      route: '/',
    },
    {
      key: randomUUID(),
      text: 'İletişim',
      route: '/',
    },
  ]

  return (
    <SidebarDesktop menuItems={navMenuItems}></SidebarDesktop>
  )
}
