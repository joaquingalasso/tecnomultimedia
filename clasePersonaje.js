class personaje {
  constructor(perx, pery, perancho, peralto) {
    this.perx = perx;
    this.pery = pery;
    this.perancho = perancho;
    this.peralto = peralto;
  }

  dibujarPersonaje(imgPersonaje, perpresente, persiguiente) {
    push();
    imageMode(CENTER);
    rectMode(CENTER);
    this.imgPersonaje = imgPersonaje;
    this.perpresente = perpresente;
    this.persiguiente = persiguiente;
    noFill();
    stroke(0, 0);
    rect(this.perx, this.pery, this.perancho, this.peralto);
    image(this.imgPersonaje, this.perx, this.pery);
    pop();
  }

  moverIzquierda1() {
    this.perx -= 100;
    this.pery -= 50;
  }

  moverDerecha1() {
    this.perx += 100;
    this.pery += 50;
  }

  moverIzquierda2() {
    this.perx -= 100;
    this.pery += 50;
  }

  moverDerecha2() {
    this.perx += 100;
    this.pery -= 50;
  }

}
