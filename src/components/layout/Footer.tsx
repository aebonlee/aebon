import React from 'react'
import { FaGithub, FaEnvelope, FaHeart } from 'react-icons/fa'
import { personalInfo } from '../../data/portfolioData'
import './Footer.css'

export default function Footer(): React.ReactElement {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__brand">
            <span className="footer__name">{personalInfo.name}</span>
            <span className="footer__title">{personalInfo.title} / {personalInfo.subtitle}</span>
          </div>

          <div className="footer__links">
            <a href={`mailto:${personalInfo.email}`} aria-label="이메일" className="footer__link">
              <FaEnvelope />
            </a>
            <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="footer__link">
              <FaGithub />
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            Made with <FaHeart className="footer__heart" /> &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
