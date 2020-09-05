const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

// Notice Schema
const NoticeSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    urlPDF: {
        type: String,
        required: true
    },
    available: {
        type: Boolean,
        required: true
    }
})

const Notice = module.exports = mongoose.model('Notice', NoticeSchema)

module.exports.getNotices = async function(callback) {
    const notices = await Notice.find({}, callback)
    return notices
}

module.exports.addNotice = function(newNotice, callback) {
    newNotice.save(callback)
}

module.exports.deleteNotice = function(callback) {

}

module.exports.updateNotice = function(callback) {

}