'use client'

import { Playfair_Display } from 'next/font/google'
import Button from '@/components/button'
import { useState, useEffect } from 'react'


const pfDisplay = Playfair_Display({ weight: '400', subsets: ['latin'] })

export default function JumboOverlay() {
  const [items] = useState(['asdf', 'qwer'])
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setIdx((idx + 1) % items.length)
    }, 6000)
  }, [idx])

  return (
    <div className="w-full h-screen relative">
      <div className="w-full h-screen jtron absolute"></div>
      <div className="absolute bg-white px-12 py-10 bottom-12 left-12 max-w-lg anm" key={items[idx]}>
        <h2 className={pfDisplay.className + ' text-3xl mb-3'}>Reliable Legal Solution</h2>
        <p className="text-lg text-gray-600 mb-6">Lorem ipsum dolor sit amet consectetur { items[idx] }</p>
        <Button></Button>
      </div>
    </div>
  )
}
