'use client'

import type { MouseEvent } from "react"
import classNames from "classnames"
import { useFormStatus } from "react-dom"

type Props = {
  label: string
  type?: 'submit';
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  className?: string
  disabled?: boolean
  disabledLabel?: string;
}

export default function Button({ label, type, onClick, className, disabled, disabledLabel }: Props) {

  const { pending } = useFormStatus()

  return (
    <button
      type={type}
      className={classNames([
        'rounded-full uppercase text-sm bg-primary text-white px-5 py-3 tracking-widest',
        'inline-block cursor-pointer hover:bg-black hover:text-white whitespace-nowrap',
        'disabled:opacity-[0.5]',
        className,
      ])}
      style={{ transition: 'background-color .1s linear' }}
      onClick={onClick}
      data-testid="button"
      disabled={disabled || pending}
    >
      { disabled || pending ? disabledLabel || label : label }
    </button>
  )
}