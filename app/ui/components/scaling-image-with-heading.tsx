'use client'

import { useState } from 'react'
import classNames from 'classnames'

import type { AnimationTargetProps } from '@/lib/definitions'

type Props = {
  image: string;
  heading: string;
  style?: React.CSSProperties;
  className?: string;
} & AnimationTargetProps

export default function ScalingImageWithHeading({
  image,
  heading,
  style,
  animationTarget,
  className,
}: Props) {
  const [titleClasses, setTitleClasses] = useState<string[]>([])
  const [imageClasses, setImageClasses] = useState<string[]>([])

  function onMouseOver() {
    setTitleClasses(['-translate-y-14'])
    setImageClasses(['scale-110'])
  }

  function onMouseLeave() {
    setTitleClasses([])
    setImageClasses([])
  }

  return (
    <div className={classNames(['relative min-w-[240px] sm:min-w-[320px] sm:max-w-[320px]', className])} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} style={style} data-animation-target={animationTarget}>
      <div className="pb-7">
        <div className="relative overflow-hidden">
          <img className={classNames([
            'w-full aspect-square object-cover duration-700',
            ...imageClasses,
          ])} src={image}></img>
          <div className="absolute transition duration-700 left-0 top-0 w-full min-h-full bg-black opacity-0 hover:opacity-30"></div>
        </div>
      </div>
      <div className="absolute w-full text-center bottom-0 text-2xl z-1">
        <div className={classNames([
          'mx-6 px-3 py-4 bg-white shadow-lg transition duration-300',
          ...titleClasses,
        ])}>
          { heading }
        </div>
      </div>
    </div>
  )
}
