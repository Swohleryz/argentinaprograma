let cita = "Tres tristes tigres comen trigo en un trigal";
let substring = "tigres comen trigo";
let tamanioDeCita = cita.length;
console.log('El tamaño de la cita es: %i.', tamanioDeCita);
let indice = cita.indexOf(substring);                    // Entendiendo al indice como donde... \\
console.log('El indice del substring es: %i.', indice);    // ...empieza el substring en la cita \\
let citaRevisada = cita.replace(cita.slice(indice, tamanioDeCita), substring);
console.log(citaRevisada);