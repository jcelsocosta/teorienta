import { ICreateNotificationRepository,IListOneNotificationRepository,IDeleteNotificationRepository,IListNotificationRepository} from '../../usecase/repository/INotificationRepository'
import {createNotification,deleteNotification,listNotification,listOneNotification } from '../infrastructure/database/mongo/notification';

export class CreateNotificationUseCaseRepository implements ICreateNotificationRepository{
    async createNotification(notification: any) {
        return await createNotification(notification)
    }
}

export class ListNotificationUseCaseRepository implements IListNotificationRepository{
    async listNotification() {
        return await listNotification()
    }
}

export class ListOneNotificationUseCaseRepository implements IListOneNotificationRepository{
    async listOneNotification(objectId: any){
        return await listOneNotification(objectId);
    }
}


export class DeleteNotificationUseCaseRepository implements IDeleteNotificationRepository{
    async deleteNotification(objectId: any){
        return await deleteNotification(objectId);
    }
}
