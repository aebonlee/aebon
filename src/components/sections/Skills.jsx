import { FaCode, FaChalkboardTeacher, FaFlask, FaTasks } from 'react-icons/fa'
import SectionTitle from '../ui/SectionTitle'
import Card from '../ui/Card'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { skills } from '../../data/portfolioData'
import './Skills.css'

const iconMap = { FaCode, FaChalkboardTeacher, FaFlask, FaTasks }

export default function Skills() {
  const sectionRef = useScrollAnimation()

  return (
    <section id="skills" ref={sectionRef}>
      <div className="container">
        <SectionTitle title="역량" subtitle="Skills & Expertise" />
        <div className="skills__grid">
          {skills.map((cat, i) => {
            const Icon = iconMap[cat.icon]
            return (
              <Card key={i} className={`skills__card scroll-animate delay-${i + 1}`} color={cat.color}>
                <div className="skills__header">
                  <div className="skills__icon" style={{ color: cat.color }}>
                    {Icon && <Icon />}
                  </div>
                  <h3 className="skills__category">{cat.category}</h3>
                </div>
                <div className="skills__bars">
                  {cat.items.map((skill, j) => (
                    <div key={j} className="skills__bar-item">
                      <div className="skills__bar-info">
                        <span className="skills__bar-name">{skill.name}</span>
                        <span className="skills__bar-level">{skill.level}%</span>
                      </div>
                      <div className="skills__bar-track">
                        <div
                          className="skills__bar-fill"
                          style={{ width: `${skill.level}%`, background: cat.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
