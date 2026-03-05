import './SectionTitle.css'

export default function SectionTitle({ title, subtitle, color }) {
  return (
    <div className="section-title scroll-animate">
      <h2 className="section-title__heading">
        <span className="section-title__accent" style={{ background: color || 'var(--gradient-primary)' }} />
        {title}
      </h2>
      {subtitle && <p className="section-title__subtitle">{subtitle}</p>}
    </div>
  )
}
