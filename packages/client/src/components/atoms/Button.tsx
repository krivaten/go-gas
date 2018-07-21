import * as React from 'react'

export interface ButtonProps {
  type?: string
  className?: string
  children?: string
  onClick?(event: React.MouseEvent<HTMLButtonElement>): void
}

export default function Button({ type, className = '', children, onClick }: ButtonProps) {
  return (
    <button className={`${className}`} type={type} onClick={onClick} data-testid='button'>
      {children}
    </button>
  )
}
