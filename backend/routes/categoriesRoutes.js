const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()
const port = process.env.port || 3000

app.use(bodyParser.json())

const categoriesController = require('../controllers/categoriesController')

app.group("/api/v1/", (router) => {
    router.get('/categories', categoriesController.index)
    router.get('/category/:id', categoriesController.show)
    router.post('/category',categoriesController.store)
    router.patch('/category/:id', categoriesController.update)
    router.delete('/category/:id', categoriesController.destroy)
})

module.exports = app