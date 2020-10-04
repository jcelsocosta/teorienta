const mongoose = require ('mongoose')

const FormSchema = mongoose.Schema({
    answer: {
         type: String
    }
})

const Form = module.exports = mongoose.model('Form',FormSchema)