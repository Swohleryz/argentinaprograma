let numero1 = 8;
let numero2 = 3;
let numero3 = 6;
let numero4 = 2;
let unaSuma = numero1 + numero2;
let unaResta = numero3 - numero4;
let resultadoFinal = unaSuma * unaResta;
let esPar = resultadoFinal % 2 === 0;
console.log(`Mis variables iniciales fueron: %i, %i, %i y %i.
 La respuesta a verificar si es resultado final es par es: %s.`,
  numero1, numero2, numero3, numero4, esPar);