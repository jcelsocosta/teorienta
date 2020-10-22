import mongoose, { Schema } from 'mongoose'

const FormSchema: Schema = new Schema({
    answer: {
        type: String
    }
})

export default mongoose.model('Form', FormSchema)