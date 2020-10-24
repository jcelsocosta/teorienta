import { IUserCreateRepository, IUserAuthenticateRepository } from './repository/IUserRepository'
import jwt from 'jsonwebtoken'
import config from '../provider/infrastructure/database/mongo/config/config'

export class CreateUserUseCase {
    constructor(
        private repository: IUserCreateRepository
    ) { }

    async createUser(user: any) {
        const useCaseResponse = await this.repository.createUser(user)

        return useCaseResponse
    }
}

export class AuthenticateUserUseCase {
    constructor(
        private repository: IUserAuthenticateRepository
    ) { }

    async authenticateUser(user: any) {
        const userResponse = await this.repository.authenticateUser(user)

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

