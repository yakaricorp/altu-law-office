import classNames from "classnames"
import type { ReactNode } from "react"
import { font_playfair } from "app/ui/fonts"

const ICON_SIZE = 32

type ItemProps = {
  id?: string
  className?: string
  IconComponent?: (props: any) => ReactNode
  title?: string
  description: string
}
export default function IconTitleDescription({
  IconComponent,
  title,
  description,
  className,
}: ItemProps) {
  return (
    <li className={classNames(['flex relative', className])}>
      {
        IconComponent &&
        (
          <div className="border-[1px] absolute text-primary border-primary rounded-full p-3">
            <IconComponent width={ICON_SIZE} height={ICON_SIZE}></IconComponent>
          </div>
        )
      }
      <div className={classNames({ 'ml-20': IconComponent })}>
        { title && <h6 className={classNames(['font-medium text-xl tracking-wider'])}>{ title }</h6> }
        <p>{ description }</p>
      </div>
    </li>
  )
}

type GroupProps = {
  className?: string
  items: ItemProps[]
}
export function IconTitleDescriptionList({ className, items }: GroupProps) {
  return (
    <ul>
      {
        items.map(item => (
          <IconTitleDescription
            key={item.id || item.title}
            className={classNames(['my-10', item.className])}
            IconComponent={item.IconComponent}
            title={item.title}
            description={item.description}
          />)
        )
      }
    </ul>
  )
}

type IconNumberOrderProps = {
  width: number
  height: number
}
export const iconNumberOrderRenderer = (count: number) => function IconNumberOrder({
  width,
  height,
}: IconNumberOrderProps
) {
  return (
    <div
      className={classNames([font_playfair.className, "relative text-center text-4xl leading-[0.6]"])}
      style={{ width, height }}
    >
      { count }
    </div>
  )
}
