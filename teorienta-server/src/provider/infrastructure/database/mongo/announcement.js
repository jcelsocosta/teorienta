const Announcement = require('./entities/announcement')

async function createAnnouncement(announcement){
    let newAnnouncement = new Announcement({
        title: announcement.title,
        urlDocument: announcement.urlDocument,
        available: announcement.available
    })

    let response

    await Announcement.create(newAnnouncement)
        .then((announcement) => {
            response = { success: true, message: 'Announcement successfully stored.', announcement }
        }).catch((err) => {
            response = { success: false, message: 'Failed to register a new announcement.', err }
        })

    return response
}

async function listAnnouncements(){

    let response

    await Announcement.find({})
        .then((announcements) => {
            response = { success: true, message: 'Announcements obtained successfully.', announcements }
        }).catch((err) => {
            response = { success: false, message: 'Failed to get the announcements.', err }
        })

    return response
}

module.exports = {
    createAnnouncement,
    listAnnouncements
}