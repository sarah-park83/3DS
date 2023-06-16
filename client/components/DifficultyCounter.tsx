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
    <div className="container">
      <p>Difficulty Level: {count}
      <div className="arrows">
      <button className="arrowbutton" onClick={handleIncrement}>↑</button>
      <button className="arrowbutton" onClick={handleDecrement}>↓</button>
      </div>
      </p>
      <Link to={`/gamepage/${count}`}>
      <button className="playbutton">Start Game</button>
      </Link>
    </div>

    
  )
}

export default DifficultyCounter
