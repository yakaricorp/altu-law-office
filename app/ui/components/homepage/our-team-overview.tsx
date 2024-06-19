import classNames from "classnames"
import Image from "next/image"

import Button from "app/ui/components/core/button"
import { font_playfair } from "app/ui/fonts"
import { TeamMember } from "app/lib/definitions"
import Link from "next/link"

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
      <div className="py-6 border-b border-gray-var-2">
        <h5 className="inline font-bold text-2xl">{fullname}</h5>
        <span className="mx-2 font-thin text-2xl">-</span>
        <h6 className="inline font-thin text-2xl">{jobTitle}</h6>
      </div>
      <div className="py-6 text-text-primary font-light border-b border-gray-var-2">
        { description }
      </div>
      <div className="py-6 flex xs:flex-wrap text-center gap-2">
        <Link href="/contact/mehmet-aldemir" className="flex-1 xs:flex-0">
          <Button className="w-full" label="View background"></Button>
        </Link>
        <Link href="/contact/mehmet-aldemir" className="flex-1 xs:flex-0">
          <Button className="w-full" label="Send a message"></Button>
        </Link>
      </div>
    </li>
  )
}

type Props = {
  className?: string;
  hideHeader?: boolean;
  attorneys: TeamMember[]
}
export default function OurTeamOverview({
  className,
  hideHeader,
  attorneys,
}: Props) {
  return (
    <div className={className}>
      {
        !hideHeader ?
          <h4 className={classNames([font_playfair.className, 'uppercase text-center text-4xl font-bold py-24'])}>
            <span className="text-primary">Meet</span> our <span className="text-primary">attorneys</span>
          </h4>
        : ''
      }
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