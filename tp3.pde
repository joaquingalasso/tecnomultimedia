/*
 
 Galasso Joaquín - N° legajo 94698/3
 tp3 comisión 1 - "El peatón" ("The pedestrian") de Ray Bradbury.
 
 URL del video: https://youtu.be/XShBaXqdXJk
 
 */

// Variables globales:
int pantalla = 0; // almaceno la pantalla actual
PImage[] imagenes; // almaceno las imágenes
String[] textos; // almaceno los epígrafes
String[] botones; // almaceno las decisiones

void setup() {
  size(600, 600); // establezco el tamaño del sketch
  imagenes = cargarImagenes(); // cargo las imágenes
  textos = loadStrings("textos.txt"); // cargo los epígrafes
  botones = loadStrings("botones.txt"); // cargo las decisiones
}

void draw() {
  background(255); // fondo blanco
  imagenes[pantalla].resize(600, 600);
  image(imagenes[pantalla], 0, 0); // muestro la imagen correspondiente a la pantalla actual
  mostrarTexto(); // muestro su respectivo texto
  mostrarBotones(); // muestro los botones a disponer
}

// Función que carga las imágenes del cuento desde la carpeta data y las devuelve en un arreglo:
PImage[] cargarImagenes() {
  PImage[] imagenes = new PImage[14]; // arreglo de 13 imágenes
  for (int i = 0; i < imagenes.length; i++) { // recorro el arreglo con un ciclo for
    imagenes[i] = loadImage("imagen (" + i + ").jpg"); // cargo cada imagen con loadImage y le asigno un nombre según el índ del arreglo
  }
  return imagenes; // devuelvo el arreglo resultante
}

// Esta función muestra el texto correspondiente a la pantalla actual, usando el arreglo de textos y la variable pantalla
void mostrarTexto() {
  fill(255); // color de relleno negro
  textAlign(CENTER, CENTER); // alineación del texto al centro
  if (pantalla == 0) { // si es la pantalla inicial o de créditos
    fill(0, 150); // color de relleno a blanco
    stroke(0);
    rectMode(CENTER);
    rect(width/2, height/2, width/2, height/2, 25, 25, 25, 25);
    fill(255);
    textSize(25);
    text(textos[pantalla], width/2, height/2, width/3, height/2); // muestro el texto en el centro de la ventana, usando la función text y el ancho y alto de la ventana
  } else if (pantalla == 13) {
    fill(0, 150);
    stroke(0);
    rectMode(CENTER);
    rect(width/2, height/2, width-20, height/2-125, 25, 25, 25, 25);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(20);
    text(textos[pantalla], width/2, height/2-2, width-100, height/2);
  } else if (pantalla == 2 || pantalla == 4) {
    fill(0, 150);
    stroke(0);
    rectMode(CENTER);
    rect(width/2, height*3/4+80, width, height/2-85, 25, 25, 0, 0);
    fill(255);
    textAlign(CENTER, BOTTOM);
    textSize(20);
    text(textos[pantalla], width/2, height*3/4-42, width-20, height/2);
  } else if (pantalla == 9 || pantalla == 10 || pantalla == 12) { // textos de finales
    fill(0, 150);
    stroke(0);
    rectMode(CENTER);
    rect(width/2, height, width, height/2*2, 25, 25, 0, 0);
    fill(255);
    textAlign(CENTER, BOTTOM);
    textSize(20);
    text(textos[pantalla], width/2, height*3/4-42, width-20, height/2);
    dibujarBoton(width/2, height/2, 150, "FIN", true);
  } else if (pantalla == 6 || pantalla == 7) {
    fill(0, 150);
    stroke(0);
    rectMode(CENTER);
    rect(width/2, height/4-80, width, height/4+100, 0, 0, 25, 25);
    fill(255);
    textAlign(CENTER, TOP);
    textSize(20);
    text(textos[pantalla], width/2, height/4+52, width-20, height/2);
    } else if (pantalla == 11) { 
    fill(0, 150);
    stroke(0);
    rectMode(CENTER);
    rect(width/2, height/4-80, width, height/4+175, 0, 0, 25, 25);
    fill(255);
    textAlign(CENTER, TOP);
    textSize(20);
    text(textos[pantalla], width/2, height/4+52, width-20, height/2);
    } else if (pantalla == 8) { 
    fill(0, 150);
    stroke(0);
    rectMode(CENTER);
    rect(width/2, height/4-80, width, height/4+220, 0, 0, 25, 25);
    fill(255);
    textAlign(CENTER, TOP);
    textSize(20);
    text(textos[pantalla], width/2, height/4+52, width-20, height/2);
  } else { // el resto de textos
    fill(0, 150);
    stroke(0);
    rectMode(CENTER);
    rect(width/2, height/4-80, width, height/4+20, 0, 0, 25, 25);
    fill(255);
    textAlign(CENTER, TOP);
    textSize(20);
    text(textos[pantalla], width/2, height/4+52, width-20, height/2);
  }
}

// Función que muestra los botones correspondientes a la pantalla actual, usando la variable pantalla y las funciones dibujarBoton y botonPresionado:
void mostrarBotones() {

  if (pantalla == 0) { // si estamos en la pantalla de inicio
    dibujarBoton(width/2, height*3/4, 150, botones[pantalla], true);
    if (botonPresionado(width/2, height*3/4)) { // Si el botón está presionado
      pantalla = 13; // va a los créditos
    }
    dibujarBoton(width/2, height*1/4, 150, botones[pantalla+1], true); // dibujo un botón para comenzar el cuento
    if (botonPresionado(width/2, height*1/4)) { // si el botón está presionado
      pantalla = 1; // va a la primera pantalla del cuento
    }
  } else if (pantalla == 1) {
    dibujarBoton(width/4, height*1/4, 150, botones[3], true);
    dibujarBoton(width*3/4, height*1/4, 150, botones[4], true);
    if (botonPresionado(width/4, height*1/4)) {
      pantalla = 2;
    }
    if (botonPresionado(width*3/4, height*1/4)) {
      pantalla = 10;
    }
  } else if (pantalla == 2) {
    dibujarBoton(width/4, height*3/4-25, 175, botones[5], true);
    dibujarBoton(width*3/4, height*3/4-25, 150, botones[6], true);
    if (botonPresionado(width/4, height*3/4-25)) {
      pantalla = 3;
    }
    if (botonPresionado(width*3/4, height*3/4-25)) {
      pantalla = 4;
    }
  } else if (pantalla == 4) {
    dibujarBoton(width/4, height*1/4, 150, botones[8], true);
    dibujarBoton(width*3/4, height*1/4, 150, botones[9], true);
    if (botonPresionado(width/4, height*1/4)) {
      pantalla = 5;
    }
    if (botonPresionado(width*3/4, height*1/4)) {
      pantalla = 11;
    }
  } else if (pantalla == 5) {
    dibujarBoton(width/2, height*3/4+60, 200, botones[10], true);
    if (botonPresionado(width/2, height*3/4+60)) {
      pantalla = 6;
    }
  } else if (pantalla == 6) {
    dibujarBoton(width/4, height*3/4, 150, botones[11], true);
    dibujarBoton(width*3/4, height*3/4, 150, botones[12], true);
    if (botonPresionado(width/4, height*3/4)) {
      pantalla = 7;
    }
    if (botonPresionado(width*3/4, height*3/4)) {
      pantalla = 8;
    }
  } else if (pantalla == 7) {
    dibujarBoton(width/2, height*3/4+60, 200, botones[13], true);
    if (botonPresionado(width/2, height*3/4+60)) {
      pantalla = 9;
    }
  } else if (pantalla == 8) {
    dibujarBoton(width/2, height*3/4+60, 200, botones[14], true);
    if (botonPresionado(width/2, height*3/4+60)) {
      pantalla = 9;
    }
  } else if (pantalla == 11) {
    dibujarBoton(width/2, height*3/4+60, 200, botones[15], true);
    if (botonPresionado(width/2, height*3/4+60)) {
      pantalla = 12;
    }
  } else if (pantalla == 3) {
    dibujarBoton(width/2, height*3/4+60, 200, botones[7], true);
    if (botonPresionado(width/2, height*3/4+60)) {
      pantalla = 2;
    }
  } else if (pantalla == 9 || pantalla == 10 || pantalla == 12 || pantalla == 13) {
    dibujarBoton(width/4-25, height*1/4-75, 150, botones[2], false);
    if (botonPresionado(width/4-25, height*1/4-75)) {
      pantalla = 0;
    }
  }
}

// Función que dibuja un botón en una posición x, con un texto t usando la función rect y la función text:
void dibujarBoton(float x, float y, float w, String t, boolean b) {
  if (b == true) {
    fill(255); // color de relleno a blanco
  } else fill (0);
  stroke(0); // color de borde a negro
  rectMode(CENTER);
  rect(x, y, w, 50, 25, 25, 25, 25);
  if (b == true) {
    fill(0); // color de relleno a blanco
  } else fill (255);
  textSize(15);
  textAlign(CENTER, CENTER);
  text(t, x, y-1);
}

// Función que retorna un valor booleano que indica si un botón en una posición x, y está presionado o no, usando la función dist y las variables mouseX, mouseY y mousePressed:
boolean botonPresionado(float x, float y) {
  if (dist(x, y, mouseX, mouseY) < 50 && mousePressed) { // si la distancia entre el centro del botón y la posición del mouse es menor que 50 y el mouse está presionado
    return true; // devuelvo el valor verdadero
  } else { // si no
    return false; // devuelvo false
  }
}
