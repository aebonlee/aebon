import { useEffect, useRef } from 'react'

export function useScrollAnimation(threshold: number = 0.15): React.RefObject<HTMLElement | null> {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    )

    const elements = node.querySelectorAll('.scroll-animate')
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [threshold])

  return ref
}
