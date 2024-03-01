import './globals.css'
import Sidebar from '@/ui/components/sidebar'

import type { ReactNode } from 'react'
import type { Metadata } from "next"
import { font_mukta } from '@/ui/fonts'

export const metadata: Metadata = {
  title: 'Altu',
  description: 'Altu Hukuk Burosu',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  const HTML_LANG = 'tr'

  return (
    <html lang={HTML_LANG}>
      <body className={font_mukta.className}>
        <Sidebar />
        <div id="page-content" className="z-1">
          {children}
        </div>
      </body>
    </html>
  )
}
