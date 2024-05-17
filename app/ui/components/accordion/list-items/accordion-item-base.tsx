import { type ReactElement } from "react"
import classNames from "classnames"
import { font_playfair } from "@/ui/fonts"

export type Accordion = {
  id: string
  headline: string,
}

export type AccordionProps = {
  isExpanded: boolean
  setExpanded: () => void
}

type Props = Accordion & AccordionProps & {
  children: ReactElement
}
export default function AccordionBase({
  id,
  headline,
  isExpanded,
  setExpanded,
  children,
}: Props) {
  return (
    <div className="block my-4 accordion-item">
      <button
        onClick={() => setExpanded()}
        className={classNames([
          font_playfair.className,
          'p-4 text-xl bg-alternate w-full text-left border-b border-b-2 border-primary'
        ])}
      >
        { headline }
      </button>
      {
        isExpanded && <div className="px-6 py-10 bg-gray">
          { children }
        </div>
      }
    </div>
  )
}