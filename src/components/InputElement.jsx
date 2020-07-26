import React, { useState } from 'react'

export default function InputElement({ handleSetExpenses }) {
  const [name, setName] = useState('')
  const [cost, setCost] = useState('')
  const handleSubmit = (event) => {
    event.preventDefault()
    handleSetExpenses({ name, cost })
  }

  //   making a comment

  return (
    <div>
      <h1>Add New Transaction</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(event) => {
            console.log(event)
            setName(event.target.value)
          }}
        />
        <input value={cost} onChange={(event) => setCost(event.target.value)} />
        <button>Add Transaction</button>
      </form>
    </div>
  )
}
