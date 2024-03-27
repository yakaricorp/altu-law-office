'use client'

import type { MouseEvent } from "react"
import classNames from "classnames"

type Props = {
  label: string
  type?: 'submit';
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  className?: string
}

export default function Button({ label, type, onClick, className }: Props) {
  return (
    <button
      type={type}
      className={classNames([
        'rounded-full uppercase text-sm bg-primary text-white px-5 py-3 tracking-widest',
        'inline-block cursor-pointer hover:bg-black hover:text-white whitespace-nowrap',
        className,
      ])}
      style={{ transition: 'background-color .1s linear' }}
      onClick={onClick}
    >
      { label }
    </button>
  )
}