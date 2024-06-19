'use client'

import { useId } from "react"
import { useFormStatus } from "react-dom"
import classNames from "classnames"
import type { InputPropTypes } from "app/lib/definitions"

type Props = InputPropTypes<HTMLInputElement> & {
  type: 'text' | 'number' | 'email';
}
export default function Input({
  name,
  type,
  value,
  onChange,
  disabled,
  label,
  placeholder,
  className,
  maxLength,
}: Props) {
  const inputId = useId()
  const { pending } = useFormStatus()

  return (
    <div className={classNames(['border border-gray-var-2 px-4 py-3', className])}>
      <label htmlFor={inputId}>{label}</label>
      <input
        className="outline-none w-full"
        type={type}
        name={name}
        id={inputId}
        value={value}
        disabled={disabled || pending}
        placeholder={placeholder}
        onChange={onChange}
        maxLength={maxLength}
      />
    </div>
  )
}