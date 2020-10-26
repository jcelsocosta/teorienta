import mongoose, {Schema} from 'mongoose';


const ScheduleSchema: Schema = new Schema({
    hour: {
        type: String
    },
    day:{
        type: Number
    },
    month: {
        type: String
    },
    year: {
        type: Number
    }
})


export default mongoose.model('Schedule',ScheduleSchema)




