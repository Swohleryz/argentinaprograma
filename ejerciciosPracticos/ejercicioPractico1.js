// Si bien la consigna solicita calcular el promedio entre seis números, ¿bien podría crearse un \\
// programa que calcule un promedio entre la cantidad de números que sea? Para ello, me tomé la libertad \\
// un poco la consigna y así calcular: a. ¿Cuál es el promedio entre 12, 5, 8, 14 y 10? \\
// b. ¿Cuál es el promedio entre 24, 11, 3 y 19?, c. ¿Y el promedio entre 32 y 45?. \\
let valores = [];
function promedio(valores) { let suma = 0;
  for (let numero of valores) { suma += numero };
  return Math.round(suma / valores.length) };
function respuesta() { return "el promedio es " + promedio(valores) };
console.log("a. ¿Cuál es el promedio entre 12, 5, 8, 14 y 10?");
valores = [ 12, 5, 8, 14, 10 ];
console.log(respuesta());
console.log("b. ¿Cuál es el promedio entre 24, 11, 3 y 19?");
valores = [ 24, 11, 3, 19 ];
console.log(respuesta());
console.log("c. ¿Y el promedio entre 32 y 45?");
valores = [ 32, 45 ];
console.log(respuesta());