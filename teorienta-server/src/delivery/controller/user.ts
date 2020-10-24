import { CreateUserUseCaseRepository, AuthenticateUserUseCaseRepository } from '../../provider/repository/user'
import { CreateUserUseCase, AuthenticateUserUseCase } from '../../usecase/user'

export async function createUser(user: any) {

    const repository = new CreateUserUseCaseRepository()
    const usecase = new CreateUserUseCase(repository)

    return await usecase.createUser(user)
}

export async function authenticateUser(user: any) {
    const repository = new AuthenticateUserUseCaseRepository()
    const usecase = new AuthenticateUserUseCase(repository)

    return await usecase.authenticateUser(user)
}
