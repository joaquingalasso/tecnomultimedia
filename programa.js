/*
 
 Galasso Joaquín - N° legajo 94698/3
 tp4 comisión 1 - Intento de River Raid.
 
 */

/* Array de rectangulos que finalmente no se utilizó.
let rectangulos = [
    [
        { x: 100, y: 200, ancho: 50, alto: 50 },
        { x: 200, y: 300, ancho: 50, alto: 50 },
    ],
    [
        { x: 50, y: 100, ancho: 50, alto: 50 },
        { x: 150, y: 250, ancho: 50, alto: 50 },
    ],
    [
        { x: 75, y: 150, ancho: 50, alto: 50 },
        { x: 225, y: 350, ancho: 50, alto: 50 },
    ]
];
*/

// Arrays para las posiciones X e Y de los enemigos y del combustible
let enemigoX = [0, 0, 0, 0, 0];
let enemigoY = [0, 0, 0, 0, 0];
let combustibleX = [0];
let combustibleY = [0];

// Otras variables
let diametroEnemigo = 25, velocidad = 1, puntaje = 0, contador = 10;
let fin = false, disparo = false;
let menu = true;
let instrucciones = false;
let creditos = false;
let estado = "menu";

let fondo = [];
let movFondo = -600;
let cantFondo = 3;
let numFondo = 0;

function preload() {
    for (let i = 0; i < cantFondo; i++) {
        fondo.push(loadImage('data/pantalla' + i + '.png'));
    }
}

function setup() {
    createCanvas(400, 600);
    textSize(20);
}

function draw() {

    switch (estado) {
        case "menu":
            background(0);
            textAlign(CENTER);
            fill(255);
            text("¡Bienvenido!", width / 2, height / 2 - 100);
            text("Presioná Enter para comenzar a jugar", width / 2, height / 2 - 50);
            text("Instrucciones", width / 2, height / 2 + 50);
            text("Créditos", width / 2, height / 2 + 100);

            if (keyIsPressed && keyCode === ENTER) {
                estado = "juego";
                // Establece la posición X de cada enemigo aleatoriamente
                for (var i = 0; i < 5; i++) {
                    enemigoX[i] = random(diametroEnemigo, width - diametroEnemigo);
                }
                for (var i = 0; i < 5; i++) {
                    combustibleX[i] = random(diametroEnemigo, width - diametroEnemigo);
                }

            } else if (mouseIsPressed && mouseX > width / 2 - 150 && mouseX < width / 2 + 150 && mouseY > height / 2 + 30 && mouseY < height / 2 + 70) {
                estado = "instrucciones";
            } else if (mouseIsPressed && mouseX > width / 2 - 150 && mouseX < width / 2 + 150 && mouseY > height / 2 + 90 && mouseY < height / 2 + 130) {
                estado = "creditos";
            }

            break;

        case "juego":
            background(0);
            image(fondo[numFondo], 0, movFondo);
            movFondo += velocidad;
            if (movFondo > 0) {
                movFondo = -600;
            }
            textAlign(CENTER);
            text("Puntaje: " + puntaje, width / 4, 50);
            fill("blue");
            text("Tiempo: " + contador, width / 4 * 3, 50);
            fill("white");
            dibujarEnemigos();
            dibujarCombustible();
            moverEnemigos();
            moverCombustible();
            dibujarNave();
            verificarCombustible();

            if (frameCount % 60 == 0 && contador > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
                contador--;
            }

            if (disparo) {
                verificarDisparo();
            }

            verificarFin();

            if (fin) {
                background(0);
                fill(255, 0, 0);
                text("Juego terminado", width / 2, height / 2);
                text("Hacé clic para reiniciar", width / 2, height / 2 + 50);
                text("Puntaje: " + puntaje, width / 2, height / 2 + 100);

                if (mouseIsPressed) {
                    for (var i = 0; i < 5; i++) {
                        enemigoX[i] = random(diametroEnemigo, width - diametroEnemigo);
                    }
                    enemigoY = [0, 0, 0, 0, 0];
                    combustibleY = [0];
                    puntaje = 0;
                    contador = 10;
                    fin = false;
                    estado = "menu";

                }

            }

            break;

        case "instrucciones":
            background(0);
            textAlign(CENTER);
            fill(255);
            text("Instrucciones:", width / 2, height / 2 - 100);
            text("Mové la nave con el mouse", width / 2, height / 2 - 50);
            text("Dispará con el botón izquierdo del mouse", width / 2, height / 2);
            text("Destruí a los enemigos antes de \n que lleguen al fondo de la pantalla. \n No dejes que el tiempo se acabe \n ¡Agarrá el combustible!", width / 2, height / 2 + 50);
            text("Hacé clic para volver al menú principal", width / 2, height / 2 + 175);

            if (mouseIsPressed && frameCount % 60 == 1) {
                estado = "menu";
            }

            break;

        case "creditos":
            background(0);
            textAlign(CENTER);
            fill(255);
            text("Créditos:", width / 2, height / 2 - 100);
            text("Desarrollado por: Joaquín Galasso", width / 2, height / 2 - 50);
            text("Hacé clic para volver al menú principal", width / 2, height / 2 + 150);

            if (mouseIsPressed && frameCount % 60 == 1) {
                estado = "menu";
            }

            break;
    }
}

function dibujarEnemigos() {
    fill("lime");
    for (var i = 0; i < 5; i++) {
        ellipse(enemigoX[i], enemigoY[i], diametroEnemigo, diametroEnemigo);
    }
}

function moverEnemigos() {
    for (var i = 0; i < 5; i++) {
        enemigoY[i] += velocidad;
    }
}

function dibujarCombustible() {
    fill("blue");
    for (var i = 0; i < 5; i++) {
        rect(combustibleX[i], combustibleY[i], diametroEnemigo, diametroEnemigo);
    }
}

function moverCombustible() {
    for (var i = 0; i < 5; i++) {
        combustibleY[i] += velocidad * 1.5;
    }
}
function dibujarNave() {
    fill("red")
    triangle(mouseX - 30, 600, mouseX, 540, mouseX + 30, 600);
}

/* Esta porción de código es un intento de colisión incompleto, en el que se detectaría cada parte del array.
var Rectangulo = {x: 100, y: 200, ancho: 50, alto: 50};

function detectarColision(rect1, rect2) {
    return rect1.x < rect2.x + rect2.ancho &&
           rect1.x + rect1.ancho > rect2.x &&
           rect1.y < rect2.y + rect2.alto &&
           rect1.y + rect1.alto > rect2.y;
  }
*/

function verificarCombustible() {

    for (var i = 0; i < 1; i++) {
        if (combustibleX[i] <= mouseX + 12.5 && combustibleX[i] >= mouseX - 12.5 && combustibleY[i]>=500) {
            combustibleX[i] = random(diametroEnemigo, width - diametroEnemigo);
            combustibleY[i] = 0;
            contador += 4;
            velocidad *= 1.5;
        }
    }
    strokeWeight(0);
}

function verificarDisparo() {
    strokeWeight(3);
    stroke(255, 0, 0);
    fill(255, 0, 0);
    line(mouseX, 540, mouseX, 0)

    for (var i = 0; i < 5; i++) {
        if (enemigoX[i] <= mouseX + 12.5 && enemigoX[i] >= mouseX - 12.5) {
            enemigoX[i] = random(diametroEnemigo, width - diametroEnemigo);
            enemigoY[i] = 0;
            puntaje++;
        }
    }

    disparo = false;
    strokeWeight(1);
}

function mousePressed() {
    disparo = true;
}

function verificarFin() {
    // Verifica si alguno de los enemigos pasó la nave
    for (var i = 0; i < 5; i++) {
        if (enemigoY[i] > 600 || contador == 0) {
            fin = true;
        }
    }
}
