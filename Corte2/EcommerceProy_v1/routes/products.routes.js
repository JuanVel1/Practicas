const express = require("express");
const routes = express.Router();
const productSchema = require("../models/product");
//Aqui se tendran los request put, post y delete

//POST
//http://localhost:3000/api/v1/products/product
routes.post("/product", (req, res) => {
  const product = req.body;
  product
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({ message: error });
    });
});

//GET
//http://localhost:3000/api/v1/products
routes.get("/", (req, res) => {
  productSchema
    .find()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({ message: error });
    });
});

//http://localhost:3000/api/v1/products/parametro
routes.get("/ProductId", (req, res) => {
  const { productId } = req.params;
  productSchema
    .findById(productId)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({ message: error });
    });
});

//PUT
routes.put("/ProductId", (req, res) => {
  const { productId } = req.params;
  const { product, image, price, available } = req.body;
  productSchema
    .updateOne(
      { _id: productId },
      { $set: { product, image, price, available } }
    )
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({ message: error });
    });
});

//DELETE
routes.delete("/:productId", (req, res) => {
  const { productId } = req.params;
  productSchema
    .remove({ _id: productId })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({ message: error });
    });
});

module.exports = routes;
