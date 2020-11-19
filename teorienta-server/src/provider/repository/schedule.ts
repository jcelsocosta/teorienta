import { IScheduleRepository} from '../../usecase/repository/IScheduleRepository';
import { createSchedule} from '../infrastructure/database/mongo/schedule';


export class CreateScheduleUseCaseRepository implements IScheduleRepository{
    async createSchedule(schedule: any){
        return await createSchedule(schedule)
    }
}

