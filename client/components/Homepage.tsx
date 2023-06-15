import PlayGameButton from './PlayGameButton'
import DifficultyCounter from './DifficultyCounter'

export default function Homepage() {
  return (
    <div>
      <div>
        <PlayGameButton />
        <DifficultyCounter />
      </div>
      <header className="header">
        <h1>My Collection</h1>
      </header>
      <section className="main">{/* add your code here */}</section>
    </div>
  )
}
