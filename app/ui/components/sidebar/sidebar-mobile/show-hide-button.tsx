'use client'

import classNames from 'classnames'
import Image from 'next/image'
import { useState, useEffect } from 'react'

type Props = {
  className: string;
}
export default function ShowHideButton({ className}: Props) {

  const [isVisible, setVisible] = useState(false)

  function setMobileSidebarVisibilityBodyClass(isVisible: boolean) {
    if (isVisible) {
      document.body.classList.add('mobile-visible')
    } else {
      document.body.classList.remove('mobile-visible')
    }
  }

  useEffect(() => {
    setMobileSidebarVisibilityBodyClass(isVisible)
  }, [])

  function onClick() {
    const newVisibleState = !isVisible
    setVisible(newVisibleState)
    setMobileSidebarVisibilityBodyClass(newVisibleState)
  }

  return (
    <div
      className={classNames({
        [className]: true,
        'bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center': true
      })}
      onClick={onClick}
    >
      <Image
        alt="Menu"
        width={25}
        height={25}
        src={ isVisible ? '/icons/x-mark.svg' : '/icons/bars.svg' }
        />
    </div>
  )
}