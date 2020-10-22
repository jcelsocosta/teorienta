import { CreateAnnouncementUseCaseRepository, ListAnnouncementsUseCaseRepository } from '../../provider/repository/announcement'
import { CreateAnnouncementUseCase, ListAnnouncementsUseCase } from '../../usecase/announcement'

export async function createAnnouncement(announcement: any) {

    const repository = new CreateAnnouncementUseCaseRepository()
    const usecase = new CreateAnnouncementUseCase(repository)

    return await usecase.createAnnouncement(announcement)
}

export async function listAnnouncements() {
    const repository = new ListAnnouncementsUseCaseRepository()
    const usecase = new ListAnnouncementsUseCase(repository)

    return await usecase.listAnnouncements()
}
