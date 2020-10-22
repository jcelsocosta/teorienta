import { IAnnouncementsRepository } from '../../usecase/repository/IAnnouncementsRepository'
import { createAnnouncement, listAnnouncements } from '../infrastructure/database/mongo/announcement'

export class CreateAnnouncementUseCaseRepository implements IAnnouncementsRepository{
    async createAnnouncement(announcement: any) {
        return await createAnnouncement(announcement)
    }
}

export class ListAnnouncementsUseCaseRepository {
    async listAnnouncements() {
        return await listAnnouncements()
    }
}
