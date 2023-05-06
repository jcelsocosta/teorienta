import express from 'express'
const router = express.Router()
import { createManagement } from '../controller/management'


router.post('/management/createManagement', async (req, res) => {
    const cpf = req.body.cpf
    const name = req.body.name
    const email = req.body.email
    const description = req.body.description
    const address = req.body.address
    const telefone = req.body.telefone
    res.send(await createManagement({cpf, name, email, description, address, telefone }))
})

export default router
