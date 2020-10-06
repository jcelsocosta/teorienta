const { createAnnouncement, listAnnouncements } = require('../infrastructure/database/mongo/announcement')

class CreateAnnouncementUseCaseRepository {
    async createAnnouncement(announcement) {
        return await createAnnouncement(announcement)
    }
}

class ListAnnouncementsUseCaseRepository {
    async listAnnouncements(){
        return await listAnnouncements()
    }
}

module.exports = {
    CreateAnnouncementUseCaseRepository,
    ListAnnouncementsUseCaseRepository
}
