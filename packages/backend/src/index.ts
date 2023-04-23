import express from 'express'
import mongoose from 'mongoose'
import dns from 'dns'
import os from 'os'
import cors from 'cors'

import router from './routes/router'
import settings from './config/settings'

const { dbURL, HOST, PORT } = settings

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/v1', router)

mongoose
  .connect(dbURL)
  .then(() => {
    app.listen(PORT as number, HOST as string, () => {
      dns.lookup(os.hostname(), function (error, host) {
        if (error) {
          console.log(error)
        } else {
          console.log(`📎 Network:  http://${host}:${PORT}`)
          console.log(`📎 Localhost:  http://localhost:${PORT}`)
        }
      })
    })
  })
  .catch((error) => {
    throw new Error(error)
  })
