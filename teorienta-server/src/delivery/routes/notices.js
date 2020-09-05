const express = require('express')
const router = express.Router()
const passport = require('passport')

const Notice = require('../../infrastructure/database/mongo/models/notice')

// adding a notice to the database

router.post("/addNotice", (req, res, next) => {
    let newNotice = new Notice({
        title: req.body.title,
        urlPDF: req.body.urlPDF,
        available: req.body.available
    })

    Notice.addNotice(newNotice, (err, notice) => {
        if (err) {
            res.json({ success: false, message: 'Failed to register a new notice' })
        } else {
            res.json({ success: true, message: 'Notice registered successfully' })
        }
    })
})

module.exports = router