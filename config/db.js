// define the database for the development environment
const localDB = 'mongodb://localhost:27017/bloggy'

// environment variable MONGODB_URI will be available in
// Heroku production environment. otherwise use the development database
const currentDB = process.env.MONGODB_URI || localDB

// export the appropriate database based on the cureent environment
module.exports = currentDB