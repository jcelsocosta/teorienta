import { IManagementRepository } from './repository/IManagementRepository'

export class CreateManagementUseCase {
    constructor(
        private repository: IManagementRepository
    ) { }

    async createManagement(form: any) {
        const useCaseResponse = await this.repository.createManagement(form)

        return useCaseResponse
    }
}