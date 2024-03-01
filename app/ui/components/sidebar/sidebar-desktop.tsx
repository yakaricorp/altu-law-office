'use client'

import * as sidebarBase from './sidebar-base'
import ShowHideButton from './sidebar-mobile/show-hide-button'
import type { SidebarMenuItem } from '@/lib/definitions'

type Props = {
  menuItems: SidebarMenuItem[]
}
export default function SidebarDesktop({
  menuItems,
}: Props) {

  return (
    <aside id="sidebar" className="fixed h-screen z-2">
      { sidebarBase.render({ menuItems }) }
      <ShowHideButton
        className="fixed top-[16px] left-[calc(100%+16px)] z-10 md:hidden"
      />
    </aside>
  )
}