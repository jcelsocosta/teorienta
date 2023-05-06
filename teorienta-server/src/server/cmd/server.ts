import express from 'express'
import path from 'path'
const app = express()
import cors from 'cors'
import passport from 'passport'

import { Server } from '../config/config'
const PORT = Server.PORT

import users from '../../delivery/routes/user'
import announcements from '../../delivery/routes/announcements'
import management from '../../delivery/routes/management'
import form from '../../delivery/routes/form'
import schedule from '../../delivery/routes/schedule'
import email from '../../delivery/routes/email';
import notification from '../../delivery/routes/notification'
import morgan from 'morgan'
import databaseServer from '../../provider/infrastructure/database/mongo/cmd/server'
import config from '../../provider/infrastructure/authentication/passport/connection/config'


function server() {
    const options: cors.CorsOptions = {
        origin: '*',
        methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
        allowedHeaders: ['x-requested-with, content-type', 'authorization', 'origin', 'accept', 'x-access-token'],
        credentials: false,
        maxAge: 86400,
        preflightContinue: true
    }
    app.use(cors(options))
    app.options('*', cors(options))
    app.use(morgan('dev'))
    app.use(express.json())
    // Setup mongoose
    databaseServer.startDatabase()

    // Passport Middleware
    app.use(passport.initialize())
    app.use(passport.session())

    config(passport)

    // Set users routes
    app.use(cors(options), users)

    // Set announcements routes
    app.use(cors(options), announcements)

    // Set management routes
    app.use(cors(options), management)

    // Set form router
    app.use(cors(options), form)

    //Set schedule router
    app.use(cors(options), schedule)


    //Set email router
    app.use(cors(options), email)

    //set notification router
    app.use(cors(options), notification)

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