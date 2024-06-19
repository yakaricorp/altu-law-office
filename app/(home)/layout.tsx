import '../globals.css'

import { languages } from 'app/i18n/settings'

import type { ReactNode } from 'react'
import type { Metadata } from "next"

import { font_mukta } from 'app/ui/fonts'
import Sidebar from 'app/ui/components/sidebar'
import Footer from 'app/ui/components/footer'

export const metadata: Metadata = {
  title: 'Altu',
  description: 'Altu Hukuk Burosu',
}

type Props = {
  children: ReactNode
}
export default function RootLayout({ children }: Props) {
  const [HTML_LANG] = languages

  return (
    <html lang={HTML_LANG}>
      <body className={font_mukta.className}>
        <Sidebar />
        <div id="page-content" className="z-1">
          {children}
          <Footer></Footer>
        </div>
      </body>
    </html>
  )
}
