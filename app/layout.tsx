import './globals.css'
import { Mukta } from 'next/font/google'
import Sidebar from '@/ui/components/sidebar'

import type { ReactNode } from 'react'
import type { Metadata } from "next"

const mukta = Mukta({ weight: '300', subsets: ['latin'] })

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
      <body className={mukta.className}>
        <Sidebar />
        <div id="page-content" className="z-1">
          {children}
        </div>
      </body>
    </html>
  )
}
