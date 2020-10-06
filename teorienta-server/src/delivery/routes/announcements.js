const express = require('express')
const router = express.Router()

const { createAnnouncement, listAnnouncements } = require('../controller/announcement')

// adding a announcement to the database
router.post("/createAnnouncement", async (req, res, next) => {
    
    let title = req.body.title
    let urlDocument = req.body.urlDocument
    let available = req.body.available

    const response = await createAnnouncement({ title, urlDocument, available })

    res.send(response)
})

router.post("/announcements", async (req, res, next) => {

    const response = await listAnnouncements()

    res.send(response)
})

module.exports = router