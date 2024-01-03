'use client'

import { v4 as createId } from 'uuid'
import * as sidebarBase from '../sidebar-base'
import type { SidebarMenuItem } from '@/lib/definitions'
import ShowHideButton from './show-hide-button'
import classNames from 'classnames'
import { useState } from 'react'

type Props = {
  menuItems: SidebarMenuItem[]
}
export default function SidebarMobile({
  menuItems,
}: Props) {
  const [isVisible, setVisible] = useState(false)

  return (
    <aside className={classNames({
      'sidebar-mobile md:hidden relative transition-transform z-2': true,
    })}>
      <ShowHideButton
        className="fixed left-[calc(100%+16px)] top-[16px]"
      />
      { sidebarBase.render({ menuItems }) }
    </aside>
  )
}