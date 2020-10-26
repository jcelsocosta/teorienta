import {CreateScheduleUseCaseRepository } from '../../provider/repository/schedule'
import {CreateScheduleUseCase} from '../../usecase/schedule'


export async function createSchedule(schedule: any){
    const repository = new CreateScheduleUseCaseRepository()
    const usecase = new CreateScheduleUseCase(repository)

    return await usecase.createSchedule(schedule)
}



