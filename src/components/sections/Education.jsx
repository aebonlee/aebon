import { FaGraduationCap } from 'react-icons/fa'
import SectionTitle from '../ui/SectionTitle'
import Card from '../ui/Card'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { education } from '../../data/portfolioData'
import './Education.css'

export default function Education() {
  const sectionRef = useScrollAnimation()

  return (
    <section id="education" ref={sectionRef}>
      <div className="container">
        <SectionTitle title="학력" subtitle="Education" />
        <div className="education__grid">
          {education.map((edu, i) => (
            <Card key={i} className={`education__card scroll-animate delay-${i + 1}`} color={edu.color}>
              <div className="education__icon" style={{ background: edu.color }}>
                <FaGraduationCap />
              </div>
              <div className="education__info">
                <h3 className="education__degree">{edu.degree}</h3>
                <p className="education__school">{edu.school}</p>
                <p className="education__field">{edu.field}</p>
                <div className="education__meta">
                  <span className="education__period">{edu.period}</span>
                  <span className="education__status" style={{ color: edu.color }}>{edu.status}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
