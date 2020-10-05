const { createUser, authenticateUser } = require('../infrastructure/database/mongo/user')

class CreateUserUseCaseRepository {
    async createUser(user) {
        return await createUser(user)
    }
}

class AuthenticateUserUseCaseRepository {
    async authenticateUser(user){
        return await authenticateUser(user)
    }
}

module.exports = {
    CreateUserUseCaseRepository,
    AuthenticateUserUseCaseRepository
}
