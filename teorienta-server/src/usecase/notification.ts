import {IListNotificationRepository,ICreateNotificationRepository,IDeleteNotificationRepository} from '../usecase/repository/INotificationRepository';

import { ICreateAnnouncementsRepository, IListAnnouncementsRepository, IDeleteAnnouncementsRepository, IUpdateAnnouncementsRepository } from './repository/IAnnouncementsRepository'

export class CreateNotificationUseCase {
    constructor(
        private repository: ICreateNotificationRepository
    ) { }

    async createNotification(notification: any) {
        const useCaseResponse = await this.repository.createNotification(notification)

        return useCaseResponse
    }
}

export class ListNotificationUseCase {
    constructor(
        private repository: IListNotificationRepository
    ) { }

    async listNotification() {
        
        return await this.repository.listNotification();
    }
}

export class DeleteNotificationUseCase{
    constructor(private repository: IDeleteNotificationRepository){}
    async deleteNotification(objectId: any){
        const useCaseResponseDelete = await this.repository.deleteNotification(objectId);
        return useCaseResponseDelete;
    }
}






