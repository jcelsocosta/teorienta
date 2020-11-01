export interface ICreateAnnouncementsRepository {
    createAnnouncement(announcement: any): Promise<void>
}

export interface IListAnnouncementsRepository {
    listAnnouncements(): Promise<any>
}

export interface IDeleteAnnouncementsRepository{
    deleteAnnouncements(objectId: any): Promise<any>
}

export interface IUpdateAnnouncementsRepository{
    updateAnnouncements(announcement: any): Promise<any>
}

