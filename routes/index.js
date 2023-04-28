// require nexessary NPM packages
const express = require('express')

// instantiate a router (a mini app that onlu handles routes)
const router = express.Router()

/**
 *  Action: INDEX 
 *  Method: GET
 *  URI: /
 * Description: Greet users to the app
 */
router.get('/', (req, res) => {
    res.json({message: 'Welcome to Bloggy'})
})

// export the Router so we can use it in the 'server.js' file
module.exports = router