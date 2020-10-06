const mongoose = require('mongoose')

const FormSchema = mongoose.Schema({
    answer: {
        type: String
    }
})

module.exports = mongoose.model('Form', FormSchema)