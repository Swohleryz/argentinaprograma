// En este ejemplo, dada una tabla con las temperaturas medias por mes (de cada uno de los doce meses) \\
// en grados Fahrenheit, se necesita saber el promedio anual entre dichas temperaturas en grados Celsius \\
let tablaDeTemperaturas = [];
function conversionACelsius(tablaDeTemperaturas) { let tablaEnCelsius = [];
  for (let temperatura of tablaDeTemperaturas) { tablaEnCelsius.push(Math.round(temperatura * (9 / 5) + 32)) };
  return tablaEnCelsius };
function promedioEnCelsius(tablaDeTemperaturas) { let suma = 0;
  for (let numero of conversionACelsius(tablaDeTemperaturas)) { suma += numero };
  return Math.round(suma / conversionACelsius(tablaDeTemperaturas).length) };
function respuesta(tablaDeTemperaturas) { return "el promedio anual es de " + promedioEnCelsius(tablaDeTemperaturas) + " grados Celsius" };
console.log("a. Dada la siguiente lista de temperaturas en grados Fahrenheit:");
console.log("Enero, 76; Febrero, 79; Marzo, 72; Abril, 65; Mayo, 59; Junio, 57; Julio, 55;");
console.log("Agosto, 54; Septiempre, 65; Octubre, 69; Noviembre, 73; Diciembre, 75");
console.log("Cuál es el promedio anual en grados Celcius?");
tablaDeTemperaturas = [ 76, 79, 72, 65, 59, 57, 55, 54, 65, 69, 73, 75 ];
console.log(respuesta(tablaDeTemperaturas));