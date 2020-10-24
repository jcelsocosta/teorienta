import express from 'express'
const router = express.Router()

import { createForm } from '../controller/form'

router.post("/createForm", async (req, res) => {
    const answer = req.body.answer

    res.send(await createForm({ answer }))
})

export default router