import mongoose, { Schema } from 'mongoose'
// Announcement Schema
const NotificationSchema: Schema = new Schema({


    _id:{
        type: Number,
        require: true
    },      
    idAnnouncement:{
        type: Number
    },
    titleAnnouncement: {
        type: String
    },
    objectiveAnnouncement: {
        type: String,
        required: false
    },
    fomentationAnnouncement: {
        type: Number,
        required: false
    },
    categoryAnnouncement:{
        type: String,
        required: false
    },
    dateSubmissionAnnouncement:{
        type: String,
        required: false
    },
    cnpjAnnouncement:{
        type: String,
        required: false
    },
    cpfAnnouncement: {
        type: String,
        required: false
    },
    urlDocumentAnnouncement:{
        type: String,
        required: false
    },
    availableAnnouncement: {
        type: Boolean,
        required: false
    },
    

    nameUser: {
        type: String,
        required: false
    },
    emailUser: {
        type: String,
        required: false
    },
    cpfUser:{
        type: String
    },
    cnpjUser:{
        type: String
    },
    usernameUser: {
        type: String,
        required: false
    }

});


export default mongoose.model('Notification', NotificationSchema)
