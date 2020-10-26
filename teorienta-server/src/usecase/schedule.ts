import {IScheduleRepository} from './repository/IScheduleRepository'


export class CreateScheduleUseCase{
    constructor(private repository: IScheduleRepository){

    }

    async createSchedule(schedule: any){
        const useCaseResponse = await this.repository.createSchedule(schedule)

        return useCaseResponse
    }
}

