import { CreateUserUseCaseRepository, AuthenticateUserUseCaseRepository } from '../../provider/repository/user'
import { CreateUserUseCase, AuthenticateUserUseCase } from '../../usecase/user'

async function createUser(user) {

    const repository = new CreateUserUseCaseRepository()
    const usecase = new CreateUserUseCase(repository)

    return await usecase.createUser(user)
}

async function authenticateUser(user) {
    const repository = new AuthenticateUserUseCaseRepository()
    const usecase = new AuthenticateUserUseCase(repository)

    return await usecase.authenticateUser(user)
}

module.exports = {
    createUser,
    authenticateUser
}