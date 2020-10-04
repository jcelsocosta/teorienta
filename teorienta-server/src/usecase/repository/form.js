const form = require("../../provider/infrastructure/database/mongo/entities/form")

class CreateFormUseCaseRepositoryInterface {
    createForm({ answer }) {
        return null
    }
}

class UpdateFormUseCaseRepositoryInterface {
    updateForm({answer}) {
        return null
    }
}

module.exports = {
    CreateFormUseCaseRepositoryInterface,
    UpdateFormUseCaseRepositoryInterface
}