import { IManagementRepository } from '../../usecase/repository/IManagementRepository'
import { createManagement } from '../infrastructure/database/mongo/management'

export class CreateManagementUseCaseRepository implements IManagementRepository{
    async createManagement(management: any) {
        return await createManagement(management)
    }
}
