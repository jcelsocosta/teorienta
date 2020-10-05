const { CreateUserUseCaseRepositoryInterface, AuthenticateUserUseCaseRepositoryInterface } = require('./repository/user')
const jwt = require('jsonwebtoken')
const config = require('../provider/infrastructure/database/mongo/config/config')

class CreateUserUseCase {
    constructor(
        repository = new CreateUserUseCaseRepositoryInterface()
    ) {
        this.repository = repository
    }

    async createUser(user) {
        const name = user.name
        const email = user.email
        const username = user.username
        const password = user.password
        const userType = user.userType

        const userResponse = await this.repository.createUser({ name, email, username, password, userType })

        return userResponse
    }
}

class AuthenticateUserUseCase {
    constructor(
        repository = new AuthenticateUserUseCaseRepositoryInterface()
    ) {
        this.repository = repository
    }

    async authenticateUser(user) {
        const username = user.username
        const password = user.password

        const userResponse = await this.repository.authenticateUser({ username, password })

        if (userResponse.success) {
            let user = userResponse.user
            const token = jwt.sign({ data: user }, config.secret, {
                expiresIn: 604800 // 1 week
            })

            const response = {
                success: true,
                token: 'JWT ' + token,
                user: {
                    id: user._id,
                    name: user.name,
                    username: user.username,
                    email: user.email,
                    userType: user.userType
                }
            }
            return response
        }

        return userResponse
    }
}

module.exports = {
    CreateUserUseCase,
    AuthenticateUserUseCase
}