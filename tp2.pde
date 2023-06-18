// Galasso Joaquín - N° legajo 94698/3
// tp2 comisión 1

// URL del video: https://youtu.be/HFhJSlfCELY

float angulo;
float radio = 600;
float velocidad = 1;

int limHil = 10;
int limRect = 7;
float limRadio = 5;

PImage imagen;

boolean enterPresionado = false;
boolean colorActivado = false;

color blanco = color(255);
color oscuro = color(39, 33, 79);
color amarillo = color(240, 223, 45);
color violeta = color(130, 29, 254);

void setup() {
  // Cambia la resolución a 800x400 ---> OK
  size(800, 400);
  // Carga la imagen desde un archivo
  imagen = loadImage("ilusion.jpg");
  background(130, 29, 254);
  fill(0);
}

void draw() {

  // Muestra la imagen en el lado izquierdo de la ventana ---> OK
  imagen.resize(400, 400);
  image(imagen, 0, 0);

  if (!enterPresionado) {
    inicio("R = reiniciar \n A = aumentar velocidad \n D = aumentar velocidad \n C = modo multicolor \n \n ENTER = iniciar", color(255));
  } else if (enterPresionado) {
    ilusion();
    colorMode(RGB);
    fill(130, 29, 254);
    circle(0, 0, 13);
  } else if (colorActivado) {
    ilusion();
    colorMode(RGB);
    fill(130, 29, 254);
    circle(0, 0, 13);
  }
}

// Función propia con parámetros que retorna valor ---> OK
color colorAleatorio(float valor) {
  // Mapea el valor de tinte entre 0 y 255
  float tinte = map(valor % 8, 0, 8, 0, 255);

  // Cambia el modo de color a HSB
  colorMode(HSB);

  // Retorna el color aleatorio + saturación y brillo aleatorios.
  return color(tinte, random(255), random(255));
}

void keyPressed() {

  if (key == 'd') {
    velocidad++;
    reiniciar();
  } else if (key == 'a') {
    if (velocidad>1) {
      velocidad--;
      reiniciar();
    }
  } else if (key == 'r') {
    reiniciar();
    velocidad = 1;
  } else if (key == 'c') {
    reiniciar();
    velocidad = 1;
    colorActivado = !colorActivado;
  } else if (key == ENTER) {
    enterPresionado = true;
  }
}

// Reinicia las variables a sus valores iniciales y limpia el fondo
void reiniciar() {
  colorMode(RGB);
  background(130, 29, 254);
  angulo = 0;
  radio = 600;
}

void inicio(String texto, color c) {
  textSize(24);
  fill(c);
  textAlign(CENTER, CENTER);
  text(texto, width/2 + width/4, height/2);
}

void ilusion() {
  // Traslada al centro de la mitad derecha de la ventana
  translate(width/2 + width/4, height/2);

  // Primer ciclo for que recorre los valores de i desde 0 hasta limHil con inc de 8
  for (int i = 0; i < limHil; i+=8) {
    // Disminuir el radio en una fracción que depende de la velocidad
    radio = radio / (1 + .008 * velocidad);
    
    // Segundo ciclo for que recorre los valores de k desde 0 hasta limRect con inc de 1
    for (int j = 0; j <= limRect; j+=1) {

      // Salir del ciclo si el radio es menor que un valor mínimo
      if (radio < limRadio) break;
      pushMatrix();
      rotate(angulo);
      // Aumentar el ángulo en una fracción que depende de la velocidad
      angulo+= velocidad * (PI / 102);
      // Desactivar el trazo de los rectángulos
      noStroke();
      pushMatrix();
      // Cambiar el color de relleno según el valor de i o si colorActivado está true
      if (colorActivado == true) {
        fill(colorAleatorio(j));
      } else if (j == 4) {
        fill(oscuro);
      } else if (j == 1) {
        fill(amarillo);
      } else if (j == 5) {
        fill(violeta);
      } else if (j == 0) {
        fill(blanco);
      } else {
        noFill();
      }
      // Dibujar un rectángulo con una posición, un ancho y un alto que dependen del radio
      rect(radio, 0, radio / 5, radio / 3);
      popMatrix();
      popMatrix();
    }
  }
}
