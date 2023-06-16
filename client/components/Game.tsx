import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getWordByDifficultyLevel } from '../apis/apiClient'

function Game() {
  const { difficulty } = useParams()
  const [word, setWord] = useState('')
  const [maxTime, setMaxTime] = useState(120)
  let tries = 20
  const [foundLetters, setFoundLetters] = useState([] as string[])
  const [timeLeft, setTimeLeft] = useState(maxTime)
  const [completed, setCompleted] = useState(false)
  const [success, setSuccess] = useState(false)
  const [triesLeft, setTriesLeft] = useState(Math.max(tries, word.length))
  const intervalRef = useRef<NodeJS.Timer>()
  const alphabetButtons = useRef<HTMLDivElement>(null)

  const letters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ]

  const resetState = () => {
    tries = 3
    setMaxTime(120)
    setFoundLetters([])
    setTimeLeft(maxTime)
    setCompleted(false)
    setSuccess(false)
    setTriesLeft(Math.max(tries, word.length))
    enableAllLetterButtons()
  }

  function enableAllLetterButtons() {
    const parentDiv = alphabetButtons.current
    if (parentDiv) {
      for (const child of parentDiv.children) {
        child.disabled = false
      }
    }
  }

  function showEndMessage() {
    if (foundAllLetters()) {
      console.log('here')
      setSuccess(true)
    }
    console.log('completed')
    setCompleted(true)
  }

  function foundAllLetters(newArray: string[]) {
    const array = [...new Set(word.split(''))]
    const arrayLength = array.length
    // console.log(arrayLength)
    // console.log(foundLetters.length)
    // console.log(array)
    console.log(newArray)
    return newArray.length === arrayLength
  }

  function inWord(letter: string) {
    return word.toLowerCase().includes(letter)
  }

  function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const button = event.target as HTMLButtonElement
    const buttonValue = button.innerHTML
    if (!button.disabled && !word.split('').includes(buttonValue)) {
      setTriesLeft(triesLeft - 1)
    }
    button.disabled = true
    if (inWord(buttonValue)) setFoundLetters([...foundLetters, buttonValue])
    if (foundAllLetters([...foundLetters, buttonValue])) showEndMessage()
    console.log('foundLetters', foundLetters)
  }

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimeLeft((t) => t - 1)
    }, 1000)
    return () => clearInterval(intervalRef.current)
  }, [maxTime])

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

  useEffect(() => {
    async function fetchWord() {
      const wordResponse = await getWordByDifficultyLevel(difficulty)
      console.log(`Your word is ${wordResponse.body.word}`)
      setWord(wordResponse.body.word)
    }
    fetchWord()
  }, [])

  return (
    <>
      <div>
        {word.split('').map((letter: string, index: number) => {
          return (
            <div key={index}>
              {foundLetters.includes(letter.toLowerCase()) ? letter : '___'}
            </div>
          )
        })}
      </div>
      <div ref={alphabetButtons} className="space-x-1">
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
      <div>{timeLeft}</div>
      <div>Tries left: {triesLeft}</div>
      {completed && success && <div>Congratulations! You won!</div>}
      {completed && !success && <div>Too bad! Next time!</div>}
      {completed && <button onClick={resetState}>Play Again</button>}
    </>
  )
}

export default Game
