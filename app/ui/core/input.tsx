'use client'

import { useId } from "react"
import classNames from "classnames"
import type { InputPropTypes } from "@/lib/definitions"


type Props = InputPropTypes<HTMLInputElement> & {
  type: 'text' | 'number' | 'email';
}

export default function Input({
  type,
  value,
  onChange,
  disabled,
  label,
  placeholder,
  className,
}: Props) {
  const inputId = useId()

  return (
    <div className={classNames(['border px-4 py-3', className])}>
      <label htmlFor={inputId}>{label}</label>
      <input
        className="outline-none w-full"
        type={type}
        id={inputId}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  )
}