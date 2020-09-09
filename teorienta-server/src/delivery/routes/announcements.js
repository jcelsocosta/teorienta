const express = require('express')
const router = express.Router()
const passport = require('passport')

const Announcement = require('../../infrastructure/database/mongo/models/announcement')

// adding a announcement to the database

router.post("/addAnnouncement", (req, res, next) => {
    let newAnnouncement = new Announcement({
        title: req.body.title,
        urlDocument: req.body.urlDocument,
        available: req.body.available
    })

    Announcement.addAnnouncement(newAnnouncement, (err, announcement) => {
        if (err) {
            res.json({ success: false, message: 'Failed to register a new announcement' })
        } else {
            res.json({ success: true, message: 'Announcement registered successfully' })
        }
    })
})

router.post("/announcements", (req, res, next) => {

    Announcement.getAnnouncements((err, announcements) => {
        if (err) {
            res.json({ success: false, message: 'Failed to get the announcements' })
        } else {
            res.json({ success: true, message: 'Announcements obtained succssfully', announcements })
        }
    })
})

module.exports = router