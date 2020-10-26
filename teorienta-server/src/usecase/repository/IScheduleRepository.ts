export interface IScheduleRepository{
    createSchedule(schedule: any): Promise<void>
}