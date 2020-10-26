import mongoose, { Schema } from 'mongoose'

const ManagementSchema: Schema = new Schema({
    cpf: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String
    },

    description: {
        type: String
    },

    address:{
        type: String
    },
    telefone:{
        type: Number
    }
})

export default mongoose.model('Management', ManagementSchema)
