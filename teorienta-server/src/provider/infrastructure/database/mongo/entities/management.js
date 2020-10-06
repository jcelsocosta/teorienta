const mongoose = require('mongoose')

const ManagementSchema = mongoose.Schema({
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

module.exports = mongoose.model('Management', ManagementSchema)
