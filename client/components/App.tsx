import DifficultyCounter from './DifficultyCounter'
import PlayGameButton from './PlayGameButton'

function App() {
  return (
    <>
      <div className="navbar">
        <DifficultyCounter />
        <PlayGameButton />
      </div>
      <header className="header">
        <h1>My Collection</h1>
      </header>
      <section className="main">{/* add your code here */}</section>
    </>
  )
}

export default App
