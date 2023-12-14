class boton {
  constructor() {
  }

  dibujar(pulx, puly, pulancho, pulalto, texto, pulpresente, pulsiguiente) {
    push();
    this.pulx = pulx;
    this.puly = puly;
    this.pulancho = pulancho;
    this.pulalto = pulalto;
    textAlign(CENTER, CENTER);
    textSize(this.pulalto / 2);
    rectMode(CENTER);
    this.pulpresente = pulpresente;
    this.pulsiguiente = pulsiguiente;
    this.texto = texto;
    fill(125, 125, 175);
    rect(this.pulx, this.puly, this.pulancho, this.pulalto, 15);
    fill(90, 60, 90);
    text(texto, this.pulx, this.puly);
    pop();
  }

  apretar() {
    return mouseX > this.pulx - this.pulancho / 2 && mouseX < this.pulx + this.pulancho / 2 && mouseY > this.puly - this.pulalto / 2 && mouseY < this.puly + this.pulalto / 2;
  }
}
