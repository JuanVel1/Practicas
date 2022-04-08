//Probando que el paquete express funciona
const express = require("express");

//Indicamos que nuestra app va a ser una instancia del paquete express
const app = express(); 

//Obtener la info del sistema de informacion
app.get("/", (req,res) => {
    res.send("Hello world!")
});

//Iniciar el servidor en un puerto especifico
app.listen(3000, ()=>{
    console.log("Server is running in port 3000");
})