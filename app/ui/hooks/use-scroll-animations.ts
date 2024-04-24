import { useEffect } from "react"

const CLASSNAME_SECTION = process.env.NEXT_PUBLIC_PAGE_SECTION_CLASSNAME
const CLASSNAME_SECTION_ANIMATE = `${CLASSNAME_SECTION}-slide-in`
const CLASSNAME_SECTION_HIDDEN = `${CLASSNAME_SECTION}-hidden`
const INTERSECTION_THRESHOLD = 0.2

function animateHeadersOnScroll() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(CLASSNAME_SECTION_ANIMATE)
        entry.target.classList.remove(CLASSNAME_SECTION_HIDDEN)
        observer.unobserve(entry.target)
        return
      }
    })
  }, {
    threshold: INTERSECTION_THRESHOLD
  })

  const sections = document.querySelectorAll(`.${CLASSNAME_SECTION}`)
  sections.forEach(element => {
    element.classList.add(CLASSNAME_SECTION_HIDDEN)
    observer.observe(element)
  })

  return () => observer.disconnect()
}

export default function useScrollAnimations() {
  useEffect(animateHeadersOnScroll, [])
}
