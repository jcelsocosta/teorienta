import { CreateFormUseCaseRepository } from '../../provider/repository/form'
import { CreateFormUseCase } from '../../usecase/form'

export async function createForm(form: any) {

    const repository = new CreateFormUseCaseRepository()
    const usecase = new CreateFormUseCase(repository)

    return await usecase.createForm(form)
}
