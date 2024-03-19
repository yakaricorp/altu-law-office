import classNames from "classnames"
import React from "react"
import type { ReactNode } from "react"

type ItemProps = {
  className?: string
  icon: ReactNode
  title?: string
  description: string
}

const ICON_SIZE = 32

export default function IconTitleDescription({ icon, title, description, className }: ItemProps) {
  return (
    <li className={classNames(['flex relative', className])}>
      <div className="border-[1px] absolute text-primary border-primary rounded-full p-3">
        {
          React.Children.map([icon], child => {
            if (React.isValidElement(child)) {
              const iconProps = { width: ICON_SIZE, height: ICON_SIZE }
              return React.cloneElement(child, iconProps)
            }
            return child
          })
        }
      </div>
      <div className="ml-20">
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
            key={item.title}
            className={classNames(['my-10', item.className])}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />)
        )
      }
    </ul>
  )
}
