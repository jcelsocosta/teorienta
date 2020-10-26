import express from 'express'
import path from 'path'
const app = express()
import bodyParser from 'body-parser'
import cors from 'cors'
import passport from 'passport'

import { Server } from '../config/config'
const PORT = Server.PORT

import users from '../../delivery/routes/user'
import announcements from '../../delivery/routes/announcements'
import management from '../../delivery/routes/management'
import form from '../../delivery/routes/form'
import schedule from '../../delivery/routes/schedule'


import databaseServer from '../../provider/infrastructure/database/mongo/cmd/server'
import config from '../../provider/infrastructure/authentication/passport/connection/config'

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

    config(passport)

    // Set users routes
    app.use('/users', users)

    // Set announcements routes
    app.use('/announcements', announcements)

    // Set management routes
    app.use('/management', management)

    // Set form router
    app.use('/form', form)

    //Set schedule router
    app.use('/schedule', schedule)

    // Set static folder
    app.use(express.static(path.join(__dirname, 'public')))

    // Status route
    app.get("/status", (req, res) => {
        res.send('Server is online.');
    })


    // Start server
    app.listen(PORT, () => console.log("Server is online on port " + PORT))
}

export default {
    server
}