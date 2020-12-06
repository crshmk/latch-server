import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import helmet from 'helmet'
import cors from 'cors'

import api from './routes/api'
import auth from './auth'

export let app = express()

app.use(bodyParser.json())
app.use(cookieParser())
app.use(helmet())
app.use(cors({credentials: true, origin: true}))

app.use(auth)
app.use('/api', api)

module.exports = app
