// Así como el ejemplo anterior requería convertir grados Fahrenheit a Celcius, este programa tiene que \\
// hacer lo mismo pero al revés (convertir grados Celcius a Fahrenheit) \\
let gradosCelcius = 0;
function conversion(gradosCelcius) { return gradosCelcius * (9 / 5) + 32 };
function gradosFahrenheit(gradosCelcius) { return gradosCelcius + " grados C equivalen a " + Math.round(conversion(gradosCelcius)) + " grados F" };
console.log("a. ¿Cuántos grados F son 20 C?");
gradosCelcius = 20;
console.log(gradosFahrenheit(gradosCelcius));
console.log("b. ¿Cuántos grados F son 33 C?");
gradosCelcius = 33;
console.log(gradosFahrenheit(gradosCelcius));
console.log("c. ¿Y 40 C?");
gradosCelcius = 40;
console.log(gradosFahrenheit(gradosCelcius));