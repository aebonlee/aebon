import { FaFilePdf, FaFileWord, FaExternalLinkAlt, FaDownload, FaCalendarAlt } from 'react-icons/fa'
import SectionTitle from '../ui/SectionTitle'
import Card from '../ui/Card'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { documents } from '../../data/portfolioData'
import './Documents.css'

const TYPE_CONFIG = {
  pdf: { icon: FaFilePdf, color: '#E74C3C', label: 'PDF' },
  doc: { icon: FaFileWord, color: '#2B579A', label: 'DOC' },
  link: { icon: FaExternalLinkAlt, color: '#0EA5E9', label: 'LINK' },
}

export default function Documents() {
  const sectionRef = useScrollAnimation()

  return (
    <section id="documents" ref={sectionRef}>
      <div className="container">
        <SectionTitle title="자료실" subtitle="Documents" />
        <div className="documents__grid">
          {documents.map((doc, i) => {
            const config = TYPE_CONFIG[doc.type] || TYPE_CONFIG.pdf
            const Icon = config.icon
            return (
              <Card
                key={doc.id}
                className={`documents__card scroll-animate delay-${Math.min(i + 1, 5)}`}
                color={config.color}
              >
                <div className="documents__icon-wrapper" style={{ background: `${config.color}15` }}>
                  <Icon className="documents__icon" style={{ color: config.color }} />
                </div>
                <div className="documents__info">
                  <h3 className="documents__title">{doc.title}</h3>
                  <p className="documents__description">{doc.description}</p>
                  <div className="documents__meta">
                    <span className="documents__date">
                      <FaCalendarAlt /> {doc.date}
                    </span>
                    <span className="documents__type-badge" style={{ color: config.color, borderColor: config.color }}>
                      {config.label}
                    </span>
                  </div>
                </div>
                <a href={doc.url} className="documents__download" aria-label={`${doc.title} 다운로드`}>
                  <FaDownload />
                </a>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
