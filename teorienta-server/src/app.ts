import express from 'express'
import { router } from './routes'
import cors from 'cors'
import morgan from 'morgan'

const app = express()
const options: cors.CorsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
    allowedHeaders: ['x-requested-with, content-type', 'authorization', 'origin', 'accept', 'x-access-token'],
    credentials: true,
    maxAge: 86400,
    preflightContinue: true
}
app.use(cors(options))
app.options('*', cors(options))
app.use(morgan('dev'))
app.use(express.json())
app.use(router)

export { app }