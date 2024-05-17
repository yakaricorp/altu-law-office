import AccordionBase, { type Accordion, type AccordionProps } from "./accordion-item-base"

export const typeName = "paragraph"
export type AccordionParagraph = Accordion & {
  textContent: string
}

type Props = AccordionProps & AccordionParagraph
export default function AccordionParagraph({
  id,
  headline,
  textContent,
  isExpanded,
  setExpanded,
}: Props) {
  return (
    <AccordionBase
      id={id}
      headline={headline}
      isExpanded={isExpanded}
      setExpanded={setExpanded}
    >
      <p className="accordion-item--paragraph animate__animated animate__faster animate__fadeInUp">
        { textContent }
      </p>
    </AccordionBase>
  )
}
