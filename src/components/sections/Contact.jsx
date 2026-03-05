import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaGlobe } from 'react-icons/fa'
import SectionTitle from '../ui/SectionTitle'
import Card from '../ui/Card'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { personalInfo } from '../../data/portfolioData'
import './Contact.css'

export default function Contact() {
  const sectionRef = useScrollAnimation()

  const contactItems = [
    { icon: <FaEnvelope />, label: '이메일', value: personalInfo.email, href: `mailto:${personalInfo.email}`, color: '#1D4ED8' },
    { icon: <FaMapMarkerAlt />, label: '위치', value: personalInfo.location, href: null, color: '#2563EB' },
    { icon: <FaGithub />, label: 'GitHub', value: 'github.com/aebonlee', href: personalInfo.social.github, color: '#0EA5E9' },
    { icon: <FaGlobe />, label: '웹사이트', value: 'aebon.dreamitbiz.com', href: personalInfo.website, color: '#3B82F6' },
  ]

  return (
    <section id="contact" ref={sectionRef}>
      <div className="container">
        <SectionTitle title="연락처" subtitle="Contact" />

        <div className="contact__grid">
          {contactItems.map((item, i) => (
            <Card key={i} className={`contact__card scroll-animate delay-${i + 1}`} color={item.color}>
              <div className="contact__icon" style={{ color: item.color }}>
                {item.icon}
              </div>
              <h3 className="contact__label">{item.label}</h3>
              {item.href ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="contact__value contact__value--link">
                  {item.value}
                </a>
              ) : (
                <p className="contact__value">{item.value}</p>
              )}
            </Card>
          ))}
        </div>

        <div className="contact__cta scroll-animate">
          <h3 className="contact__cta-title">함께 일해요!</h3>
          <p className="contact__cta-desc">교육, 컨설팅, 프로젝트 협업 등 언제든 연락해주세요.</p>
          <a href={`mailto:${personalInfo.email}`} className="contact__cta-btn">
            <FaEnvelope /> 이메일 보내기
          </a>
        </div>
      </div>
    </section>
  )
}
