const express = require("express");
const app = express();
const consulta_articulos = require("./consulta_articulos");

app.get("/api/consultar/articulos", consulta_articulos);

app.listen(3000);

console.log("Servidor iniciado en el puerto 3000");