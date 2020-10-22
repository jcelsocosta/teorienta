import mongoose, { Schema } from 'mongoose'

const ManagementSchema: Schema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    description: {
        type: String
    }
})

export default mongoose.model('Management', ManagementSchema)
