import { ICreateAnnouncementsRepository, IListAnnouncementsRepository, IListOneAnnouncementsRepository,IDeleteAnnouncementsRepository, IUpdateAnnouncementsRepository } from '../../usecase/repository/IAnnouncementsRepository'
import { createAnnouncement, listAnnouncements,listOneAnnouncements, deleteAnnouncements, updateAnnouncements } from '../infrastructure/database/mongo/announcement'

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

export class ListOneAnnouncementsUseCaseRepository implements IListOneAnnouncementsRepository{
    async listOneAnnouncements(objectId: any){
        return await listOneAnnouncements(objectId);
    }
}


export class DeleteAnnouncementsUseCaseRepository implements IDeleteAnnouncementsRepository{
    async deleteAnnouncements(objectId: any){
        return await deleteAnnouncements(objectId);
    }
}

export class UpdateAnnouncementsUseCaseRepository implements IUpdateAnnouncementsRepository{
    async updateAnnouncements(announcement: any){
        return await updateAnnouncements(announcement);
    }
}