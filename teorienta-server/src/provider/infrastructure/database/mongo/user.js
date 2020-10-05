const User = require('./entities/user')
const bcrypt = require('bcryptjs')

async function createUser(user) {
    let newUser = new User({
        name: user.name,
        email: user.email,
        username: user.username,
        password: user.password,
        userType: user.userType
    })

    let response

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

async function authenticateUser({ username, password }) {
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

module.exports = {
    createUser,
    authenticateUser,
    getUserByUsername
}
