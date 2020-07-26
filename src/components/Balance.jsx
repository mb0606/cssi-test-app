import React, { useState } from 'react'

export default function Balance({ expenses }) {
  const [total, setTotal] = useState(0)

  let currentTotal = expenses.reduce((acc, currentValue) => {
    console.log('in function', acc, currentValue.cost)
    return acc + currentValue.cost
  }, total)
  console.log('currentTotal', currentTotal)
  return (
    <div>
      <h1>Your Balance</h1>
      <h2>500</h2>
    </div>
  )
}
