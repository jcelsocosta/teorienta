class CreateAnnouncementUseCaseRepositoryInterface {
    async createAnnouncement() {
        return null
    }
}

class ListAnnouncementsUseCaseRepositoryInterface {
    async listAnnouncements() {
        return null
    }
}

module.exports = {
    CreateAnnouncementUseCaseRepositoryInterface,
    ListAnnouncementsUseCaseRepositoryInterface
}