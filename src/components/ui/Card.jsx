import './Card.css'

export default function Card({ children, className = '', color, hoverable = true, ...props }) {
  return (
    <div
      className={`card ${hoverable ? 'card--hoverable' : ''} ${className}`}
      style={color ? { '--card-accent': color } : undefined}
      {...props}
    >
      {children}
    </div>
  )
}
