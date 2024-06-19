import '../globals.css'

import type { ReactNode } from 'react'
import type { Metadata } from "next"
import classNames from 'classnames'
import Link from "next/link"

import TurnBackArrovSvg from '@/ui/icons/turn-back-arrow.svg'
import { font_mukta } from 'app/ui/fonts'

export const metadata: Metadata = {
  title: 'Altu',
  description: 'Altu Hukuk Burosu',
}

function GoBack() {
  return (
    <Link href="/" className="hover:bg-alternate p-4">
      <TurnBackArrovSvg className="w-8 inline"></TurnBackArrovSvg>
    </Link>
  )
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
        <div className={classNames([font_mukta.className, 'px-[10vw] xl:px-[20%] py-8'])}>
          <GoBack></GoBack>
          {children}
          <GoBack></GoBack>
        </div>
      </body>
    </html>
  )
}
