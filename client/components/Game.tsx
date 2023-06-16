import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getWordByDifficultyLevel } from '../apis/apiClient'

function Game() {
  const tries = 5
  const { difficulty } = useParams<{ difficulty: string }>()
  const [word, setWord] = useState('')
  const [maxTime, setMaxTime] = useState(120)
  const [foundLetters, setFoundLetters] = useState([] as string[])
  const [timeLeft, setTimeLeft] = useState(maxTime)
  const [completed, setCompleted] = useState(false)
  const [success, setSuccess] = useState(false)
  const [triesLeft, setTriesLeft] = useState(Math.max(tries, word.length))
  const [catSize, setCatSize] = useState(80 / triesLeft)
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
    setMaxTime(120)
    setFoundLetters([])
    setTimeLeft(maxTime)
    setCompleted(false)
    setSuccess(false)
    setTriesLeft(5)
    enableAllLetterButtons()
    setCatSize(80 / triesLeft)
  }

  function enableAllLetterButtons() {
    const parentDiv = alphabetButtons.current
    if (parentDiv) {
      for (const child of parentDiv.children) {
        child.disabled = false
      }
    }
  }

  function showEndMessage(hasFound = false) {
    if (hasFound) {
      setSuccess(true)
    }
    setCompleted(true)
  }

  function inWord(letter: string) {
    return word.toLowerCase().includes(letter)
  }

  function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const button = event.target as HTMLButtonElement
    const buttonValue = button.innerHTML
    //Check that button is not disabled and that the letter isn't in the word
    if (!button.disabled && !word.split('').includes(buttonValue)) {
      setTriesLeft(triesLeft - 1)
      setCatSize(80 / triesLeft)
    }
    //Make it so the button can't be pushed again
    button.disabled = true
    //update the foundLetters array
    const newArray = [...foundLetters, buttonValue]
    if (inWord(buttonValue)) setFoundLetters(newArray)
    //Check to see if all the letters have been found
    if ([...new Set(word.split(''))].length === newArray.length)
      showEndMessage(true)
  }

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimeLeft((t) => t - 1)
    }, 1000)
    if (triesLeft <= 0 || completed) {
      console.log('2')
      showEndMessage()
      clearInterval(intervalRef.current)
    }
    if (timeLeft <= 0 || completed) {
      console.log('1')
      showEndMessage()
      clearInterval(intervalRef.current)
    }
    return () => clearInterval(intervalRef.current)
  }, [timeLeft])

  useEffect(() => {
    async function fetchWord() {
      const wordResponse = await getWordByDifficultyLevel(difficulty)
      console.log(`Your word is ${wordResponse.body.word}`)
      setWord(wordResponse.body.word)
    }
    fetchWord()
  }, [completed])

  const catStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: '0',
    left: '0',
    width: `${catSize}vw`,
    height: `${catSize}vh`,
    zIndex: -1,
    transition: 'width 0.5s, height 0.5s',
    background: 'url(/cat.png)',
    backgroundSize: 'cover',
  }

  return (
    <>
      {!completed && (
        <div className="letters">
          {word.split('').map((letter: string, index: number) => {
            return (
              <div key={index}>
                {foundLetters.includes(letter.toLowerCase()) ? letter : '___'}
              </div>
            )
          })}
        </div>
      )}
      {!completed && (
        <div ref={alphabetButtons} className="space-x-1">
          {letters.map((letter) => {
            return (
              <button
                key={letter}
                onClick={handleClick}
                className="letterbutton"
              >
                {letter}
              </button>
            )
          })}
        </div>
      )}
      <div>{timeLeft}</div>
      <div>Tries left: {triesLeft}</div>
      {completed && success && <div>Congratulations! You won!</div>}
      {completed && !success && <div>Too bad! Next time!</div>}
      {completed && <button onClick={resetState}>Play Again</button>}
      <div style={catStyle}></div>
    </>
  )
}

export default Game
