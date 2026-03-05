import { FaCamera } from 'react-icons/fa'
import SectionTitle from '../ui/SectionTitle'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { galleryItems } from '../../data/portfolioData'
import './Gallery.css'

export default function Gallery() {
  const sectionRef = useScrollAnimation()
  const colors = ['#6C63FF', '#FF6584', '#00C9A7', '#FFC75F', '#4ECDC4', '#A855F7']

  return (
    <section id="gallery" ref={sectionRef}>
      <div className="container">
        <SectionTitle title="갤러리" subtitle="Gallery" />
        <div className="gallery__grid">
          {galleryItems.map((item, i) => (
            <div key={item.id} className={`gallery__item scroll-animate delay-${Math.min(i + 1, 5)}`}>
              <div className="gallery__placeholder" style={{ background: `linear-gradient(135deg, ${colors[i % colors.length]}33, ${colors[(i + 1) % colors.length]}33)` }}>
                <FaCamera className="gallery__icon" style={{ color: colors[i % colors.length] }} />
                <span className="gallery__label">{item.title}</span>
              </div>
              <div className="gallery__overlay">
                <span className="gallery__category">{item.category}</span>
                <span className="gallery__title">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
