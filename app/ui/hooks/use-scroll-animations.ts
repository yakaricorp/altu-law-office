import 'animate.css'
import { useEffect } from "react"

import type { AnimationTarget } from 'app/lib/definitions'

const INTERSECTION_THRESHOLD = 0.2

type AnimationTargetCallback = (entry: IntersectionObserverEntry) => void
type ObserverCallbackMap = Record<AnimationTarget, AnimationTargetCallback>

function createObserver(observerCallbackMap: ObserverCallbackMap) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = (entry.target as HTMLElement)
        const animationCallbackFnName = target.dataset.animationTarget as AnimationTarget
        if (animationCallbackFnName in observerCallbackMap) {
          observerCallbackMap[animationCallbackFnName](entry)
        }
        observer.unobserve(target)
      }
    })
  }, {
    threshold: INTERSECTION_THRESHOLD
  })
  return observer
}

function addInitialAnimateClasses(element: Element) {
  element.classList.add('opacity-0')
  element.classList.add('animate__animated')
}

function registerElementsToObserver(observer: IntersectionObserver) {
  const useAnimElements = document.querySelectorAll('.use-anim')
  useAnimElements.forEach(elem => {
    addInitialAnimateClasses(elem)
    observer.observe(elem)
  })
}

export default function useScrollAnimations() {
  let tilesWaitingToBeAnimated = 0 // add some delay between tile animations
  let cardsWaitingToBeAnimated = 0 // add some delay between tile animations
  useEffect(() => {
    const observer = createObserver({
      tile(entry) {
        setTimeout(() => {
          entry.target.classList.add('animate__fadeInUp')
          entry.target.classList.remove('opacity-0')
        }, tilesWaitingToBeAnimated++ * 150)
      },
      card(entry) {
        setTimeout(() => {
          entry.target.classList.add('animate__slideInLeft')
          entry.target.classList.remove('opacity-0')
        }, cardsWaitingToBeAnimated++ * 150)
      },
      header(entry) {
        entry.target.classList.add('animate__slideInLeft')
        entry.target.classList.remove('opacity-0')
        observer.unobserve(entry.target)
      },
      subheader(entry) {
        entry.target.classList.add('animate__slideInLeft')
        entry.target.classList.remove('opacity-0')
        observer.unobserve(entry.target)
      },
    })

    registerElementsToObserver(observer)
    return () => observer.disconnect()
  }, [])
}
