import React from 'react'
import './Card.css'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  color?: string
  hoverable?: boolean
}

export default function Card({ children, className = '', color, hoverable = true, ...props }: CardProps): React.ReactElement {
  return (
    <div
      className={`card ${hoverable ? 'card--hoverable' : ''} ${className}`}
      style={color ? { '--card-accent': color } as React.CSSProperties : undefined}
      {...props}
    >
      {children}
    </div>
  )
}
