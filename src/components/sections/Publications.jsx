import { FaFileAlt, FaMicrophone } from 'react-icons/fa'
import SectionTitle from '../ui/SectionTitle'
import Card from '../ui/Card'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { publications } from '../../data/portfolioData'
import './Publications.css'

export default function Publications() {
  const sectionRef = useScrollAnimation()

  return (
    <section id="publications" ref={sectionRef}>
      <div className="container">
        <SectionTitle title="논문 / 발표" subtitle="Publications & Presentations" />
        <div className="pub__grid">
          {publications.map((group, i) => (
            <Card key={i} className={`pub__card scroll-animate delay-${i + 1}`} color={i === 0 ? '#6C63FF' : '#FF6584'}>
              <div className="pub__header">
                <div className="pub__icon" style={{ background: i === 0 ? '#6C63FF' : '#FF6584' }}>
                  {i === 0 ? <FaFileAlt /> : <FaMicrophone />}
                </div>
                <h3 className="pub__type">{group.type}</h3>
              </div>
              <div className="pub__items">
                {group.items.map((item, j) => (
                  <div key={j} className="pub__item">
                    <h4 className="pub__title">{item.title}</h4>
                    <p className="pub__meta">
                      {item.journal || item.venue} · {item.year}
                    </p>
                    {item.authors && <p className="pub__authors">{item.authors}</p>}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
