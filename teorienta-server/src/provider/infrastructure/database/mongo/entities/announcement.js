const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

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
const Announcement = module.exports = mongoose.model('Announcement', AnnouncementSchema)

module.exports.getAnnouncements = async function(callback) {
    const announcements = await Announcement.find({}, callback)
    return announcements
}

module.exports.addAnnouncement = function(newAnnouncement, callback) {
    newAnnouncement.save(callback)
}

module.exports.deleteAnnouncement = function(callback) {

}

module.exports.updateAnnouncement = function(callback) {

}