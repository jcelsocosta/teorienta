const { createManagement } = require('../infrastructure/database/mongo/management')

class CreateManagementUseCaseRepository {
    async createManagement(management) {
        return await createManagement(management)
    }
}

module.exports = {
    CreateManagementUseCaseRepository
}
