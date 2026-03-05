import { FaLaptopCode, FaUsers, FaCertificate, FaChalkboardTeacher, FaAward, FaBriefcase } from 'react-icons/fa'
import SectionTitle from '../ui/SectionTitle'
import Card from '../ui/Card'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { aboutKeywords, aboutDescription } from '../../data/portfolioData'
import './About.css'

const iconMap = {
  FaLaptopCode, FaUsers, FaCertificate, FaChalkboardTeacher, FaAward, FaBriefcase,
}

export default function About() {
  const sectionRef = useScrollAnimation()

  return (
    <section id="about" ref={sectionRef}>
      <div className="container">
        <SectionTitle title="소개" subtitle="About Me" />

        <div className="about__grid">
          <div className="about__text scroll-animate">
            {aboutDescription.split('\n\n').map((para, i) => (
              <p key={i} className="about__paragraph">{para}</p>
            ))}
          </div>

          <div className="about__keywords">
            {aboutKeywords.map((kw, i) => {
              const Icon = iconMap[kw.icon]
              return (
                <Card key={i} className={`about__keyword scroll-animate delay-${i + 1}`} color={kw.color}>
                  <div className="about__keyword-icon" style={{ color: kw.color }}>
                    {Icon && <Icon />}
                  </div>
                  <span className="about__keyword-label">{kw.label}</span>
                </Card>
              )
            })}
          </div>
        </div>

        <div className="about__stats scroll-animate">
          <div className="about__stat">
            <span className="about__stat-number">26+</span>
            <span className="about__stat-label">년 경력</span>
          </div>
          <div className="about__stat">
            <span className="about__stat-number">20+</span>
            <span className="about__stat-label">자격증</span>
          </div>
          <div className="about__stat">
            <span className="about__stat-number">4</span>
            <span className="about__stat-label">정부 포상</span>
          </div>
          <div className="about__stat">
            <span className="about__stat-number">5+</span>
            <span className="about__stat-label">대학 출강</span>
          </div>
        </div>
      </div>
    </section>
  )
}
