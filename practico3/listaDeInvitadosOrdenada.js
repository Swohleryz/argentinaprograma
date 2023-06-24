let lista_invitados = [ "Jose", "Maria", "Juan", "Andres",
 "Lionel", "Sofia", "Leandro", "Emilia" ];
let admitidos = [];
let rechazados = [];
for (let i = 0; i < lista_invitados.length; i++) {
  if (lista_invitados[i] === "Jose" || lista_invitados[i] === "Sofia") {
    rechazados.push(lista_invitados[i]) } else {
    admitidos.push(lista_invitados[i]) } };
console.log("La lista ordenada de invitados admitidos es:");
admitidos.sort().forEach(nombre => console.log(nombre));