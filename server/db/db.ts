import connection from './connection'

export async function getWordByDifficultyLevel(
  difficulty: number,
  db = connection
) {
  const words = await db('words').where('difficulty', difficulty).select()
  return words[getRandomInt(0, words.length)]
}

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}
