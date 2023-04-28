// require nexessary NPM packages
const express = require('express')
const mongoose = require('mongoose')
const db = mongoose.connection;

// require db config file
const dbConfig = require('./config/db')

// establish database connection
mongoose.connect(dbConfig)

db.on('error',        (error) => console.log(`Error: ${error.message}`))
db.on('connected',    () => console.log(`MongoDB connected: ${dbConfig}`))
db.on('disconnected', () => console.log(`MongoDB Disconnected`))


// require Route files
const indexRouter = require('./routes/index')

// Instantiatie Express Application Object
const app = express()

// Define  a port for the api to run on
const port = process.env.PORT || 5003

/**
 * Routes
 * 
 * Mount the imported Routers
 */

app.use(indexRouter)

// start the server and listen for requests on the given port
app.listen(port, () => console.log(`Bloggy is listening on port ${port}`))