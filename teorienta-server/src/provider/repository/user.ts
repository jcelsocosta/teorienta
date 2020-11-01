import { IUserCreateRepository, IUserAuthenticateRepository, IListUserRepository } from '../../usecase/repository/IUserRepository'
import { createUser, authenticateUser, listUser } from '../infrastructure/database/mongo/user'


export class CreateUserUseCaseRepository implements IUserCreateRepository {
    async createUser(user: any) {
        return await createUser(user)
    }
}

export class ListUserUseCaseRepository implements IListUserRepository{
    async listUser() {
        return await listUser()
    }
}

export class AuthenticateUserUseCaseRepository implements IUserAuthenticateRepository {
    async authenticateUser(user: any) {
        return await authenticateUser(user)
    }
}
