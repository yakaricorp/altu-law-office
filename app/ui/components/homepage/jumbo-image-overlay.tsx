'use client'

import { v4 as createId } from 'uuid' 

import Button from 'app/ui/components/core/button'
import { useState, useEffect, useId } from 'react'
import { font_playfair } from 'app/ui/fonts'
import { languages } from 'app/i18n/settings'
import { useTranslation } from 'app/i18n/client'

interface JumbotronSlidingItem {
  key: string;
  backgroundImage: string;
  title: string;
  description: string;
  button: {
    text: string;
    link: string;
  };
  next: JumbotronSlidingItem;
}

type JumbotronSlidingItemData = Omit<JumbotronSlidingItem, 'key' | 'next'>;

class CircularQueueNode implements JumbotronSlidingItem {
  key = createId()
  backgroundImage = ''
  title = ''
  description = ''
  button = {
    text: '',
    link: '',
  }
  next

  constructor(params: JumbotronSlidingItemData) {
    this.backgroundImage = params.backgroundImage || ''
    this.title = params.title || ''
    this.description = params.description || ''
    this.button = params.button || { text: '', link: '' }
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
  title: '0.title',
  description: '0.description',
  button: {
    text: '0.button',
    link: '',
  }
}).add({
  backgroundImage: 'pxfuel-2.jpg',
  title: '1.title',
  description: '1.description',
  button: {
    text: '1.button',
    link: '',
  }
}).add({
  backgroundImage: 'pxfuel.jpg',
  title: '2.title',
  description: '2.description',
  button: {
    text: '2.button',
    link: '',
  }
})

type Props = {
  id?: string;
}
export default function JumboImageOverlay({ id }: Props) {
  const [lng] = languages
  const { t } = useTranslation(lng)

  const [currentItem, setCurrentItem] = useState(itemsHead)

  useEffect(() => {
    setTimeout(() => {
      setCurrentItem(currentItem.next as CircularQueueNode)
    }, 6000)
  }, [currentItem])

  return (
    <div className="w-full h-screen relative" id={id}>
      <div
        className="w-full h-screen jtron absolute"
        style={{ backgroundImage: `url(/${currentItem.backgroundImage})` }}
      ></div>
      <div className="absolute bg-white px-12 py-10 mx-6 my-6 bottom-0 max-w-lg min-w-min anm" key={currentItem.key}>
        <h2 className={font_playfair.className + ' text-2xl mb-3 mobile-visible:whitespace-pre'}>{ t(`jumbotron-items.${currentItem.title}`) }</h2>
        <p className="text-md text-gray-600 mb-6">{ t(`jumbotron-items.${currentItem.description}`) }</p>
        <Button
          label={ t(`jumbotron-items.${currentItem.button.text}`) }
        ></Button>
      </div>
    </div>
  )
}
