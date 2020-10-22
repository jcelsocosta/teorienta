import Management from './models/management'

export async function createManagement(management: any) {
    let newManagement = new Management({
        name: management.name,
        email: management.email,
        description: management.description
    })

    let response: any

    await Management.create(newManagement)
        .then((management) => {
            response = { success: true, message: 'Management successfully stored.', management }
        }).catch((err) => {
            response = { success: false, message: 'Failed to register a new management.', err }
        })

    return response
}
