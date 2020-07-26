import React, { useState } from 'react'
import './App.css'
import Balance from './components/Balance'
import ExpenseHistory from './components/ExpenseHistory'
import InputElement from './components/InputElement'

function App() {
  const [expenses, setExpenses] = useState([
    {
      name: 'sushi',
      cost: 30,
    },
    {
      name: 'massage thing',
      cost: 99,
    },
  ])

  const handleSetExpenses = (expense) => {
    console.log('expense', expense)
    let tempArr = [...expenses]
    tempArr.push(expense)
    setExpenses(tempArr)
  }

  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      <Balance expenses={expenses} />
      <ExpenseHistory expenses={expenses} />
      <InputElement handleSetExpenses={handleSetExpenses} />
    </div>
  )
}

export default App
