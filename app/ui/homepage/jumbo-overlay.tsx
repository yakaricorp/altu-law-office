'use client'

import { Playfair_Display } from 'next/font/google'
import Button from '@/ui/core/button'
import { useState, useEffect } from 'react'
import { v4 as createId } from 'uuid'

const pfDisplay = Playfair_Display({ weight: '400', subsets: ['latin'] })

export default function JumboOverlay() {

  interface JumbotronSlidingItem {
    key: string;
    backgroundImage: string;
    title: string;
    description: string;
    next: JumbotronSlidingItem;
  }

  type JumbotronSlidingItemData = Omit<JumbotronSlidingItem, 'key' | 'next'>;

  class CircularQueueNode implements JumbotronSlidingItem {
    key = createId()
    backgroundImage = ''
    title = ''
    description = ''
    next

    constructor(params: JumbotronSlidingItemData) {
      this.backgroundImage = params.backgroundImage || ''
      this.title = params.title || ''
      this.description = params.description || ''
      this.next = this as JumbotronSlidingItem
    }

    add(params: JumbotronSlidingItemData) {
      const newNode = new CircularQueueNode(params)
      const head = this
      let cursor = head.next
      while (cursor.next.key !== head.key) {
        cursor = cursor.next
      }
      cursor.next = newNode
      newNode.next = head
      return this
    }
  }

  const itemsHead = new CircularQueueNode({
    backgroundImage: 'pxfuel.jpg',
    title: 'Reliable Legal Solution 1',
    description: 'Lorem ipsum dolor sit amet consectetur 1',
  }).add({
    backgroundImage: 'pxfuel-2.jpg',
    title: 'Reliable Legal Solution 2',
    description: 'Lorem ipsum dolor sit amet consectetur 2',
  }).add({
    backgroundImage: 'pxfuel.jpg',
    title: 'Reliable Legal Solution 3',
    description: 'Lorem ipsum dolor sit amet consectetur 3',
  }).add({
    backgroundImage: 'pxfuel-2.jpg',
    title: 'Reliable Legal Solution 4',
    description: 'Lorem ipsum dolor sit amet consectetur 4',
  })

  const [currentItem, setCurrentItem] = useState(itemsHead)

  useEffect(() => {
    setTimeout(() => {
      setCurrentItem(currentItem.next as CircularQueueNode)
    }, 6000)
  }, [currentItem])

  return (
    <div className="w-full h-screen relative">
      <div
        className="w-full h-screen jtron absolute"
        style={{ backgroundImage: `url(/${currentItem.backgroundImage})` }}
      ></div>
      <div className="absolute bg-white px-12 py-10 bottom-12 left-12 max-w-lg anm" key={currentItem.key}>
        <h2 className={pfDisplay.className + ' text-3xl mb-3'}>{ currentItem.title }</h2>
        <p className="text-lg text-gray-600 mb-6">{ currentItem.description }</p>
        <Button></Button>
      </div>
    </div>
  )
}