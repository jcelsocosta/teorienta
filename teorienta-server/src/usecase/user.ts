import { IUserCreateRepository, IUserAuthenticateRepository, IListUserRepository, IListUserEmailRepository } from './repository/IUserRepository'
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

export class ListUserEmailUseCase{
    constructor(private repository: IListUserEmailRepository){}
    async listUserEmail(){
        return await this.repository.listUserEmail();
    }
}

export class ListUserUseCase {
    constructor(
        private repository: IListUserRepository
    ) { }

    async listUser() {
        
        return await this.repository.listUser();
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
                    email: user.email,
                    cpf: user.cpf,
                    cnpj: user.cnpj,
                    username: user.username,
                    userType: user.userType
                }
            }

            return response
        }

        return userResponse
    }
}

