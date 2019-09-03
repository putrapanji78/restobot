const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()
const port = process.env.port || 3000

app.use(bodyParser.json())

const orderController = require('../controllers/ordersController')

app.group("/api/v1/", (router) => {
    router.get('/orders', orderController.index)
    router.get('/order/:id', orderController.show)
    router.post('/order',orderController.store)
    router.patch('/order/:id', orderController.update)
    router.delete('/order/:id', orderController.destroy)
})

module.exports = app