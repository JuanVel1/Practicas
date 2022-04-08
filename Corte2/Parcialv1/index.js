//siempre instalamos express y este bloque
const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const port = process.env.PORT || 3000;
require("dotenv").config();
const routerApi = require("./routes");

app.listen(port, () => {
  console.log("active port", port);
});

app.use(express.json());
//npm i dotenv para funcionar el mongoose para enlazaar mongo db
mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING)
  .then(() => {
    console.log("Success conection with Mongo");
  })
  .catch((error) => console.log(error));

routerApi(app);
