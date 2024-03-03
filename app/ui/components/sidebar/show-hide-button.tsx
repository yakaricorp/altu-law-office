'use client'

import classNames from 'classnames'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import XMarkSvg from '@/ui/icons/x-mark.svg'
import BarsSvg from '@/ui/icons/bars.svg'

type Props = {
  className: string;
}
export default function ShowHideButton({ className}: Props) {

  const [isVisible, setVisible] = useState(false)

  function scrollHandler() {
    console.log('scroll', isVisible)
    if (isVisible) {
      // console.log('toggleVisible')
      toggleVisible(false)
    }
  }

  function setMobileSidebarVisibilityBodyClass(isVisible: boolean) {
    if (isVisible) {
      document.body.classList.add('mobile-visible')
    } else {
      document.body.classList.remove('mobile-visible')
    }
  }

  useEffect(() => {
    setMobileSidebarVisibilityBodyClass(isVisible)
    // document.addEventListener('scroll', scrollHandler)

    // return () => {
    //   document.removeEventListener('scroll', scrollHandler)
    // }
  }, [])

  function toggleVisible(forceStateTo?: boolean) {
    let newVisibleState = !isVisible
    if (typeof forceStateTo === 'boolean') {
      newVisibleState = forceStateTo
    }
    setVisible(newVisibleState)
    setMobileSidebarVisibilityBodyClass(newVisibleState)
  }

  return (
    <div
      className={classNames({
        [className]: true,
        'bg-primary text-secondary rounded-full w-12 h-12 flex items-center justify-center': true
      })}
      onClick={() => toggleVisible()}
    >
      {
        isVisible
        ? <XMarkSvg alt="Menu" width={25} height={25}></XMarkSvg>
        : <BarsSvg alt="Menu" width={25} height={25}></BarsSvg>
      }
    </div>
  )
}