const { CreateUserUseCaseRepository, AuthenticateUserUseCaseRepository } = require('../../provider/repository/user')
const { CreateUserUseCase, AuthenticateUserUseCase } = require('../../usecase/user')

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