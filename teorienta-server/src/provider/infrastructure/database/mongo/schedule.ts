import Schedule from './models/schedule'

export async function createSchedule(schedule: any) {
    let newSchedule = new Schedule({
        hour: schedule.hour,
        day: schedule.day,
        month: schedule.month,
        year: schedule.year
    })

    let response: any

    await Schedule.create(newSchedule)
        .then((schedule: any) => {
            response = {success: true, message: "Schedule sucessfuly stored", schedule}
        }).catch((err) => {
            response = {success: false, message: "Failed to register a new schedule",err}
        })

        return response
}