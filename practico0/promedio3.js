let num1 = 0;
let num2 = 0;
let num3 = 0;
function promedio3(num1, num2, num3) { return (num1 + num2 + num3) / 3 };
function respuesta() { return "el promedio es " + Math.round(promedio3(num1, num2, num3)) };
console.log("a. ¿Cuál es el promedio entre 5, 7 y 9?");
num1 = 5;
num2 = 7;
num3 = 9;
console.log(respuesta());
console.log("b. ¿Cuál es el promedio entre -2, -3 y -8?");
num1 = -2
num2 = -3;
num3 = -8;
console.log(respuesta());
console.log("c. ¿Cuál es el promedio entre -1.2, -5.3 y -3.3?");
num1 = -1.2;
num2 = -5.3;
num3 = -3.3;
console.log(respuesta());