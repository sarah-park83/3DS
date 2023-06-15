import { useEffect, useRef, useState } from 'react'

function Game() {
  const maxTime = 120
  const word = 'hello'
  const tries = 3
  const [foundLetters, setFoundLetters] = useState([] as string[])
  const [timeLeft, setTimeLeft] = useState(maxTime)
  const [completed, setCompleted] = useState(false)
  const [success, setSuccess] = useState(false)
  const [triesLeft, setTriesLeft] = useState(tries)
  const intervalRef = useRef<NodeJS.Timer>()

  const letters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ]

  function showEndMessage() {
    if (foundAllLetters()) {
      console.log('here')
      setSuccess(true)
    }
    console.log('completed')
    setCompleted(true)
  }

  function foundAllLetters() {
    const arrayLength = [...new Set(word.split(''))].length
    return foundLetters.length === arrayLength
  }

  function inWord(letter: string) {
    return word.toUpperCase().includes(letter)
  }

  function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const button = event.target as HTMLButtonElement
    const buttonValue = button.innerHTML
    if (!button.disabled) setTriesLeft(triesLeft - 1)
    button.disabled = true
    if (inWord(buttonValue)) setFoundLetters([...foundLetters, buttonValue])
    if (foundAllLetters()) setCompleted(true)
  }

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimeLeft((t) => t - 1)
    }, 1000)
    return () => clearInterval(intervalRef.current)
  }, [])

  useEffect(() => {
    if (timeLeft <= 0) {
      clearInterval(intervalRef.current)
      showEndMessage()
    }
  }, [timeLeft])

  useEffect(() => {
    if (triesLeft <= 0) {
      clearInterval(intervalRef.current)
      showEndMessage()
    }
  }, [triesLeft])

  return (
    <>
      <div className="space-x-1">
        {letters.map((letter) => {
          return (
            <button
              key={letter}
              onClick={handleClick}
              className="border rounded-sm w-6 hover:bg-slate-600 hover:text-white disabled:opacity-50 disabled:bg-slate-800"
            >
              {letter}
            </button>
          )
        })}
      </div>
      <div>
        {word.split('').map((letter, index) => {
          return (
            <div key={index}>
              {foundLetters.includes(letter.toUpperCase()) ? letter : '___'}
            </div>
          )
        })}
      </div>
      <div>{timeLeft}</div>
      <div>Tries left: {triesLeft}</div>
      {completed && success && <div>Congratulations! You won!</div>}
      {completed && !success && <div>Too bad! Next time!</div>}
    </>
  )
}

export default Game
