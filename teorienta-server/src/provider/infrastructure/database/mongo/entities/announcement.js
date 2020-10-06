const mongoose = require('mongoose')

// Announcement Schema
const AnnouncementSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    urlDocument: {
        type: String,
        required: true
    },
    available: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model('Announcement', AnnouncementSchema)
