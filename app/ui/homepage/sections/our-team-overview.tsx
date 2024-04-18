import classNames from "classnames"
import Image from "next/image"
import Button from "@/ui/core/button"
import { font_playfair } from "@/ui/fonts"

type ItemProps = {
  className?: string
  imageUri: string
  fullname: string
  jobTitle: string
  description: string
}
export function TeamMemberItem({
  className,
  imageUri,
  fullname,
  jobTitle,
  description,
}: ItemProps) {
  return (
    <li className={classNames(['mx-16', className])}>
      <div className="h-[420px] relative overflow-clip">
        <Image
          className="absolute object-cover grayscale max-w-full"
          src={imageUri}
          alt={fullname}
          fill
        ></Image>
      </div>
      <div className="py-6 border-b">
        <h5 className="inline font-bold text-2xl">{fullname}</h5>
        <span className="mx-2 font-thin text-2xl">-</span>
        <h6 className="inline font-thin text-2xl">{jobTitle}</h6>
      </div>
      <div className="py-6 text-textPrimary font-light border-b">
        { description }
      </div>
      <div className="py-6 flex xs:flex-wrap text-center gap-2">
        <Button className="flex-1 xs:flex-0" label="View background"></Button>
        <Button className="flex-1 xs:flex-0" label="Send a message"></Button>
      </div>
    </li>
  )
}

export default function OurTeamOverview() {
  const attorneys = [
    {
      imageUri: '/attorney-2.JPG',
      fullname: 'Av. Mehmet Aldemir',
      jobTitle: 'Founder',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, expedita. Explicabo omnis odio illum molestias dolor magni tempora eius iste maiores commodi nesciunt, facilis sunt consectetur nam autem, quasi quo.',
    },
    {
      imageUri: '/attorney-1.jpeg',
      fullname: 'Av. Asil Tuna',
      jobTitle: 'Founder',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, expedita. Explicabo omnis odio illum molestias dolor magni tempora eius iste maiores commodi nesciunt, facilis sunt consectetur nam autem, quasi quo.',
    }
  ]

  return (
    <div>
      <h4 className={classNames([font_playfair.className, 'uppercase text-center text-4xl font-bold py-24'])}>
        <span className="text-primary">Meet</span> our <span className="text-primary">attorneys</span>
      </h4>
      <ul className="flex md-w-sidebar:block justify-center py-12 pt-0">
        {
          attorneys.map(attorney => (
            <TeamMemberItem className="md-w-sidebar:my-12" key={attorney.fullname} {...attorney}></TeamMemberItem>
          ))
        }
      </ul>
    </div>
  )
}