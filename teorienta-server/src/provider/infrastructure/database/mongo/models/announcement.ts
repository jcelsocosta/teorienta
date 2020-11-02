import mongoose, { Schema } from 'mongoose'
// Announcement Schema
const AnnouncementSchema: Schema = new Schema({
    _id:{
        type: Number,
        required: true
    },
    title: {
        type: String
    },
    objective: {
        type: String,
        required: true
    },
    fomentation: {
        type: Number,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    dateSubmission:{
        type: String,
        required: true
    },
    cnpj:{
        type: String,
        required: false
    },
    cpf: {
        type: String,
        required: false
    },
    urlDocument:{
        type: String
    },
    available: {
        type: Boolean
    }

});


export default mongoose.model('Announcement', AnnouncementSchema)
