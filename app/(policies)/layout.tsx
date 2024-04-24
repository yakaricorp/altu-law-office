import '../globals.css'

import type { ReactNode } from 'react'
import type { Metadata } from "next"
import classNames from 'classnames'

import { font_mukta } from '@/ui/fonts'

export const metadata: Metadata = {
  title: 'Altu',
  description: 'Altu Hukuk Burosu',
}

export default function PoliciesLayout({
  children,
}: {
  children: ReactNode
}) {
  const HTML_LANG = 'tr'

  return (
    <html lang={HTML_LANG}>
      <body className={classNames([font_mukta.className, 'z-1'])}>
        {children}
      </body>
    </html>
  )
}
