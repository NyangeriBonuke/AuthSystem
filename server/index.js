const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT

mongoose.connect(process.env.MONGO_URI)
.then(() => {
	console.log('Connected to mongodb')
})
.catch((error) => {
	console.log(error)
})

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT`)
})