export interface IUserCreateRepository {
    createUser(user: any): Promise<void>
}

export interface IUserAuthenticateRepository {
    authenticateUser(user: any): Promise<any>
}

export interface IListUserRepository{
    listUser():Promise<any>
}