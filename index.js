const express = require("express");
const app = express();
const consulta_articulos = require("./consulta_articulos");


// var numbers = [4, 2, 5, 1, 3];
// numbers.sort(function(a, b) {
//   return a - b;
// });

// numbers = [
//     { name: 'Edward', value: 21 },
//     { name: 'Sharpe', value: 37 },
//     { name: 'And', value: 45 },
//     { name: 'The', value: -12 },
//     { name: 'Magnetic', value: 13 },
//     { name: 'Zeros', value: 37 }
//   ];
  
// numbers.sort(function (a, b) {
//     return a.value - b.value;
// });
// console.log(numbers);
app.get("/api/consultar/articulos", consulta_articulos);

app.listen(3000);

console.log("Servidor iniciado en el puerto 3000")