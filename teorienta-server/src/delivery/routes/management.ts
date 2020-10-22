import express from 'express'
const router = express.Router()
import { createManagement } from '../controller/management'

router.post('/createManagement', async (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const description = req.body.description

    res.send(await createManagement({ name, email, description }))
})

export default router
