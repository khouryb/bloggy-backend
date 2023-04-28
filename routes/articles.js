// require nexessary NPM packages
const express = require('express')

// require mongoose model for article
const Article= require('../models/article')

// instantiate a router (a mini app that onlu handles routes)
const router = express.Router()

/**
 *  Action:       INDEX
 *  Method:       GET
 *  URI:          /api/articles
 * description:   Get all articles
 */

router.get('/api/articles', (req, res) => {
    Article.find()
    // Return all articles as an array
    .then((allArticles) => {
        res.json({ articles: allArticles})
    })
    // catch any errors
    .catch((error) => {
        res.status(500).json( {error: error} )
    })
})

/**
 *  Action:       SHOW
 *  Method:       GET
 *  URI:          /api/articles/644b8a0d97f034053bec088c
 * Description:   Get an article by article ID
 */

/**
 *  Action:        DESTROY
 *  method:        DELETE
 *  URI:           /api/articles/644b8a0d97f034053bec088c
 *  Description:   Delete an article by article ID
 */

/**
 *  Action:        UPDATE
 *  method:        PUT/PATCH
 *  URI:           /api/articles/644b8a0d97f034053bec088c
 *  Description:   Update an article by article ID
 */

/**
 *  Action:        CREATE
 *  method:        POST
 *  URI:           /api/articles/
 *  Description:   Create a new article
 */

//export the Router so we can use it in the 'server.js file
module.exports = router