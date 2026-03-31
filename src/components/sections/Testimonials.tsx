import React from 'react'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'
import SectionTitle from '../ui/SectionTitle'
import Card from '../ui/Card'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { testimonials } from '../../data/portfolioData'
import './Testimonials.css'

export default function Testimonials(): React.ReactElement {
  const sectionRef = useScrollAnimation()

  return (
    <section id="testimonials" ref={sectionRef}>
      <div className="container">
        <SectionTitle title="추천사" subtitle="Testimonials" />
        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <Card key={i} className={`testimonials__card scroll-animate delay-${i + 1}`}>
              <FaQuoteLeft className="testimonials__quote" />
              <p className="testimonials__text">{t.text}</p>
              <div className="testimonials__stars">
                {Array.from({ length: t.rating }, (_, j) => (
                  <FaStar key={j} className="testimonials__star" />
                ))}
              </div>
              <div className="testimonials__author">
                <div className="testimonials__avatar">{t.author[0]}</div>
                <div>
                  <p className="testimonials__name">{t.author}</p>
                  <p className="testimonials__role">{t.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
