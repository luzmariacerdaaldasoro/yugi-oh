// Puntos del jugador 1
let pts1 = 4000;
// Puntos del jugador 2
let pts2 = 4000;

// Puntos de ataque del jugador 1
let atk1 = 0;

// Puntos de ataque del jugador 2
let atk2 = 0;

// Nombre del primer jugador.
let jugador1 = "";

// Nombre del segundo jugador.
let jugador2 = "";

// Pide el nombre del jugador1 hasta que introduce un caracter por lo menos.
while (jugador1 === "" || jugador1 == null) {
    jugador1 = prompt('Ingresa el nombre del primer jugador');
}

// Pide el nombre del jugador2 hasta que introduce un caracter por lo menos.
while (jugador2 === "" || jugador2 == null) {
    jugador2 = prompt('Ingresa el nombre del segundo jugador');
}

// Ejecutar 3 turnos ...
for (let i = 0; i < 3; i++) {
    // Pedir los puntos de ataque de cada carta del jugador 1.
    do {
        atk1 = parseInt(prompt(`${jugador1}, ingresa los puntos de ataque de tu carta ${i + 1}`));        
    } while(isNaN(atk1));

    // Pedir los puntos de ataque de cada carta del jugador 2.
    do {
        atk2 = parseInt(prompt(`${jugador2}, ingresa los puntos de ataque de tu carta ${i + 1}`));
    } while(isNaN(atk2));

    // Si son mayores los puntos de ataque del jugador 2 ...
    if (atk2 > atk1) {
        // Gana jugador 2
        alert(`En este turno, ganó ${jugador2}`);
        pts1 -= atk2 - atk1;
    }

    // Si son mayores los puntos de ataque del jugador 1 ...
    if (atk1 > atk2) {
        // Gana jugador 1
        alert(`En este turno, ganó ${jugador1}`);
        pts2 -= atk1 - atk2;
    }

    // Si son inguales los puntos de ataque de los dos jugadores ...
    if (atk1 === atk2) {
        // Empate
        alert('Empate');
        // No se restan puntos a nadie.
    }
}

// Ya salimos del ciclo, va el resumen de resultados...

// Si los puntos del jugador 2 son mayores ...
if (pts2 > pts1) {
    // Ganó el jugador 2.
    alert(`La partida la ganó ${jugador2}, con ${pts2} puntos.\n${jugador1} obtuvo ${pts1} puntos.`);
}

// Si los puntos del jugador 1 son mayores ...
if (pts1 > pts2) {
    // Ganó el jugador 1
    alert(`La partida la ganó ${jugador1}, con ${pts1} puntos.\n${jugador2} obtuvo ${pts2} puntos.`);
}

// Si los puntos de ambos jugadores son iguales ...
if (pts1 === pts2) {
    // Empate.
    alert(`${jugador1} y ${jugador2} empataron con ${pts1} puntos cada uno.`)
}