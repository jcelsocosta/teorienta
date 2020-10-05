class CreateUserUseCaseRepositoryInterface {
    async createUser(){
        return null
    }
}

class AuthenticateUserUseCaseRepositoryInterface {
    async authenticateUser() {
        return null
    }
}

module.exports =  {
    CreateUserUseCaseRepositoryInterface,
    AuthenticateUserUseCaseRepositoryInterface
}