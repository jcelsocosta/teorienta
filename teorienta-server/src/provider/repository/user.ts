import { IUserCreateRepository, IUserAuthenticateRepository } from '../../usecase/repository/IUserRepository'
import { createUser, authenticateUser } from '../infrastructure/database/mongo/user'

export class CreateUserUseCaseRepository implements IUserCreateRepository {
    async createUser(user: any) {
        return await createUser(user)
    }
}

export class AuthenticateUserUseCaseRepository implements IUserAuthenticateRepository {
    async authenticateUser(user: any) {
        return await authenticateUser(user)
    }
}
