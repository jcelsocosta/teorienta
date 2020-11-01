import { CreateUserUseCaseRepository, AuthenticateUserUseCaseRepository, ListUserUseCaseRepository } from '../../provider/repository/user'
import { CreateUserUseCase, AuthenticateUserUseCase, ListUserUseCase } from '../../usecase/user'

export async function createUser(user: any) {

    const repository = new CreateUserUseCaseRepository()
    const usecase = new CreateUserUseCase(repository)

    return await usecase.createUser(user)
}

export async function listUser(){
    const repository = new ListUserUseCaseRepository()
    const usecase = new ListUserUseCase(repository)

    return await usecase.listUser();
}

export async function authenticateUser(user: any) {
    const repository = new AuthenticateUserUseCaseRepository()
    const usecase = new AuthenticateUserUseCase(repository)

    return await usecase.authenticateUser(user)
}
