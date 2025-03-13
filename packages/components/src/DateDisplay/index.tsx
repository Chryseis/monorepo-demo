import './index.less'
import React from 'react'
import { formatDate } from '@monorepo/utils'

export interface DateDisplayProps {
  date: Date
}

const DateDisplay: React.FC<DateDisplayProps> = ({ date }) => {
  return <div>格式化日期: {formatDate(date)}</div>
}

export default DateDisplay
