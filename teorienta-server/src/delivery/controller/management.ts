import { CreateManagementUseCaseRepository } from '../../provider/repository/management'
import { CreateManagementUseCase } from '../../usecase/management'

export async function createManagement(management: any) {

    const repository = new CreateManagementUseCaseRepository()
    const usecase = new CreateManagementUseCase(repository)

    return await usecase.createManagement(management)
}
