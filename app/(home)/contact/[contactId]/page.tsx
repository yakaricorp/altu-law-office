import classNames from "classnames"
import { notFound } from "next/navigation"

import SendMessageForm from "@/ui/components/send-message-form"
import { font_playfair } from "@/ui/fonts"
import withTranslations from "@/ui/components/hoc/withTranslations/server"
import { Translations } from "@/ui/components/hoc/withTranslations/types"

const contactIdMap = Object.freeze({
  'asil-tuna': true,
  'mehmet-aldemir': true,
})

type ContactId = 'asil-tuna' | 'mehmet-aldemir'
type Props = {
  params: {
    contactId: ContactId
  }
} & Translations
function SendMessage({ t, params }: Props) {

  const { contactId } = params
  if (!(contactId in contactIdMap)) {
    return notFound()
  }

  return (
    <div className="min-w-[400px] xs:min-w-full max-w-[800px] mx-auto py-20 px-8">
      <h1 className={classNames([font_playfair.className, 'mb-4 text-2xl'])}>
        { t('contact-form.send-message-to', { name: contactIdMap[contactId] }) }
      </h1>
      <p className="mb-4">
        { t('contact-form.subheader') }
      </p>
      <SendMessageForm></SendMessageForm>
    </div>
  )
}

export default withTranslations(SendMessage)
