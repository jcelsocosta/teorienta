import Management from './models/management'

export async function createManagement(management: any) {
    let newManagement = new Management({
        cpf: management.cpf,
        name: management.name,
        email: management.email,
        description: management.description,
        address: management.address,
        telefone: management.telefone
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
