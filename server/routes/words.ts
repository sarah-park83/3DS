import express from 'express'
import { getWordByDifficultyLevel } from '../db/db'

const router = express.Router()

// GET /api/v1/tasks
router.get('/:difficulty', async (req, res) => {
  try {
    const difficulty = parseInt(req.params.difficulty)
    const tasks = await getWordByDifficultyLevel(difficulty)
    res.json(tasks)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'There was an error trying to get the word' })
  }
})

export default router
