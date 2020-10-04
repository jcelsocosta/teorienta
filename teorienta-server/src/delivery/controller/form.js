const { CreateFormUseCaseRepository } = require ('../../provider/repository/form')
const { CreateFormUseCase } = require ('../../usecase/form')


async function createForm(form) {

    const repository = new CreateFormUseCaseRepository()
    const usecase = new CreateFormUseCase(repository)

    return await usecase.createForm(form)
}

module.exports = {
    createForm
}