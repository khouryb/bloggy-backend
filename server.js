// require nexessary NPM packages
const express = require('express')
const mongoose = require('mongoose')

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