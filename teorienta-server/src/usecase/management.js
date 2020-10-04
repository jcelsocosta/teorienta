const { CreateManagementUseCaseRepositoryInterface } = require('./repository/management')

class CreateManagementUseCase {
    constructor(
        repository = new CreateManagementUseCaseRepositoryInterface()
    ) {
        this.repository = repository
    }

    async createManagement(management) {
        const name = management.name
        const email = management.email
        const description = management.description

        return await this.repository.createManagement({ name, email, description })

    }
}

module.exports = {
    CreateManagementUseCase
}
