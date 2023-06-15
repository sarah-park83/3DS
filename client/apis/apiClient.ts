import request from 'superagent'

export function getWordByDifficultyLevel(difficulty: number) {
  return request.get(`/api/v1/words/${difficulty}`)
}
