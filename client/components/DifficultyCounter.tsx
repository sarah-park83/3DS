import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const DifficultyCounter: React.FC = () => {
  const [count, setCount] = useState(1)

  const handleIncrement = () => {
    if (count < 3) {
      setCount(count + 1)
    }
  }

  const handleDecrement = () => {
    if (count > 1) {

      setCount(count - 1)
    }
  }

  return (
    <div>
      <p>Difficulty Level: {count}
      <button onClick={handleIncrement}>↑</button>
      <button onClick={handleDecrement}>↓</button>
      </p>
      <br></br>
      <Link to={`/gamepage/${count}`}>
      <button>Start Game</button>
      </Link>
    </div>

    
  )
}

export default DifficultyCounter
