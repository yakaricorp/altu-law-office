'use client'

import 'animate.css'
import classNames from 'classnames'
import { useState } from "react";
import { font_playfair } from 'app/ui/fonts'
import BriefcaseSvg from '@/ui/icons/briefcase.svg'

import type { AnimationTargetProps } from 'app/lib/definitions'

type Props = {
  className?: string;
  title: string;
  description: string;
} & AnimationTargetProps
export default function IconHeaderWithSlidingText({ title, description, className, animationTarget }: Props) {

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
    <div className={classNames([
      'transition-all border-b-4 border-white hover:border-b-4 hover:border-primary overflow-clip bg-white pt-12 pb-4 px-4 max-w-sm cursor-default',
      className,
    ])}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      data-animation-target={animationTarget}
    >
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
            { title }
          </h4>
          <p className={classNames([
            'transition-all -mb-12 opacity-0',
            paragraphClasses.join(' '),
          ])}>
            { description }
          </p>
        </div>
      </div>
    </div>
  );
}
