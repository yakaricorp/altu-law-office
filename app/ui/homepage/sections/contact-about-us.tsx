import classNames from "classnames"
import { font_playfair } from "@/ui/fonts"
import Button from "@/ui/core/button"
import { IconTitleDescriptionList } from "@/ui/components/icon-title-desctiption"

// icons
import MailSvg from "@/ui/icons/mail.svg"
import ClipboardDocumentSvg from "@/ui/icons/clipboard-document.svg"

export default function ContactAboutUs() {
  const iconTitleDescItems = [
    {
      icon: <MailSvg/>,
      title: 'Hello',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
      icon: <ClipboardDocumentSvg/>,
      title: 'World',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
  ]

  return (
    <div className="md:flex block">
      <div className="flex-1 text-white px-12 py-32 bg-center bg-cover bg-[url('/pardon.jpg')] bg-[#444] bg-blend-multiply">
        <h6 className={classNames([
          'text-3xl mb-12 text-primary',
          font_playfair.className,
        ])}>
          Need legal help? Keep in touch with our lawyers.
        </h6>

        <p className="mb-12">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor saepe recusandae aliquam dolores, maxime quasi dolore enim accusamus et illo reprehenderit modi natus iusto odit quibusdam, voluptatem non facilis. Reprehenderit!
        </p>

        <div className="text-right">
          <Button label="Contact"></Button>
        </div>
      </div>
      <div className="bg-backGray flex-1 px-12 py-32">
        <h6 className={classNames([
          'text-3xl mb-6',
          font_playfair.className,
        ])}>
          Why choose us?
        </h6>

        <p className={classNames([font_playfair.className])}>
          We always give you the best benefit of trusting us and winning
        </p>

        <IconTitleDescriptionList items={iconTitleDescItems} />
      </div>
    </div>
  )
}