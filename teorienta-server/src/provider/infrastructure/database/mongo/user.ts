import User from './models/user'
import bcrypt from 'bcryptjs'

export async function createUser(user: any) {
    let newUser = new User({
        name: user.name,
        email: user.email,
        cpf: user.cpf,
        cnpfj: user.cnpj,
        username: user.username,
        password: user.password,
        userType: user.userType
    })

    let response: any

    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(newUser.password, salt)
    newUser.password = hash

    await User.create(newUser)
        .then((user) => {
            response = { success: true, message: 'User successfully stored.', user }
        }).catch((err) => {
            response = { success: false, message: 'Failed to register a new user.', err }
        })

    return response

}

async function getUser(ID: any, callback: Function) {
    const response = await User.findById(ID)
    return response
}

async function getUserByUsername(username) {
    let response

    await User.findOne({ username }).
        then((user) => {
            response = { success: true, message: 'Usuário Encontrado', user }
        }).catch((err) => {
            response = { success: false, message: 'Usuário não encontrado', err }
        })

    return response
}

export async function listUserEmail(){
    let response: any;
    response  = await User.find({"userType":2})
   
    return response;
}


export async function listUser() {

    let response: any

    await User.find({})
        .then((user) => {
            response = { success: true, message: 'Announcements obtained successfully.', user }
        }).catch((err) => {
            response = { success: false, message: 'Failed to get the announcements.', err }
        })

    return response
}
export async function authenticateUser({ username, password }) {
    let response
    await User.findOne({ username }).
        then((user) => {
            response = { success: true, message: 'Usuário Encontrado', user }
        }).catch((err) => {
            response = { success: false, message: 'Usuário não encontrado', err }
        })
    let user = response.user
    if (bcrypt.compareSync(password, user.password)) {
        delete user.password
        return response
    } else {
        return { success: false, message: 'Senha incorreta' }
    }
}

export default {
    getUserByUsername,
    getUser
}
