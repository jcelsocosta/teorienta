const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

// User Schema
const UserSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userType: {
        type: Number,
        required: true
    }
})

const User = module.exports = mongoose.model('User', UserSchema)

module.exports.getUserById = function(id, callback) {
    User.findById(id, callback)
}
