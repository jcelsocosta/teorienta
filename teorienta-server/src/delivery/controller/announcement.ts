import { CreateAnnouncementUseCaseRepository, ListAnnouncementsUseCaseRepository, DeleteAnnouncementsUseCaseRepository, UpdateAnnouncementsUseCaseRepository, ListOneAnnouncementsUseCaseRepository } from '../../provider/repository/announcement'
import { CreateAnnouncementUseCase, ListAnnouncementsUseCase, ListOneAnnouncementsUseCase,DeleteAnnouncementsUseCase, UpdateAnnouncementsUseCase } from '../../usecase/announcement'

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

export async function listOneAnnouncements(objectId: any){
    const repository = new ListOneAnnouncementsUseCaseRepository();
    const usecase = new ListOneAnnouncementsUseCase(repository)
    return await usecase.listOneAnnouncements(objectId)
}

export async function deleteAnnouncements(objectId: any){
    const repository = new DeleteAnnouncementsUseCaseRepository();
    const usecase = new DeleteAnnouncementsUseCase(repository);
    return await usecase.deleteAnnouncement(objectId); 
}

export async function updateAnnouncements(announcement: any){
    const repository = new UpdateAnnouncementsUseCaseRepository();
    const usecase = new UpdateAnnouncementsUseCase(repository);
    return await usecase.updateAnnouncement(announcement);
}