'use client'

import { useId } from "react"
import classNames from "classnames"
import type { InputPropTypes } from "@/lib/definitions"

type Props = InputPropTypes<HTMLTextAreaElement> & {
  rows: number;
  cols?: number;
}

export default function TextArea({
  value,
  rows,
  onChange,
  cols,
  disabled,
  label,
  placeholder,
  className,
}: Props) {
  const inputId = useId()

  return (
    <div className={classNames(['border px-4 py-3', className])}>
      <label htmlFor={inputId}>{label}</label>
      <textarea
        className="outline-none w-full"
        id={inputId}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        onChange={onChange}
        rows={rows}
        cols={cols}
      />
    </div>
  )
}