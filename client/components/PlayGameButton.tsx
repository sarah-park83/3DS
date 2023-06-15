import { Link } from 'react-router-dom'

export default function PlayGameButton() {
  return (
    <div>
      <Link to="/whatevertheurlis">
        <button>Start Game</button>
      </Link>
    </div>
  )
}
