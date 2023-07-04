// FUNCIONES \\


/* determinarGanador compara las jugadas de la computadora y el usuario para definir si hay un ganador
o un empate, tomando como argumentos a las dos variables en las que se guardan las jugadas del usuario
y de la computadora. Además de imprimir por pantalla el resultado específico de cada ronda, la función
suma un punto para el ganador (modificando al arreglo que está en la variable resultadoParcial) */

function determinarGanador(com, user) {
    if (com === piedra && user === tijeras ||
          com === papel && user === piedra ||
            com === tijeras && user === papel) {
      resultadoRonda = derrota;
      resultadoParcial[0] += 1;
    } else if (com === papel && user === tijeras ||
                com === piedra && user === papel ||
                  com === tijeras && user === piedra) {
        resultadoRonda = victoria;
        resultadoParcial[1] += 1;
    } else {
        resultadoRonda = empate;
  } console.log('\nLa computadora eligio: %s.\nEl usuario eligio: %s.\n\
El resultado fue: %s.', jugadaComputadora, jugadaUsuario, resultadoRonda);
    return 1
};


/* elegirModoJuego recibe como argumento un string que será definido -ingresado- por el usuario frente
a una consulta por consola. Esta función vuelve a llamarse a si misma al menos una vez (a menos que se
de la excepción al caso). La función permite elegir si la partida tendrá una, dos o tres rondas. Tiene
además las opciones de ver las reglas del juego o salir del programa. Al seleccionar un modo de juego,
Ésta función llama a obtenerJugadaUsuario cuantas veces sea necesario (según el tipo de partida)...
 elegirModoJuego imprime por pantalla distintos tipos de información según el caso (mensaje de error y
tip de ayuda si se ingresa cualquier cosa que no tenga un uso definido, resultado parcial y/o final de
las partidas, las reglas del juego y todos los controles si se les requiere, entre otras cosas más) */

function elegirModoJuego(rsQuestion) {
  let newQuestion;
    switch (Number(rsQuestion)) {
      case 1:
        console.log('\n¡EL QUE GANA, GANA!\n\
 (tiene que ingresar el numero de la jugada que quiere realizar)\n\n0.piedra\n1.papel\n2.tijeras\n');
        console.log('\n¡Ronda %i!\n\
\n (computadora: %i, usuario: %i)', ronda, resultadoParcial[0], resultadoParcial[1])
        newQuestion = readlineSync.question('\nSu jugada: ');
        obtenerJugadaUsuario(newQuestion);
        if (resultadoParcial[0] > resultadoParcial[1] && ronda < 5) {
              console.log('\n (computadora: %i, usuario: %i)\n\
\n%s', resultadoParcial[0], resultadoParcial[1], defeat);
        } else if (resultadoParcial[0] < resultadoParcial[1] && ronda < 5) {
              console.log('\n (computadora: %i, usuario: %i)\n\
\n%s', resultadoParcial[0], resultadoParcial[1], win);
        } else if (resultadoParcial[0] === resultadoParcial[1] && ronda < 5){
              console.log('\n (computadora: %i, usuario: %i)\n\
\n%s', resultadoParcial[0], resultadoParcial[1], draw);
        } else {
      }
        break
      case 2:
        console.log('\n¡PARTIDA Y REVANCHA!\n\
 (tiene que ingresar el numero de la jugada que quiere realizar)\n\n0.piedra\n1.papel\n2.tijeras');
        for (ronda = 1; ronda < 3; ronda++) {
              console.log('\n¡Ronda %i!\n\
\n (computadora: %i, usuario: %i)', ronda, resultadoParcial[0], resultadoParcial[1]);
              newQuestion = readlineSync.question('\nSu siguiente jugada: ');
              obtenerJugadaUsuario(newQuestion);
        } if (resultadoParcial[0] > resultadoParcial[1] && ronda < 5) {
                console.log('\n (computadora: %i, usuario: %i)\n\
\n%s', resultadoParcial[0], resultadoParcial[1], defeat);
        } else if (resultadoParcial[0] < resultadoParcial[1] && ronda < 5) {
                console.log('\n (computadora: %i, usuario: %i)\n\
\n%s', resultadoParcial[0], resultadoParcial[1], win);
        } else if (resultadoParcial[0] === resultadoParcial[1] && ronda < 5) {
                console.log('\n (computadora: %i, usuario: %i)\n\
\n%s', resultadoParcial[0], resultadoParcial[1], draw);
        } else {
      }
        break
      case 3:
        console.log('\n\¡QUE SEA AL MEJOR DE TRES!\n\
 (tiene que ingresar el numero de la jugada que quiere realizar)\n\n0.piedra\n1.papel\n2.tijeras');
        for (ronda; ronda < 4; ronda++) {
              console.log('\n¡Ronda %i!\n\
\n (computadora: %i, usuario: %i)', ronda, resultadoParcial[0], resultadoParcial[1]);
              newQuestion = readlineSync.question('\nSu siguiente jugada: ');
              obtenerJugadaUsuario(newQuestion);
        } if (resultadoParcial[0] > resultadoParcial[1] && ronda < 5) {
                console.log('\n (computadora: %i, usuario: %i)\n\
\n%s', resultadoParcial[0], resultadoParcial[1], defeat);
        } else if (resultadoParcial[0] < resultadoParcial[1] && ronda < 5) {
                console.log('\n (computadora: %i, usuario: %i)\n\
\n%s', resultadoParcial[0], resultadoParcial[1], win);
        } else if (resultadoParcial[0] === resultadoParcial[1] && ronda < 5) {
                console.log('\n (computadora: %i, usuario: %i)\n\
\n%s', resultadoParcial[0], resultadoParcial[1], draw);
        } else {
      }
        break
      case 7:
        console.log('\n%s', reglasJuego);
        newQuestion = readlineSync.question('\nPara empezar a jugar, ' +
        'elija primero un modo de juego: ');
        elegirModoJuego(newQuestion);
        break
      case 9:
        console.log('\n%s', despedida);
        break
      default:
        console.log('\n%s\n\%s', advertencia, recordatorio);
        newQuestion = readlineSync.question('\nSi desea continuar, ' +
        'por favor elija un modo de juego: ');
        elegirModoJuego(newQuestion);
    } return 1
};


/* obtenerJugadaComputadora selecciona de forma aleatoria entre piedra, papel o tijera del arreglo que
está guardado en la variable jugadas, luego guarda lo que eligió en otra variable: jugadaComputadora.
En cualquier modo de juego -siempre que el usuario realiza una jugada- la función obtenerJugadaUsuario
llama a esta otra (así las jugadas de la computadora en partidas de dos o tres rondas puede variar) */

function obtenerJugadaComputadora() {
  let comChoice = Math.floor(Math.random() * 3);
  jugadaComputadora = jugadas[comChoice];
  return 1
};


/* obtenerJugadaUsuario también recibe como argumento un string por parte del usuario (quien introduce
su respuesta a una consulta por consola). Además de poder elegir entre piedra, papel o tijera, todavía
pueden verse las reglas del juego o salir del programa en cualquier momento, sin tener que interrumpir
un juego iniciado (dado el primer caso, o cada vez que se introduce un comando inválido). Esta función
asocia un número que ingresa el usuario con su jugada correspondiente -tomándola del arreglo guardado
en la variable jugadas- y guarda lo que eligió en otra variable: jugadaUsuario. Después de eso, llama
a las funciones obtenerJugadaComputadora y determinarGanador (una vez a cada una y en ese orden) */

function obtenerJugadaUsuario(userChoice) {
  let newCall;
    switch (Number(userChoice)) {
      case 0:
      case 1:
      case 2:
        jugadaUsuario = jugadas[userChoice];
        obtenerJugadaComputadora();
        determinarGanador(jugadaComputadora, jugadaUsuario);
        break
      case 7:
        console.log('\n%s', reglasJuego);
        newCall = readlineSync.question('\nAhora realice su jugada ' +
        'si desea continuar la partida: ');
        obtenerJugadaUsuario(newCall);
        break
      case 9:
        ronda = 5;
        console.log('\n%s', despedida);
        break
      default:
        console.log('\n%s\n\%s', advertencia, recordatorio);
        newCall = readlineSync.question('\nLa partida continua, ' +
        'todavia puede ingresar su jugada: ');
        obtenerJugadaUsuario(newCall);
    } return 1
};


// ---CONSTANTES--- \\

const readlineSync = require('readline-sync');
const derrota = 'Gana la computadora';
const empate = 'Empate';
const papel = 'papel';
const piedra = 'piedra';
const tijeras = 'tijeras';
const victoria = 'Gana el Usuario';
const advertencia = ' ¡Error: Comando invalido!\n'
const defeat = ' Fin de la partida (esta vez le ha tocado perder)... ¡Mejor suerte la proxima!\n';
const despedida = ' ¡Hasta la proxima!\n'
const draw = ' Fin de la partida (esta vez ha sido un empate)... ¿Nada mal, verdad?\n';
const introduccion = readlineSync.question('\nPIEDRA, PAPEL o TIJERAS\n\
 (ingrese el numero correspondiente a la opcion deseada para seleccionarla)\n\
\n    -modos de juego-\n1.El que gana, gana (una ronda)\n\
2.Partida y revancha (dos rondas)\n3.Que sea al mejor de tres (tres rondas)\n\
\n      -opciones-\n7.Reglas del juego\n9.Salir\n\
\n\nPara comenzar, seleccione uno entre los modos de juego disponibles: ');

const recordatorio = ' *(TIP): Ingrese el numero que este a la izquierda ' +
'de la opcion que desea elegir\n\
¿Intenta salir del juego? Si es asi, puede hacerlo ingresando el numero 9...';

const reglasJuego = '------------------------------------------------------' +
'----------------------------------------------\n\
-REGLAS:   ¡La piedra vence a las tijeras, las tijeras vencen al papel y el papel vence a la piedra!\n\
Ganar una ronda vale 1 punto. ¡Quien haya sumado mas puntos gana! (el juego puede acabar en empate).\n\
-CONTROLES:\n\
             -jugadas-            |             -modos de juego-               |      -opciones-\n\
    0.piedra  1.papel  2.tijeras  |  1.una ronda  2.dos rondas  3.tres rondas  |  7.Reglas  9.Salir\n\
----------------------------------------------------------------------------------------------------'

const win = ' Fin de la partida (esta vez ha conseguido ganar)... ¡Felicitaciones!\n'


// ---VARIABLES--- \\

let jugadas = [];
let jugadaComputadora;
let jugadaUsuario;
let resultadoParcial = [ 0, 0 ];
let resultadoRonda;
let ronda = 1;


// -INICIO--(ejecucion-del-codigo)- \\

jugadas.push(piedra, papel, tijeras);
elegirModoJuego(introduccion);