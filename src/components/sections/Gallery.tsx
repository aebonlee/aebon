import React, { useState, useMemo } from 'react'
import { FaCamera } from 'react-icons/fa'
import SectionTitle from '../ui/SectionTitle'
import Lightbox from '../ui/Lightbox'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { galleryItems } from '../../data/portfolioData'
import './Gallery.css'

const CATEGORIES: string[] = ['전체', '상장', '자격증', '활동', '강의']
const COLORS: string[] = ['#1D4ED8', '#2563EB', '#3B82F6', '#0EA5E9', '#06B6D4', '#6366F1']

export default function Gallery(): React.ReactElement {
  const sectionRef = useScrollAnimation()
  const [activeCategory, setActiveCategory] = useState<string>('전체')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filtered = useMemo(
    () =>
      activeCategory === '전체'
        ? galleryItems
        : galleryItems.filter((item) => item.category === activeCategory),
    [activeCategory],
  )

  const openLightbox = (filteredIdx: number): void => setLightboxIndex(filteredIdx)
  const closeLightbox = (): void => setLightboxIndex(null)

  return (
    <section id="gallery" ref={sectionRef}>
      <div className="container">
        <SectionTitle title="갤러리" subtitle="Gallery" />

        <div className="gallery__tabs scroll-animate delay-1">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`gallery__tab ${activeCategory === cat ? 'gallery__tab--active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="gallery__grid">
          {filtered.map((item, i) => (
            <div
              key={item.id}
              className={`gallery__item scroll-animate delay-${Math.min(i + 1, 5)}`}
              onClick={() => openLightbox(i)}
            >
              {item.image ? (
                <img src={item.image} alt={item.title} className="gallery__image" />
              ) : (
                <div
                  className="gallery__placeholder"
                  style={{
                    background: `linear-gradient(135deg, ${COLORS[i % COLORS.length]}33, ${COLORS[(i + 1) % COLORS.length]}33)`,
                  }}
                >
                  <FaCamera
                    className="gallery__icon"
                    style={{ color: COLORS[i % COLORS.length] }}
                  />
                  <span className="gallery__label">{item.title}</span>
                </div>
              )}
              <div className="gallery__overlay">
                <span className="gallery__category">{item.category}</span>
                <span className="gallery__title">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          items={filtered}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onNavigate={setLightboxIndex}
        />
      )}
    </section>
  )
}
