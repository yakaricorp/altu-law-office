import { randomUUID } from 'crypto'

import SidebarDesktop from 'app/ui/components/sidebar/sidebar-desktop'
import type { SidebarMenuItem } from 'app/lib/definitions'
import { languages } from "app/i18n/settings"
import { useTranslation } from "app/i18n"

export default async function Sidebar() {
  const [lng] = languages
  const { t } = await useTranslation(lng)

  const navMenuItems: SidebarMenuItem[] = [
    {
      key: randomUUID(),
      text: t('homepage'),
      route: '/',
    },
    {
      key: randomUUID(),
      text: t('why-us'),
      route: '/about',
    },
    {
      key: randomUUID(),
      text: t('services'),
      route: '/services',
    },
    {
      key: randomUUID(),
      text: t('cases'),
      route: '/',
    },
    {
      key: randomUUID(),
      text: t('faq'),
      route: '/faq',
    },
    {
      key: randomUUID(),
      text: t('contact'),
      route: '/contact',
    },
  ]

  return (
    <SidebarDesktop menuItems={navMenuItems}></SidebarDesktop>
  )
}
