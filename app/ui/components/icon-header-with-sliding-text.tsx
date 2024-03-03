'use client'

import 'animate.css'
import classNames from 'classnames'
import { useState } from "react";
import { font_playfair } from '@/ui/fonts'
import BriefcaseSvg from '@/ui/icons/briefcase.svg'

// TODO: get icon as prop
export default function IconHeaderWithSlidingText() {

  const [imageClasses, setImageClasses] = useState<string[]>([])
  const [headerClasses, setHeaderClasses] = useState<string[]>([])
  const [paragraphClasses, setParagraphClasses] = useState<string[]>([])

  function onMouseOver() {
    setImageClasses(['-translate-y-24']);
    setHeaderClasses(['-translate-y-24']);
    setParagraphClasses(['-translate-y-24', 'opacity-100']);
  }

  function onMouseLeave() {
    setImageClasses([]);
    setHeaderClasses([]);
    setParagraphClasses([]);
  }

  return (
    <div className="transition-all border-b-4 border-white hover:border-b-4 hover:border-primary overflow-clip bg-white pt-12 pb-6 px-8 max-w-md cursor-default" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
      <div>
        <div className={'transition-all ' + imageClasses.join(' ')}>
          <BriefcaseSvg
            className="mx-auto text-primary"
            width={58}
            height={58}
            alt="briefcase"
          />
        </div>
        <div className="text-center">
          <h4 className={classNames([
            font_playfair.className,
            'transition-all text-2xl my-3',
            headerClasses.join(' ')
          ])}>
            Business Law
          </h4>
          <p className={classNames([
            'transition-all -mb-12 opacity-0',
            paragraphClasses.join(' '),
          ])}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima pariatur ex, quae corporis sequi doloribus.
          </p>
        </div>
      </div>
    </div>
  );
}
