const { CreateFormUseCaseRepositoryInterface } = require('./repository/form')

class CreateFormUseCase {
    constructor(
        repository = new CreateFormUseCaseRepositoryInterface()
    ) {
        this.repository = repository
    }

    async createForm(form) {
        const answer = form.answer;
        return await this.repository.createForm({answer})

    }
}

module.exports = {
    CreateFormUseCase
}
