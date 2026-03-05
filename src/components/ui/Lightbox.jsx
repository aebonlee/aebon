import { useEffect, useCallback } from 'react'
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './Lightbox.css'

export default function Lightbox({ items, currentIndex, onClose, onNavigate }) {
  const item = items[currentIndex]
  const hasPrev = currentIndex > 0
  const hasNext = currentIndex < items.length - 1

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft' && hasPrev) onNavigate(currentIndex - 1)
      if (e.key === 'ArrowRight' && hasNext) onNavigate(currentIndex + 1)
    },
    [onClose, onNavigate, currentIndex, hasPrev, hasNext],
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [handleKeyDown])

  if (!item) return null

  const colors = ['#1D4ED8', '#2563EB', '#3B82F6', '#0EA5E9', '#06B6D4', '#6366F1']
  const colorIndex = currentIndex % colors.length

  return (
    <div className="lightbox" onClick={onClose}>
      <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox__close" onClick={onClose} aria-label="닫기">
          <FaTimes />
        </button>

        {hasPrev && (
          <button
            className="lightbox__nav lightbox__nav--prev"
            onClick={() => onNavigate(currentIndex - 1)}
            aria-label="이전"
          >
            <FaChevronLeft />
          </button>
        )}

        <div className="lightbox__image-wrapper">
          {item.image ? (
            <img src={item.image} alt={item.title} className="lightbox__image" />
          ) : (
            <div
              className="lightbox__placeholder"
              style={{
                background: `linear-gradient(135deg, ${colors[colorIndex]}44, ${colors[(colorIndex + 1) % colors.length]}44)`,
              }}
            >
              <span className="lightbox__placeholder-text">{item.title}</span>
            </div>
          )}
        </div>

        <div className="lightbox__info">
          <span className="lightbox__category">{item.category}</span>
          <h3 className="lightbox__title">{item.title}</h3>
          {item.description && <p className="lightbox__description">{item.description}</p>}
          <span className="lightbox__counter">
            {currentIndex + 1} / {items.length}
          </span>
        </div>

        {hasNext && (
          <button
            className="lightbox__nav lightbox__nav--next"
            onClick={() => onNavigate(currentIndex + 1)}
            aria-label="다음"
          >
            <FaChevronRight />
          </button>
        )}
      </div>
    </div>
  )
}
