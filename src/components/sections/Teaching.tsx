import React from 'react'
import { FaLaptopCode, FaBrain, FaProjectDiagram, FaUserGraduate } from 'react-icons/fa'
import type { IconType } from 'react-icons'
import SectionTitle from '../ui/SectionTitle'
import Card from '../ui/Card'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { teaching } from '../../data/portfolioData'
import './Teaching.css'

const iconMap: Record<string, IconType> = { FaLaptopCode, FaBrain, FaProjectDiagram, FaUserGraduate }

export default function Teaching(): React.ReactElement {
  const sectionRef = useScrollAnimation()

  return (
    <section id="teaching" ref={sectionRef}>
      <div className="container">
        <SectionTitle title="강의" subtitle="Teaching" />
        <div className="teaching__grid">
          {teaching.map((cat, i) => {
            const Icon = iconMap[cat.icon]
            return (
              <Card key={i} className={`teaching__card scroll-animate delay-${i + 1}`} color={cat.color}>
                <div className="teaching__icon" style={{ color: cat.color }}>
                  {Icon && <Icon />}
                </div>
                <h3 className="teaching__category">{cat.category}</h3>
                <ul className="teaching__courses">
                  {cat.courses.map((course, j) => (
                    <li key={j} className="teaching__course">
                      <span className="teaching__dot" style={{ background: cat.color }} />
                      {course}
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
