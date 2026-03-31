import React from 'react'
import { FaChevronDown, FaGithub, FaEnvelope } from 'react-icons/fa'
import ParticleBackground from '../ui/ParticleBackground'
import { personalInfo } from '../../data/portfolioData'
import { smoothScrollTo } from '../../utils/smoothScroll'
import './Hero.css'

export default function Hero(): React.ReactElement {
  return (
    <section id="hero" className="hero">
      <ParticleBackground />
      <div className="hero__content container">
        <div className="hero__badge">Welcome</div>
        <h1 className="hero__name">
          <span className="hero__greeting">안녕하세요,</span>
          <span className="hero__name-text">
            <span className="hero__name-highlight">{personalInfo.name}</span>입니다
          </span>
        </h1>
        <p className="hero__title">{personalInfo.title}</p>
        <p className="hero__subtitle">{personalInfo.subtitle}</p>
        <p className="hero__tagline">{personalInfo.tagline}</p>

        <div className="hero__actions">
          <button className="hero__btn hero__btn--primary" onClick={() => smoothScrollTo('about')}>
            더 알아보기
          </button>
          <button className="hero__btn hero__btn--secondary" onClick={() => smoothScrollTo('contact')}>
            연락하기
          </button>
        </div>

        <div className="hero__social">
          <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href={`mailto:${personalInfo.email}`} className="hero__social-link" aria-label="이메일">
            <FaEnvelope />
          </a>
        </div>
      </div>

      <button className="hero__scroll" onClick={() => smoothScrollTo('about')} aria-label="스크롤 다운">
        <FaChevronDown />
      </button>
    </section>
  )
}
