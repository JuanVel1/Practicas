const express = require('express');
const productsRouter = require('./products.routes');

function routerApi(app) {
    const router = express.Router()
    //Parte del endpoint estatico http://localhost:3000/api/v1
    app.use('/api/v1/', router)
    //endpoint dinamico http://localhost:3000/api/v1/products
    router.use('/products', productsRouter)
}

module.exports = routerApi;