import { IFormRepository } from './repository/IFormRepository'

export class CreateFormUseCase {
    constructor(
        private repository: IFormRepository
    ) { }

    async createForm(form: any) {
        const useCaseResponse = await this.repository.createForm(form)

        return useCaseResponse
    }
}