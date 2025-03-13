import './index.less'
import React from 'react'

export interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
}
const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '8px 16px',
        backgroundColor: '#1890ff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
      }}
    >
      {children}
    </button>
  )
}

export default Button
