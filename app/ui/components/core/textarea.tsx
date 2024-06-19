'use client'

import { useId } from "react"
import classNames from "classnames"
import type { InputPropTypes } from "app/lib/definitions"
import { useFormStatus } from "react-dom"

type Props = InputPropTypes<HTMLTextAreaElement> & {
  rows: number;
  cols?: number;
}

export default function TextArea({
  name,
  value,
  rows,
  onChange,
  cols,
  disabled,
  label,
  placeholder,
  className,
  maxLength,
  minLength,
}: Props) {
  const inputId = useId()
  const { pending } = useFormStatus()

  return (
    <div className={classNames(['border border-gray-var-2 px-4 py-3', className])}>
      <label htmlFor={inputId}>{label}</label>
      <textarea
        className="outline-none w-full"
        id={inputId}
        name={name}
        value={value}
        disabled={disabled || pending}
        placeholder={placeholder}
        onChange={onChange}
        rows={rows}
        cols={cols}
        maxLength={maxLength}
        minLength={minLength}
      />
    </div>
  )
}