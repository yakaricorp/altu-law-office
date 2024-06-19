'use client'

import SidebarBase from './sidebar-base'
import ShowHideButton from './show-hide-button'
import type { SidebarMenuItem } from 'app/lib/definitions'

type Props = {
  menuItems: SidebarMenuItem[]
}
export default function SidebarDesktop({
  menuItems,
}: Props) {

  return (
    <aside id="sidebar" className="fixed h-screen z-2">
      { SidebarBase({ menuItems }) }
      <ShowHideButton
        className="fixed top-[16px] left-[calc(100%+16px)] z-10 md:hidden"
      />
    </aside>
  )
}