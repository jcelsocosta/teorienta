import { ICreateAnnouncementsRepository, IListAnnouncementsRepository, IDeleteAnnouncementsRepository, IUpdateAnnouncementsRepository } from './repository/IAnnouncementsRepository'

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
        
        return await this.repository.listAnnouncements();
    }
}

export class DeleteAnnouncementsUseCase{
    constructor(private repository: IDeleteAnnouncementsRepository){}
    async deleteAnnouncement(objectId: any){
        const useCaseResponseDelete = await this.repository.deleteAnnouncements(objectId);
        return useCaseResponseDelete;
    }
}

export class UpdateAnnouncementsUseCase{
    constructor (private repository: IUpdateAnnouncementsRepository){}
    async updateAnnouncement(announcement: any){
        const useCaseResponseUpdate = await this.repository.updateAnnouncements(announcement)
        return useCaseResponseUpdate;
    }
}