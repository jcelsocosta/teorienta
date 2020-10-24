import { ICreateAnnouncementsRepository, IListAnnouncementsRepository } from '../../usecase/repository/IAnnouncementsRepository'
import { createAnnouncement, listAnnouncements } from '../infrastructure/database/mongo/announcement'

export class CreateAnnouncementUseCaseRepository implements ICreateAnnouncementsRepository{
    async createAnnouncement(announcement: any) {
        return await createAnnouncement(announcement)
    }
}

export class ListAnnouncementsUseCaseRepository implements IListAnnouncementsRepository{
    async listAnnouncements() {
        return await listAnnouncements()
    }
}
