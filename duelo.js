let pts1 = 4000;
let pts2 = 4000;
let atk1 = 0;
let atk2 = 0;
let jugador1 = "";
let jugador2 = "";
let dif = 0

 jugador1 = prompt (“Ingresa el nombre del primer jugador”);

 jugador2 = prompt (“Ingresa el nombre del segundo jugador”);

for (let i = 1; i = 100 ; i++) {
 atk1 = parseInt(prompt (jugador1 + “ ingresa los puntos de ataque de tu carta”));

 atk2 = parseInt(prompt (jugador2 + “ ingresa los puntos de ataque de tu carta”));

if (atk1 < atk2 ){

console.log (jugador1 + " tu monstruo ha sido derrotado por  + jugador2 + “.” + jugador2 + “ ha ganado esta batalla”);

dif = atk2-atk1;

pts1 = pts1-dif;}

if (atk1 > atk2 ){

console.log (jugador2 + " tu monstruo ha sido derrotado por " + jugador1 + "." + jugador1 + " ha ganado esta batalla”);

let dif = atk1-atk2;

pts2 = pts2-dif;}

else { 
    alert ("Es un empate. Juagremos con otras cartas");
}


if (pts1 == 0 || pts2 == 0){

if (pts1 == 0 ) {

console.log ("La partida la ganó "+ jugador2)}
else

console.log ("La partida la ganó " + jugador1);

break}}