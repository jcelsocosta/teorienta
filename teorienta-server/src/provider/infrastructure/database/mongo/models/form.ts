import mongoose, { Schema } from 'mongoose'

const FormSchema: Schema = new Schema({
    question: {
        type: String
    },
    answer: {
        type: String
    }
})

export default mongoose.model('Form', FormSchema)