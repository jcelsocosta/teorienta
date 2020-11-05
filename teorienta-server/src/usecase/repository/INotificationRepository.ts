export interface ICreateNotificationRepository {
    createNotification(notification: any): Promise<void>
}

export interface IListNotificationRepository {
    listNotification(): Promise<any>
}

export interface IDeleteNotificationRepository{
    deleteNotification(objectId: any): Promise<any>
}


