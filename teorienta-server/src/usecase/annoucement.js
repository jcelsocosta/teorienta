class CreateAnnouncementUseCase {
    constructor(
        repository = new CreateAnnouncementUseCaseRepositoryInterface()
    ) {
        this.repository = repository
    }

    async createAnnouncement(announcement){
        const useCaseResponse = await this.repository.createAnnouncement(announcement)

        console.log(useCaseResponse)
        return useCaseResponse
    }
}

class ListAnnouncementsUseCase {
    constructor(
        repository = new ListAnnouncementsUseCaseRepositoryInterface()
    ) {
        this.repository = repository
    }

    async listAnnouncements() {
        return await this.repository.listAnnouncements()
    }
}

module.exports = {
    CreateAnnouncementUseCase,
    ListAnnouncementsUseCase
}