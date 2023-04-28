// require nexessary NPM packages
const express = require('express')
const mongoose = require('mongoose')

// Instantiatie Express Application Object
const app = express()

// Define  a port for the api to run on
const port = process.env.PORT || 5003

// start the server and listen for requests on the given port
app.listen(port, () => console.log(`Bloggy is listening on port ${port}`))