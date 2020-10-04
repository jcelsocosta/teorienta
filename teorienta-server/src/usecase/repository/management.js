const management = require("../../provider/infrastructure/database/mongo/entities/management")

class CreateManagementUseCaseRepositoryInterface {
    createManagement({ name, email, description }) {
        return null
    }
}

class UpdateManagementUseCaseRepositoryInterface {
    updateManagement({ name, email, description }) {
        return null
    }
}

module.exports = {
    CreateManagementUseCaseRepositoryInterface,
    UpdateManagementUseCaseRepositoryInterface
}