const mongoose = require('mongoose')
const config = require('../config/config')


function startDatabase() {
    // Setup mongoose
    mongoose.connect(config.database, { useNewUrlParser: true, useUnifiedTopology: true })
    mongoose.connection.on('connected', () => {
        console.log('Connected to database ' + config.database)
    })
    mongoose.connection.on('error', (error) => {
        console.log('Database error: ' + error)
    })
}

module.exports = {
    startDatabase
}
