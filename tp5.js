/*
 
 Galasso Joaquín - N° legajo 94698/3
 tp5 comisión 1 - Minijuego para "El Peatón", de Ray Bradbury.
 
 URL del video: https://youtu.be/

 */
function setup() {
  createCanvas(400, 600);
  juego = new Juego;
}

function draw() {
  juego.actualizar();
  juego.dibujar();
}

function keyPressed() {
  juego.manejarTeclaPresionada(keyCode);
}

function keyReleased() {
  juego.manejarTeclaLiberada(keyCode);
}
