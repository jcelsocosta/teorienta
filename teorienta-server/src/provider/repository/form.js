const { createForm } = require('../infrastructure/database/mongo/form')

class CreateFormUseCaseRepository {
    async createForm(form) {
        return await createForm(form)
    }
}

module.exports = {
    CreateFormUseCaseRepository
}