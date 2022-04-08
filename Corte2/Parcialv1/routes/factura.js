const express = require("express");
const routes = express.Router();
const facturaSchema = require("../models/factura");
//Aqui se tendran los request put, post y delete

//POST
//http://localhost:3000/api/v1/facturas/factura
routes.post("/factura", (req, res) => {
  const factura = facturaSchema(req.body);
  factura
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({ message: error });
    });
});

// GET
// http:localhost:3000/api/v1/facturas
routes.get("/", (req, res) => {
  facturaSchema
    .find()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({ message: error });
    });
});


//http://localhost:3000/api/v1/facturas/parametro
routes.get("/:facturaId", (req, res) => {
  const { facturaId } = req.params;
  facturaSchema
    .findOne({ 'line.DetailType.customer.ref.value': facturaId })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({ message: error });
    });
});


//PUT
routes.put("/:facturaId", (req, res) => {
  const { facturaId } = req.params;
  const { DueDate, DocNumber, Status, Line, Vendor, TotalAmt } = req.body;
  facturaSchema
    .updateOne(
      { _id: facturaId },
      { $set: { DueDate, DocNumber, Status, Line, Vendor, TotalAmt } }
    )
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({ message: error });
    });
});

// DELETE
routes.delete("/:facturaId", (req, res) => {
  const { facturaId } = req.params;
  facturaSchema
    .remove({ _id: facturaId })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({ message: error });
    });
});

module.exports = routes;
