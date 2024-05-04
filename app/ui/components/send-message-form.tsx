'use client'

import { useFormState } from "react-dom";
import classNames from "classnames"

import Input from "@/ui/components/core/input"
import Button from "@/ui/components/core/button"
import TextArea from "@/ui/components/core/textarea"

import { FormState } from "@/lib/definitions"
import { actionContactSendMessage } from "@/actions/contact-send-message"

type Props = {
  className?: string;
}
export default function SendMessageForm({ className }: Props) {
  const [state, formAction] = useFormState<FormState, FormData>(actionContactSendMessage, {
    severity: null,
    message: '',
  })

  return (
    <form action={formAction} className={classNames([className])}>
      <div className={classNames({
        [`bg-${state.severity}`]: true,
      })}>
        { state?.message }
      </div>
      <div className="flex xs:flex-wrap gap-4 mt-4">
        <Input
          name="name"
          className="flex-1 xs:min-w-[120px]"
          placeholder="Name"
          type="text"
          disabled={false}
        ></Input>
        <Input
          name="email"
          className="flex-1 xs:min-w-[120px]"
          placeholder="Email"
          type="email"
          disabled={false}
        ></Input>
      </div>
      <div className="my-4">
        <TextArea
          name="message"
          placeholder="Message"
          rows={5}
          maxLength={300}
        ></TextArea>
      </div>
      <div className="text-right xs:text-center">
        <Button type="submit" label="Send" className="px-20 xs:w-full"></Button>
      </div>
    </form>
  )
}