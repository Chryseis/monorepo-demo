import { useState } from 'react'
import { Button, DateDisplay } from '@monorepo/components'
import { sum } from '@monorepo/utils'

export default function HomePage() {
  const [total, setTotal] = useState<number | ''>('')

  return (
    <div>
      <h1>Monorepo Demo</h1>
      <DateDisplay date={new Date()} />
      <p>1 + 2 = {total}</p>
      <Button onClick={() => setTotal(sum(1, 2))}>点我</Button>
    </div>
  )
}
