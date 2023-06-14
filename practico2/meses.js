const readlineSync = require('readline-sync');
let mes = readlineSync.question('Ingrese un numero entero del 1 al 12: ');
let meses = [
  { nombre: "enero", cantidad_de_dias: 31},
  { nombre: "febrero", cantidad_de_dias: 28},
  { nombre: "marzo", cantidad_de_dias: 31},
  { nombre: "abril", cantidad_de_dias: 30},
  { nombre: "mayo", cantidad_de_dias: 31},
  { nombre: "junio", cantidad_de_dias: 30},
  { nombre: "julio", cantidad_de_dias: 31},
  { nombre: "agosto", cantidad_de_dias: 31},
  { nombre: "septiembre", cantidad_de_dias: 30},
  { nombre: "octubre", cantidad_de_dias: 31},
  { nombre: "noviembre", cantidad_de_dias: 30},
  { nombre: "diciembre", cantidad_de_dias: 31} 
];
console.log('La cantidad de días del mes de %s es %i',
  meses[mes - 1].nombre, meses[mes - 1].cantidad_de_dias);