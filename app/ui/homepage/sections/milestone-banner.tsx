import type { ReactNode } from "react"

// icons
import SmileSvg from "@/ui/icons/smile.svg"
import FolderOpenSvg from "@/ui/icons/folder-open.svg"
import BuildingOffice2Svg from "@/ui/icons/building-office-2.svg"

type ItemProps = {
  icon: ReactNode
  text: string
  subText: string
}

const ICON_PROPS = {
  width: 64,
  height: 64,
}

function MilestoneBannerItem({ icon, text, subText }: ItemProps) {
  return (
    <li className="flex">
      <div className="text-primary">
        { icon }
      </div>
      <div className="ml-4">
        <h6 className="text-4xl font-bold">{ text }</h6>
        <p className="font-thin">{ subText }</p>
      </div>
    </li>
  )
}

export default function MilestoneBanner() {
  return (
    <ul className="flex align-center justify-center px-8 py-16 bg-alternate gap-16 sm:flex-wrap">
      <MilestoneBannerItem
        icon={<BuildingOffice2Svg {...ICON_PROPS} />}
        text="2021"
        subText="Company established"
      />
      <MilestoneBannerItem
        icon={<FolderOpenSvg {...ICON_PROPS} />}
        text="400+"
        subText="Cases reviewed"
      />
      <MilestoneBannerItem
        icon={<SmileSvg {...ICON_PROPS} />}
        text="250"
        subText="Happy clients"
      />
    </ul>
  )
}