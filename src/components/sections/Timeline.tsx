import React from 'react'
import SectionTitle from '../ui/SectionTitle'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { timeline } from '../../data/portfolioData'
import './Timeline.css'

export default function Timeline(): React.ReactElement {
  const sectionRef = useScrollAnimation()

  return (
    <section id="timeline" ref={sectionRef}>
      <div className="container">
        <SectionTitle title="연혁" subtitle="Timeline" />
        <div className="timeline">
          {timeline.map((item, i) => (
            <div key={i} className={`timeline__item ${i % 2 === 0 ? 'timeline__item--left' : 'timeline__item--right'} scroll-animate delay-${Math.min(i % 5 + 1, 5)}`}>
              <div className="timeline__content">
                <span className="timeline__year" style={{ color: item.color }}>{item.year}</span>
                <p className="timeline__event">{item.event}</p>
              </div>
              <div className="timeline__dot" style={{ background: item.color }} />
            </div>
          ))}
          <div className="timeline__line" />
        </div>
      </div>
    </section>
  )
}
