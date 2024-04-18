'use client'

import type { FormEvent } from "react"
import { experimental_useFormStatus } from "react-dom"
import classNames from "classnames"

import Input from "@/ui/core/input"
import Button from "@/ui/core/button"
import TextArea from "@/ui/core/textarea"
import useInput from "@/ui/hooks/use-input"

import { contactSendMessage } from "@/actions"

type Props = {
  className?: string;
}
export default function SendMessageForm({ className }: Props) {
  const { value: fullName, onChange: onChangeFullName } = useInput<HTMLInputElement>('')
  const { value: email, onChange: onChangeEmail } = useInput<HTMLInputElement>('')
  const { value: message, onChange: onChangeMessage } = useInput<HTMLTextAreaElement>('')

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log({
      fullName,
      email,
      message,
    })
  }

  return (
    <form action={contactSendMessage} className={classNames([className])}>
      <div className="flex xs:flex-wrap gap-4 mt-4">
        <Input
          className="flex-1 xs:min-w-[120px]"
          placeholder="Name"
          type="text"
          value={fullName}
          disabled={false}
          onChange={onChangeFullName}
        ></Input>
        <Input
          className="flex-1 xs:min-w-[120px]"
          placeholder="Email"
          type="email"
          value={email}
          disabled={false}
          onChange={onChangeEmail}
        ></Input>
      </div>
      <div className="my-4">
        <TextArea
          placeholder="Message"
          rows={5}
          maxLength={300}
          value={message}
          onChange={onChangeMessage}
        ></TextArea>
      </div>
      <div className="text-right xs:text-center">
        <Button type="submit" label="Send" className="px-20 xs:w-full"></Button>
      </div>
    </form>
  )
}