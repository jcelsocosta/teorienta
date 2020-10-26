import Announcement from './models/announcement'

export async function createAnnouncement(announcement: any) {
    let newAnnouncement = new Announcement({
        title: announcement.title,
        objective: announcement.objective ,
        fomentation: announcement.fomentation ,
        category: announcement.category ,
        dateSubmission: announcement.dateSubmission ,
        cnpj: announcement.cnpj,
        cpf: announcement.cpf,
        urlDocument: announcement.urlDocument,
        available: announcement.available
    })

    let response: any

    await Announcement.create(newAnnouncement)
        .then((announcement: any) => {
            response = { success: true, message: 'Announcement successfully stored.', announcement }
        }).catch((err) => {
            response = { success: false, message: 'Failed to register a new announcement.', err }
        })

    return response
}

export async function listAnnouncements() {

    let response: any

    await Announcement.find({})
        .then((announcements) => {
            response = { success: true, message: 'Announcements obtained successfully.', announcements }
        }).catch((err) => {
            response = { success: false, message: 'Failed to get the announcements.', err }
        })

    return response
}