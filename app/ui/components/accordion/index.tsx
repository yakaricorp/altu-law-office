'use client'

import { useState } from "react"

import { type AccordionProps } from "./list-items/accordion-item-base"

import AccordionParagraphListItem, {
  type AccordionParagraph,
  typeName as TParagraph,
} from "./list-items/accordion-item-paragraph"

export type AccordionKind = typeof TParagraph
type AccordionKindProps = AccordionParagraph

const renderItem = (
  kind: AccordionKind,
  props: AccordionProps & AccordionKindProps
) => {
  switch(kind) {
    case "paragraph":
      return (
        <AccordionParagraphListItem
          key={props.id}
          id={props.id}
          headline={props.headline}
          textContent={props.textContent}
          isExpanded={props.isExpanded}
          setExpanded={props.setExpanded}
        />
      )
    default:
      throw new TypeError("Invalid accordion list item type: " + kind)
  }
}

type Props = {
  kind: AccordionKind
  items: AccordionKindProps[]
}
export default function AccordionList({ kind, items }: Props) {

  const [activeId, setActiveId] = useState<string | null>(null)

  if (!Array.isArray(items)) {
    throw new TypeError("Prop 'items' must be an array!")
  }

  return (
    <div>
      {
        items.map(item => {
          const isExpanded = item.id === activeId
          return renderItem(kind, {
            ...item,
            isExpanded,
            setExpanded: () => setActiveId(item.id),
          })
        })
      }
    </div>
  )
}
