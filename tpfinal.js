/*

 tpFinal comisión 1 - Aventura gráfica + Minijuego para "La Sirena", de Ray Bradbury.

 */
let aventura;
function setup() {
  createCanvas(800, 600);
  aventura = new Aventura();
}

function draw() {
  aventura.dibujar();
}

function keyPressed() {
  aventura.usarTecla(keyCode);
}
