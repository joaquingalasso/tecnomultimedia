// clase principal que contiene toda la lógica de la aventura y del juego
class Aventura {
  constructor() {
    this.pantallaActual = 0;
    this.totaldeimagenes = 26;
    this.imagenes = new Array(this.totaldeimagenes);
    for (let i = 0; i < this.totaldeimagenes; i++) {
      this.imagenes[i] = loadImage("data/imagen" + i + ".jpg");
    }
    this.nombredeboton = ["COMENZAR", "Créditos", "SIGUIENTE", "VOLVER AL INICIO", "ATRÁS", "Seguís esperando", "Bostezás", "Lanzarle comida", "Correr", "Hacerme un sánguche", "Salir"];
    this.textobase = loadStrings("data/narracion.txt");
    this.boton1 = new boton();
    this.boton2 = new boton();
    this.boton3 = new boton();
    this.boton4 = new boton();
    this.bloquedetexto1 = new bloquedetexto(500, 150, 5);
    this.anchoboton = 100;
    this.altoboton = 50;
    this.minijuego = new Juego();
  }

  dibujar() {
    switch (this.pantallaActual) {
    case 0:
      image(this.imagenes[0], 0, 0, width, height);
      this.boton1.dibujar(133, 215, this.anchoboton + 75, this.altoboton, this.nombredeboton[0], 0, 1);
      this.boton4.dibujar(133, 305, this.anchoboton + 75, this.altoboton, this.nombredeboton[1], 0, 26);
      break;
    case 1:
      image(this.imagenes[1], 0, 0, width, height);
      this.bloquedetexto1.dibujarBloque(width / 5, 425, this.textobase[0]);
      this.boton1.dibujar(660, 425, this.anchoboton + 50, this.altoboton, this.nombredeboton[2], 1, 2);
      break;
    case 2:
      image(this.imagenes[2], 0, 0, width, height);
      this.bloquedetexto1.dibujarBloque(width / 5, 25, this.textobase[1]);
      this.boton1.dibujar(660, 175, this.anchoboton + 50, this.altoboton, this.nombredeboton[2], 2, 3);
      break;
    case 3:
      image(this.imagenes[3], 0, 0, width, height);
      this.bloquedetexto1.dibujarBloque(width / 5, 425, this.textobase[2]);
      this.boton1.dibujar(660, 425, this.anchoboton + 50, this.altoboton, this.nombredeboton[2], 3, 4);
      break;
    case 4:
      image(this.imagenes[4], 0, 0, width, height);
      this.bloquedetexto1.dibujarBloque(width / 5, 25, this.textobase[3]);
      this.boton1.dibujar(600, 230, this.anchoboton + 150, this.altoboton, this.nombredeboton[5], 4, 5);
      this.boton2.dibujar(600, 320, this.anchoboton + 50, this.altoboton, this.nombredeboton[6], 4, 16);
      break;
    case 5:
      image(this.imagenes[5], 0, 0, width, height);
      this.bloquedetexto1.dibujarBloque(width / 5, 425, this.textobase[4]);
      this.boton1.dibujar(660, 425, this.anchoboton + 50, this.altoboton, this.nombredeboton[2], 5, 6);
      break;
    case 6:
      image(this.imagenes[6], 0, 0, width, height);
      this.bloquedetexto1.dibujarBloque(width / 5, 25, this.textobase[5]);
      this.boton1.dibujar(660, 175, this.anchoboton + 50, this.altoboton, this.nombredeboton[2], 6, 7);
      break;
    case 7:
      image(this.imagenes[7], 0, 0, width, height);
      this.bloquedetexto1.dibujarBloque(width / 5, 425, this.textobase[6]);
      this.boton1.dibujar(660, 425, this.anchoboton + 50, this.altoboton, this.nombredeboton[2], 7, 8);
      break;
    case 8:
      image(this.imagenes[8], 0, 0, width, height);
      this.bloquedetexto1.dibujarBloque(width / 5, 25, this.textobase[7]);
      this.boton1.dibujar(660, 175, this.anchoboton + 50, this.altoboton, this.nombredeboton[2], 8, 9);
      break;
    case 9:
      image(this.imagenes[9], 0, 0, width, height);
      this.bloquedetexto1.dibujarBloque(width / 5, 25, this.textobase[8]);
      this.boton2.dibujar(235, 250, this.anchoboton + 100, this.altoboton, this.nombredeboton[7], 9, 20);
      this.boton1.dibujar(235, 350, this.anchoboton, this.altoboton, this.nombredeboton[8], 9, 10);
      break;
    case 10:
      image(this.imagenes[10], 0, 0, width, height);
      this.bloquedetexto1.dibujarBloque(width / 5, 25, this.textobase[9]);
      this.boton1.dibujar(660, 175, this.anchoboton + 50, this.altoboton, this.nombredeboton[2], 10, 11);

      this.minijuego.victoria = false;
      this.minijuego.derrota = false;
      break;
    case 11:
      if (this.minijuego.victoria) {
        this.pantallaActual = 12;
        this.minijuego.estado = 0;
      } else {
        this.minijuego.dibujar();
      }
      if (this.minijuego.derrota) {
        this.pantallaActual = 0;
        this.minijuego.estado = 0;
      }
      break;
    case 12:
      image(this.imagenes[11], 0, 0, width, height);
      this.bloquedetexto1.dibujarBloque(width / 5, 25, this.textobase[10]);
      this.boton1.dibujar(660, 175, this.anchoboton + 50, this.altoboton, this.nombredeboton[2], 12, 13);
      break;
    case 13:
      image(this.imagenes[12], 0, 0, width, height);
      this.bloquedetexto1.dibujarBloque(width / 5, 425, this.textobase[11]);
      this.boton1.dibujar(660, 425, this.anchoboton + 50, this.altoboton, this.nombredeboton[2], 13, 14);
      break;
    case 14:
      image(this.imagenes[13], 0, 0, width, height);
      this.bloquedetexto1.dibujarBloque(width / 5, 25, this.textobase[12]);
      this.boton1.dibujar(660, 175, this.anchoboton + 50, this.altoboton, this.nombredeboton[2], 14, 15);
      break;
    case 15: /// FINAL 1
      image(this.imagenes[14], 0, 0, width, height);
      this.bloquedetexto1.dibujarBloque(width / 5, 425, this.textobase[13]);
      this.boton1.dibujar(400, 140, this.anchoboton + 150, this.altoboton, this.nombredeboton[3], 15, 0);
      break;
    case 16:
      image(this.imagenes[15], 0, 0, width, height);
      this.bloquedetexto1.dibujarBloque(width / 5, 425, this.textobase[14]);
      this.boton2.dibujar(660, 425, this.anchoboton + 50, this.altoboton, this.nombredeboton[2], 16, 17);
      break;
    case 17:
      image(this.imagenes[16], 0, 0, width, height);
      this.bloquedetexto1.dibujarBloque(width / 5, 25, this.textobase[15]);
      this.boton2.dibujar(400, 300, this.anchoboton + 175, this.altoboton, this.nombredeboton[9], 17, 18);
      this.boton3.dibujar(725, 500, this.anchoboton, this.altoboton, this.nombredeboton[10], 17, 23);
      break;
    case 18:
      image(this.imagenes[17], 0, 0, width, height);
      this.bloquedetexto1.dibujarBloque(width / 5, 25, this.textobase[16]);
      this.boton2.dibujar(660, 175, this.anchoboton + 50, this.altoboton, this.nombredeboton[2], 18, 19);
      break;
    case 19:
      image(this.imagenes[18], 0, 0, width, height);
      this.bloquedetexto1.dibujarBloque(width / 5, 425, this.textobase[17]);
      this.boton2.dibujar(660, 425, this.anchoboton + 50, this.altoboton, this.nombredeboton[2], 19, 6);
      break;
    case 20:
      image(this.imagenes[19], 0, 0, width, height);
      this.bloquedetexto1.dibujarBloque(width / 5, 25, this.textobase[18]);
      this.boton2.dibujar(660, 175, this.anchoboton + 50, this.altoboton, this.nombredeboton[2], 20, 21);
      break;
    case 21:
      image(this.imagenes[20], 0, 0, width, height);
      this.bloquedetexto1.dibujarBloque(width / 5, 425, this.textobase[19]);
      this.boton2.dibujar(660, 425, this.anchoboton + 50, this.altoboton, this.nombredeboton[2], 21, 22);
      break;
    case 22: /// FINAL 2
      image(this.imagenes[21], 0, 0, width, height);
      this.bloquedetexto1.dibujarBloque(width / 5, 25, this.textobase[20]);
      this.boton2.dibujar(400, 460, this.anchoboton + 150, this.altoboton, this.nombredeboton[3], 22, 0);
      break;
    case 23:
      image(this.imagenes[22], 0, 0, width, height);
      this.bloquedetexto1.dibujarBloque(width / 5, 25, this.textobase[21]);
      this.boton3.dibujar(660, 175, this.anchoboton + 50, this.altoboton, this.nombredeboton[2], 23, 24);
      break;
    case 24:
      image(this.imagenes[23], 0, 0, width, height);
      this.bloquedetexto1.dibujarBloque(width / 5, 425, this.textobase[22]);
      this.boton2.dibujar(660, 425, this.anchoboton + 50, this.altoboton, this.nombredeboton[2], 24, 25);
      break;
    case 25: /// FINAL 3
      image(this.imagenes[24], 0, 0, width, height);
      this.bloquedetexto1.dibujarBloque(width / 5, 25, this.textobase[23]);
      this.boton3.dibujar(400, 460, this.anchoboton + 150, this.altoboton, this.nombredeboton[3], 25, 0);
      break;
    case 26: /// PANTALLA DE CRÉDITOS
      image(this.imagenes[25], 0, 0, width, height);
      this.boton4.dibujar(725, 550, this.anchoboton, this.altoboton, this.nombredeboton[4], 26, 0);
      break;
    default:
    }
  }

  clickear() {
    if (this.pantallaActual === this.boton1.pulpresente && this.boton1.apretar()) {
      this.pantallaActual = this.boton1.pulsiguiente;
    } else if (this.pantallaActual === this.boton2.pulpresente && this.boton2.apretar()) {
      this.pantallaActual = this.boton2.pulsiguiente;
    } else if (this.pantallaActual === this.boton3.pulpresente && this.boton3.apretar()) {
      this.pantallaActual = this.boton3.pulsiguiente;
    } else if (this.pantallaActual === this.boton4.pulpresente && this.boton4.apretar()) {
      this.pantallaActual = this.boton4.pulsiguiente;
    }
   this.minijuego.clickear();
  }

  usarTecla(keyCode) {
    // llama al método de la sub-clase que usa el keycode
    this.minijuego.presionar(keyCode);
  }
}
