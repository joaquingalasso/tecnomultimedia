// Galasso Joaquín
// tp0 comisión 1

PImage paisaje;
size(800, 400);
paisaje = loadImage("elCentinela-Tandil.jpg");
paisaje.resize(400, 400);

background(113, 175, 236);
noStroke();

image(paisaje, 0, 0, 400, 400);

fill(240, 249, 254); // nubes
rect(400, 150, 400, 100);

fill(113, 110, 57); // árboles
rect(400, 240, 400, 100);
ellipse(690, 235, 72, 50);

fill(124, 120, 116); // rocas
ellipse(660, 170, 90, 145);
ellipse(600, 115, 105, 145);
quad(650, 240, 560, 210, 530, 110, 580, 50);
ellipse(455, 194, 80, 50);

fill(118, 102, 86); // superficie rocosa
quad(400, 210, 665, 238, 680, 260, 687, 300);
triangle(400, 210, 687, 300, 400, 300);
triangle(400, 300, 800, 300, 800, 275);

fill(115, 93, 72); // superficie rocosa más oscura
rect(400, 300, 400, 200);

fill(124, 120, 116); // rocas
triangle(560, 300, 600, 250, 620, 330);
quad(400, 300, 490, 250, 550, 290, 470, 300);

fill(95, 102, 61); // pastos
ellipse(600, 380, 50, 50);

fill(124, 120, 116); // rocas
ellipse(600, 115, 105, 145);

fill(95, 102, 61); // pastos
ellipse(550, 280, 50, 70);

fill(124, 120, 116); // roca cercana
ellipse(520, 360, 150, 80);
