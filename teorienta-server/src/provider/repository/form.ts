import { IFormRepository } from '../../usecase/repository/IFormRepository'
import { createForm } from '../infrastructure/database/mongo/form'

export class CreateFormUseCaseRepository implements IFormRepository {
    async createForm(form: any) {
        return await createForm(form)
    }
}

