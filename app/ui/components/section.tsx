import type { ReactNode } from 'react'
import classNames from 'classnames'
import { font_mukta, font_playfair } from '@/ui/fonts'

type Props = {
  header?: string
  subHeader?: string
  className?: string
  children?: ReactNode
}

export default function Section({ header, subHeader, className, children }: Props) {
  return (
    <section className={
      classNames([
        process.env.NEXT_PUBLIC_PAGE_SECTION_CLASSNAME,
        'px-12',
        className || '',
      ])
    }>
      {
        header &&
        <h1 className={classNames([
          font_mukta.className,
          'text-primary font-thin text-sm tracking-[0.2rem] uppercase pt-12 use-anim'
        ])}
          data-animation-target="header"
        >
          { header }
        </h1>
      }
      {
        subHeader &&
        <h2 className={classNames([
          font_playfair.className,
          'text-secondary mt-2 text-3xl use-anim'
        ])}
          data-animation-target="subheader"
        >
          { subHeader }
        </h2>
      }
      <div className="pt-12">
        { children }
      </div>
    </section>
  )
}