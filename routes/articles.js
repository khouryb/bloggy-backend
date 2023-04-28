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

router.get('/api/articles/:id', (req, res) => {
    Article.findById(req.params.id)
    .then((article) => {
        if (article) {
            res.json({ article: article })
        } else {
            // if we could not find a document with the mathing ID
            res.status(404).json({
                error: {
                    name: 'Document not found',
                    message: 'The provided ID doesn\'t match any documents'
                }
            })
        }
    })
    // Catch any errors that might occur
    .catch((error) => {
        res.status(500).json( {error: error} )
    })
})

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

router.post('/api/articles', (req, res) => {
    Article.create(req.body.article)
    // On a successful 'create' action, respond with 201
    // HTTP status and the content of the new Article 
    .then((newArticle) => {
        res.status(201).json({ article: newArticle })
    })
    // Catch any errors that may occur
    .catch((error) => {
        res.status(500).json({ error: error })
    })
})


//export the Router so we can use it in the 'server.js file
module.exports = router