const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const router = require('./api')
const config = require('config')
const path = require('path')

const PORT = 5678
const MONGODB_URI = 'mongodb://localhost:27017/charm'

const app = express()

app.use(bodyParser.json())

app.use((err, req, res, next) => {
  res.status(500).json({ err: err.toString() })
})

app.use('/', [router, express.static(path.join(__dirname, '../build'))])

app.get('*', (ereq, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'))
})

app.listen(PORT, async () => {
  await mongoose.connect(MONGODB_URI)
  console.log(`Listening on ${PORT}`)
})
