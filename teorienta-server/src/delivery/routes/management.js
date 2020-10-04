const express = require('express')
const router = express.Router()
const { createManagement } = require('../controller/management')

router.post('/createManagement', async (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const description = req.body.description

    res.send(await createManagement({ name, email, description }))
})

module.exports = router