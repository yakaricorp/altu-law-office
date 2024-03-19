'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function ScalingImageWithHeading({
  style,
  className,
  image,
  heading,
}: {
  image: string,
  heading: string,
  style?: React.CSSProperties,
  className?: string,
}) {
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
    <div className={'relative min-w-[190px] ' + className} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} style={style}>
      <div className="pb-7">
        <div className="relative overflow-hidden">
          <img className={'w-full aspect-square object-cover duration-700 ' + imageClasses.join(' ')} src={image}></img>
          <div className="absolute transition duration-700 left-0 top-0 w-full min-h-full bg-black opacity-0 hover:opacity-30"></div>
        </div>
      </div>
      <div className="absolute w-full text-center bottom-0 text-2xl z-1">
        <div className={ 'mx-6 px-3 py-4 bg-white shadow-lg transition duration-300 ' + titleClasses.join(' ') }>{ heading }</div>
      </div>
    </div>
  )
}
