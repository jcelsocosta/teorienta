const { CreateManagementUseCaseRepository } = require('../../provider/repository/management')
const { CreateManagementUseCase } = require('../../usecase/management')

async function createManagement(management) {

    const repository = new CreateManagementUseCaseRepository()
    const usecase = new CreateManagementUseCase(repository)

    return await usecase.createManagement(management)
}

module.exports = {
    createManagement
}