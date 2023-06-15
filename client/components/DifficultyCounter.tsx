import React, { useState } from 'react'

const DifficultyCounter: React.FC = () => {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleDecrement = () => {
    setCount(count - 1)
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>↑</button>
      <br></br>
      <button onClick={handleDecrement}>↓</button>
    </div>
  )
}

export default DifficultyCounter
