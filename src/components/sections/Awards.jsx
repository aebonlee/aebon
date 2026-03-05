import { FaTrophy, FaMedal, FaAward, FaStar } from 'react-icons/fa'
import SectionTitle from '../ui/SectionTitle'
import Card from '../ui/Card'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { awards } from '../../data/portfolioData'
import './Awards.css'

const iconMap = { FaTrophy, FaMedal, FaAward, FaStar }

export default function Awards() {
  const sectionRef = useScrollAnimation()

  return (
    <section id="awards" ref={sectionRef}>
      <div className="container">
        <SectionTitle title="수상" subtitle="Awards & Honors" />
        <div className="awards__grid">
          {awards.map((award, i) => {
            const Icon = iconMap[award.icon]
            return (
              <Card key={i} className={`awards__card scroll-animate delay-${i + 1}`} color={award.color}>
                <div className="awards__icon" style={{ color: award.color }}>
                  {Icon && <Icon />}
                </div>
                <h3 className="awards__title">{award.title}</h3>
                <p className="awards__org">{award.organization}</p>
                <p className="awards__year">{award.year}</p>
                <p className="awards__desc">{award.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
