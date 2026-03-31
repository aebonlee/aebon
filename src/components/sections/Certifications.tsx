import React from 'react'
import { FaGraduationCap, FaCertificate, FaMedal } from 'react-icons/fa'
import type { IconType } from 'react-icons'
import SectionTitle from '../ui/SectionTitle'
import Card from '../ui/Card'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { certifications } from '../../data/portfolioData'
import './Certifications.css'

const iconMap: Record<string, IconType> = { FaGraduationCap, FaCertificate, FaMedal }

export default function Certifications(): React.ReactElement {
  const sectionRef = useScrollAnimation()

  return (
    <section id="certifications" ref={sectionRef}>
      <div className="container">
        <SectionTitle title="자격증" subtitle="Certifications" />
        <div className="cert__grid">
          {certifications.map((cat, i) => {
            const Icon = iconMap[cat.icon]
            return (
              <Card key={i} className={`cert__card scroll-animate delay-${i + 1}`} color={cat.color}>
                <div className="cert__header">
                  <div className="cert__icon" style={{ background: cat.color }}>
                    {Icon && <Icon />}
                  </div>
                  <h3 className="cert__category">{cat.category}</h3>
                  <span className="cert__count">{cat.items.length}개</span>
                </div>
                <ul className="cert__list">
                  {cat.items.map((item, j) => (
                    <li key={j} className="cert__item">
                      <span className="cert__bullet" style={{ background: cat.color }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
