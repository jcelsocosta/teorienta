import mongoose, { Schema } from 'mongoose'

// Announcement Schema
const AnnouncementSchema: Schema = new Schema({
    title: {
        type: String,
        required: true
    },
    urlDocument: {
        type: String,
        required: true
    },
    available: {
        type: Boolean,
        required: true
    }
})


export default mongoose.model('Announcement', AnnouncementSchema)
