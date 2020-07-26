import React from 'react'

export default function ExpenseHistory({ expenses }) {
  console.log('expenses', expenses)
  return (
    <div>
      <h1>History</h1>
      <ul>
        {expenses &&
          expenses.map((expense) => {
            return (
              <li>
                name: {expense.name} ------ cost: {expense.cost}{' '}
              </li>
            )
          })}
      </ul>
    </div>
  )
}

//   {
//     name: 'sushi',
//     cost: 30,
//   }
