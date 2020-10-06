const { CreateAnnouncementUseCaseRepository, ListAnnouncementsUseCaseRepository } = require('../../provider/repository/announcement')
const { CreateAnnouncementUseCase, ListAnnouncementsUseCase } = require('../../usecase/annoucement')

async function createAnnouncement(announcement) {

    const repository = new CreateAnnouncementUseCaseRepository()
    const usecase = new CreateAnnouncementUseCase(repository)

    return await usecase.createAnnouncement(announcement)
}

async function listAnnouncements(){
    const repository = new ListAnnouncementsUseCaseRepository()
    const usecase = new ListAnnouncementsUseCase(repository)

    return await usecase.listAnnouncements()
}

module.exports = {
    createAnnouncement,
    listAnnouncements
}