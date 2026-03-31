import React from 'react'
import { FaGlobe, FaServer, FaChartBar, FaBook, FaDesktop, FaClipboardCheck } from 'react-icons/fa'
import type { IconType } from 'react-icons'
import SectionTitle from '../ui/SectionTitle'
import Card from '../ui/Card'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { projects } from '../../data/portfolioData'
import './Projects.css'

const iconMap: Record<string, IconType> = { FaGlobe, FaServer, FaChartBar, FaBook, FaDesktop, FaClipboardCheck }

export default function Projects(): React.ReactElement {
  const sectionRef = useScrollAnimation()

  return (
    <section id="projects" ref={sectionRef}>
      <div className="container">
        <SectionTitle title="프로젝트" subtitle="Projects" />
        <div className="projects__grid">
          {projects.map((project, i) => {
            const Icon = iconMap[project.icon]
            return (
              <Card key={i} className={`projects__card scroll-animate delay-${Math.min(i + 1, 5)}`} color={project.color}>
                <div className="projects__icon" style={{ background: project.color }}>
                  {Icon && <Icon />}
                </div>
                <h3 className="projects__title">{project.title}</h3>
                <p className="projects__desc">{project.description}</p>
                <div className="projects__tags">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="projects__tag" style={{ borderColor: project.color, color: project.color }}>
                      {tag}
                    </span>
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
