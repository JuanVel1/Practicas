//Instalacion del miniframe
const express = require('express');
const routerApi = require('./routes');
const app = express();
const port = 3000;
app.listen(port, () => console.log('Listening the port', port));
routerApi(app);