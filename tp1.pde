// Galasso Joaquín
// tp1 comisión 1

String pantalla;
int segundos, contador, contador2, contador3;
int py, px2, px3, px4, diametro;
int tamParrafo, tamVariable, tamTitulo, tama, tama2, tama3;
PImage diapo1, diapo2, diapo3, diapo4, diapo5, diapo6, diapo7, diapo8;
float opacidad, opacidad2, opacidad3;
boolean presionado, empezamos;
float distancia;

void setup() {
  size(640, 480);
  pantalla = "inicio";
  py= -20;

  segundos = 0;
  contador=5;
  contador2=5;
  contador3=5;

  opacidad=0;
  tamTitulo=45;
  tamParrafo=22;

  presionado = false;
  empezamos = false;

  textSize(22);
  textAlign(CENTER, TOP);

  diapo1 = loadImage("foto1.jpg");
  diapo2 = loadImage("foto2.jpg");
  diapo3 = loadImage("foto3.jpg");
  diapo4 = loadImage("foto4.jpg");
  diapo5 = loadImage("foto5.jpg");
  diapo6 = loadImage("foto6.jpg");
  diapo7 = loadImage("foto7.jpg");
  diapo8 = loadImage("foto8.jpg");
}

void draw() {
  background(0);

  if (presionado == true && frameCount%60==0 && segundos < 51) {
    segundos++;
    empezamos=true;
  }

  if (pantalla.equals("inicio")) { // comparación variable de tipo String (de texto)
    image(diapo1, 0, 0, 640, 480);
    zocaloInf();
    textAlign(CENTER, TOP);

    noStroke();
    fill(100, 100, 0, 180);
    rect(0, py-10, width, height/6);


    fill(255);
    textSize(tamTitulo);
    if (py <= height/4) {
      py++;
    }
    text("ADIVINANDO MARAVILLAS", width/2, py);
    textSize(tamParrafo);
    text("¿Ya te preparaste? \n Presioná “enter” para comenzar.", width/2, 3*height/4);

    if (empezamos) {
      background(0, 0, 255);
      textAlign(CENTER, CENTER);
      textSize(tamTitulo);
      text("¡EMPECEMOS!", width/2, height/2);
    }
  } else if (pantalla.equals("segunda")) {
    image(diapo2, 0, 0, 640, 480);
    if (frameCount%60==0 && contador>0) {
      contador--;
    }

    fill(0, 255, 0, 180);
    rect(0, 20, width, height/14);
    fill(255);
    textSize(tamParrafo-5);
    text("NIVEL FÁCIL", width/2, 33);

    tamVariable=45;
    tamVariable++;
    textSize(tamVariable);
    text(contador, width/2, height/2);
    zocaloInf();
    if (tama<22) {
      tama++;
    }
    textSize(tama);

    text("Es una antigua ciudadela construida en lo alto de una montaña. \n Su nombre significa “montaña vieja” en quechua.", width/2, 3*height/4);
    if (contador == 0) {
      background(0, 255, 0);
      textAlign(CENTER, CENTER);
      textSize(tamTitulo);
      if (px2 < 650) {
        px2+=10;
        text("¡TIEMPO!", px2, height/2);
      }
    }
  } else if (pantalla.equals("tercera")) {
    image(diapo3, 0, 0, 640, 480);

    fill(0, 255, 0, 180);
    rect(0, 20, width, height/14);
    fill(255);
    textSize(tamParrafo-5);
    text("NIVEL FÁCIL", width/2, 33);

    textSize(tamTitulo);
    textAlign(CENTER, CENTER);
    fill(255, opacidad);
    opacidad++;
    text("Machu Picchu, Perú", width/2, height/4);
  } else if (pantalla.equals("cuarta")) {
    image(diapo4, 0, 0, 640, 480);
    if (frameCount%60==0 && contador2>0) {
      contador2--;
    }

    fill(255, 122, 0, 180);
    rect(0, 20, width, height/14);
    fill(255);
    textSize(tamParrafo-5);
    text("NIVEL INTERMEDIO", width/2, 33);

    tamVariable=45;
    tamVariable++;
    textSize(tamVariable);
    text(contador2, width/2, height/2);
    zocaloInf();
    if (tama2<22) {
      tama2++;
    }
    textSize(tama2);

    text("Está rodeado de un foso y tiene cinco torres \n que simbolizan los cinco picos del monte Meru", width/2, 3*height/4);
    if (contador2 == 0) {
      background(255, 122, 0);
      textAlign(CENTER, CENTER);
      textSize(tamTitulo);
      if (px3 < 650) {
        px3+=10;
        text("¡TIEMPO!", px3, height/2);
      }
    }
  } else if (pantalla.equals("quinta")) {
    image(diapo5, 0, 0, 640, 480);

    fill(255, 122, 0, 180);
    rect(0, 20, width, height/14);
    fill(255);
    textSize(tamParrafo-5);
    text("NIVEL INTERMEDIO", width/2, 33);

    textSize(tamTitulo);
    textAlign(CENTER, CENTER);
    fill(255, opacidad2);
    opacidad2++;
    text("Angkor Wat, Camboya", width/2, 3*height/4);
  } else if (pantalla.equals("sexta")) {
    image(diapo6, 0, 0, 640, 480);
    if (frameCount%60==0 && contador3>0) {
      contador3--;
    }

    fill(255, 0, 0, 180);
    rect(0, 20, width, height/14);
    fill(255);
    textSize(tamParrafo-5);
    text("NIVEL DIFÍCIL", width/2, 33);

    tamVariable=45;
    tamVariable++;
    textSize(tamVariable);
    text(contador3, width/2, height/2);
    zocaloInf();
    if (tama3<22) {
      tama3++;
    }
    textSize(tama3);

    text("Se dice que es la única obra humana visible desde el espacio.", width/2, 3*height/4);
    if (contador3 == 0) {
      background(255, 0, 0);

      fill(255, 0, 0, 180);
      rect(0, 20, width, height/14);
      fill(255);
      textSize(tamParrafo-5);
      text("NIVEL DIFÍCIL", width/2, 33);

      textSize(tamTitulo);
      textAlign(CENTER, CENTER);
      textSize(tamTitulo);
      if (px4 < 650) {
        px4+=10;
        text("¡TIEMPO!", px4, height/2);
      }
    }
  } else if (pantalla.equals("septima")) {
    image(diapo7, 0, 0, 640, 480);
    textAlign(CENTER, CENTER);
    fill(255, opacidad3);
    opacidad3++;
    text("Gran Muralla China, China", width/2, height/2);
  } else {
    image(diapo8, 0, 0, 640, 480);
    zocaloInf();
    textAlign(CENTER);
    textSize(tamParrafo);
    if (tamParrafo<22.5) {
      tamParrafo++;
    }
    diametro = 100;
    distancia = dist(mouseX, mouseY, width/2, height/2);
    if (distancia < diametro/2) {
      fill(255, 0, 0, 122);
    } else {
      fill(0, 0, 255, 122);
    }
    ellipse(width/2, height/2, diametro, diametro);
    textAlign(CENTER, CENTER);
    textSize(tamParrafo-5);
    fill(255);
    text("Reintentar", width/2, height/2);
    textSize(tamParrafo);
    text("¿Cuántas maravillas acertaste?", width/2, 3*height/4);
  }

  if (segundos <3) {
    pantalla = "inicio";
  } else if (segundos >=3 && segundos < 10) {
    pantalla = "segunda";
  } else if (segundos >=10 && segundos < 19) {
    pantalla = "tercera";
  } else if (segundos >=19 && segundos < 27) {
    pantalla = "cuarta";
  } else if (segundos >=27 && segundos < 35) {
    pantalla = "quinta";
  } else if (segundos >=35 && segundos < 43) {
    pantalla = "sexta";
  } else if (segundos >=43 && segundos < 51) {
    pantalla = "septima";
  } else {
    pantalla = "final";
  }

  println(segundos);
}

void zocaloInf() {
  noStroke();
  fill(0, 180);
  rect(0, width/2, width, height);
  fill(255);
}

void mousePressed() {
  dist(mouseX, mouseY, width/2, height/2);
  if (distancia < diametro/2 && pantalla == "final" && segundos > 20) {
    pantalla="inicio";
    segundos=0;
    presionado = false;
    empezamos = false;
    px2=0;
    px3=0;
    px4=0;
    py= -40;
    contador=0;
    contador2=0;
    contador3=0;
    opacidad=0;
    opacidad2=0;
    opacidad3=0;
  }
}

void keyPressed() {
  if (key == ENTER) {
    presionado = true;
  }
}
