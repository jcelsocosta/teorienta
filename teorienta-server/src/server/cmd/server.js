const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require('passport')


const { Server } = require('../config/config')
const PORT = Server.PORT

const users = require('../../delivery/routes/users')
const announcements = require('../../delivery/routes/announcements')

const databaseServer = require('../../infrastructure/database/mongo/cmd/server')

function server() {

    // Setup mongoose
    databaseServer.startDatabase()

    // CORS MIDDLEWARE
    app.use(cors())

    // Body Parser Middleware
    app.use(bodyParser.json())

    // Passport Middleware
    app.use(passport.initialize())
    app.use(passport.session())

    require('../../infrastructure/authentication/passport/config/config')(passport)

    // Set users routes
    app.use('/users', users)

    // Set announcements routes
    app.use('/announcements', announcements)

    // Set static folder
    app.use(express.static(path.join(__dirname, 'public')))

    // Status route
    app.get("/status", (req, res) => {
        res.send('Server is online.');
    })
    

    // Start server
    app.listen(PORT, () => console.log("Server is online on port " + PORT))
}

module.exports = {
    server
}