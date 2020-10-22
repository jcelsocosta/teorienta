import { ICreateAnnouncementsRepository, IListAnnouncementsRepository } from './repository/IAnnouncementsRepository'

export class CreateAnnouncementUseCase {
    constructor(
        private repository: ICreateAnnouncementsRepository
    ) { }

    async createAnnouncement(announcement: any) {
        const useCaseResponse = await this.repository.createAnnouncement(announcement)

        return useCaseResponse
    }
}

export class ListAnnouncementsUseCase {
    constructor(
        private repository: IListAnnouncementsRepository
    ) { }

    async listAnnouncements() {
        return await this.repository.listAnnouncements()
    }
}
