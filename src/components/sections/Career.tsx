import React from 'react'
import { FaBriefcase } from 'react-icons/fa'
import SectionTitle from '../ui/SectionTitle'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { career } from '../../data/portfolioData'
import './Career.css'

export default function Career(): React.ReactElement {
  const sectionRef = useScrollAnimation()

  return (
    <section id="career" ref={sectionRef}>
      <div className="container">
        <SectionTitle title="경력" subtitle="Career" />
        <div className="career__timeline">
          {career.map((item, i) => (
            <div key={i} className={`career__item scroll-animate delay-${Math.min(i + 1, 5)}`}>
              <div className="career__marker">
                <div className={`career__dot ${item.type === 'current' ? 'career__dot--active' : ''}`}>
                  <FaBriefcase />
                </div>
                {i < career.length - 1 && <div className="career__line" />}
              </div>
              <div className="career__content">
                <div className="career__header">
                  <h3 className="career__title">{item.title}</h3>
                  {item.type === 'current' && <span className="career__badge">현재</span>}
                </div>
                <p className="career__org">{item.organization}</p>
                <p className="career__period">{item.period}</p>
                <p className="career__desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
