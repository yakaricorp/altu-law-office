'use client'

import classNames from "classnames"

type Props = {
  label: string
  className?: string
}

export default function Button({ label, className }: Props) {
  return (
    <div className={classNames([
      'rounded-full uppercase text-sm bg-primary text-white px-5 py-3 tracking-widest inline-block cursor-pointer hover:bg-black hover:text-white whitespace-nowrap',
      className,
    ])}
    style={{ transition: 'background-color .1s linear' }}>
      { label }
    </div>
  )
}