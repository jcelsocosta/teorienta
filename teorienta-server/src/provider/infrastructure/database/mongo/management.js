const Management = require('./entities/management')

async function createManagement(management) {
    let newManagement = new Management({
        name: management.name,
        email: management.email,
        description: management.description
    })

    let response

    await Management.create(newManagement)
        .then((management) => {
            response = { success: true, message: 'Management successfully stored.', management }
        }).catch((err) => {
            response = { success: false, message: 'Failed to register a new management.', err }
        })

    return response
}

module.exports = {
    createManagement
}
