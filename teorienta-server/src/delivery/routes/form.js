const express = require('express')
const router = express.Router()

const {createForm} = require('../controller/form')

router.post("/createForm", async (req,res) => {
    const answer = req.body.answer

    res.send( await createForm({answer}))
})

module.exports = router