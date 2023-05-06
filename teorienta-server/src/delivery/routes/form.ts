import express from 'express'
const router = express.Router()

import { createForm } from '../controller/form'
router.post("/form/createForm", async (req, res) => {
    const question = req.body.question
    const answer = req.body.answer
    
    res.send(await createForm({ question, answer  }))
})

export default router