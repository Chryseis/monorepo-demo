import React from 'react'
import { formatDate } from '@monorepo/utils'

export interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
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

export interface DateDisplayProps {
  date: Date
}

export const DateDisplay: React.FC<DateDisplayProps> = ({ date }) => {
  return <div>格式化日期: {formatDate(date)}</div>
}
