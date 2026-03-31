import React, { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import './ScrollToTop.css'

export default function ScrollToTop(): React.ReactElement {
  const [visible, setVisible] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = (): void => {
      setVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      className={`scroll-to-top ${visible ? 'scroll-to-top--visible' : ''}`}
      onClick={scrollToTop}
      aria-label="맨 위로 스크롤"
    >
      <FaArrowUp />
    </button>
  )
}
