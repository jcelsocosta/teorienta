export interface ICreateAnnouncementsRepository {
    createAnnouncement(announcement: any): Promise<void>
}

export interface IListAnnouncementsRepository {
    listAnnouncements(announcement: any): Promise<any>
}