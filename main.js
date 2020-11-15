require('dotenv').config()
const express = require('express')
const axios = require('axios')
const httpCodes = require('http-codes')
const { API_PATH } = process.env
const cors = require('cors')
const requestUtils = require('./src/utils/request.utils')(axios)
const bioHandler = require('./src/handlers/bio.handler')(httpCodes,requestUtils)
const bioRouter = require('./src/routes/bio.router')(
  express.Router(),
  bioHandler
)
const coHandler = require('./src/handlers/co.handler')(httpCodes, requestUtils)
const coRouter = require('./src/routes/co.router')(express.Router(), coHandler)

const app = express()
const port = 3000

app.use(cors())
app.use(API_PATH, bioRouter)
app.use(API_PATH, coRouter)

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`)
})
