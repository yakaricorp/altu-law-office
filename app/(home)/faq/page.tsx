import Section from "@/ui/components/section"
import AccordionList from "@/ui/components/accordion"


const items = [{
  id: 'first',
  headline: 'What is the most irrational superstition you have?',
  textContent: 
    'When you spill hot water into the sink, genie\'s children are dying and they start bothering you forever.',
}, {
  id: 'second',
  headline: 'Who knows the most secrets about you?',
  textContent: 
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, perferendis. Error deleniti quisquam corrupti, maxime at id illo soluta, quasi ipsum consequatur nobis, illum minima recusandae odit commodi vitae sunt.',
}, {
  id: 'third',
  headline: 'What is the silliest you have ever felt?',
  textContent: 
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, perferendis. Error deleniti quisquam corrupti, maxime at id illo soluta, quasi ipsum consequatur nobis, illum minima recusandae odit commodi vitae sunt.',
}]

export default function FAQPage() {
  return (
    <Section
      header="Hello"
      subHeader="World"
      className="pb-16"
    >
      <AccordionList
        items={items}
        kind="paragraph"
      ></AccordionList>
    </Section>
  )
}