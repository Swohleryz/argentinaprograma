let gradosFahrenheit = 0;
function conversion(gradosFahrenheit) { return (gradosFahrenheit - 32) * (5 / 9) };
function gradosCelsius(gradosFahrenheit) { return gradosFahrenheit + " grados F equivalen a " + Math.round(conversion(gradosFahrenheit)) + " grados C" };
console.log("a. ¿Cuántos grados C son 50 F?");
gradosFahrenheit = 50;
console.log(gradosCelsius(gradosFahrenheit));
console.log("b. ¿Cuántos grados C son 75 F?");
gradosFahrenheit = 75;
console.log(gradosCelsius(gradosFahrenheit));