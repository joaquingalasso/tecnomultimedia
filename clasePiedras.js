class piedras {
  constructor(piedx, piedy) {
    this.piedx = piedx;
    this.piedy = piedy;
    this.golpeado = true;
  }

  dibujarPiedras(imgPiedras, velocidad) {
    push();
    imageMode(CENTER);
    this.imgPiedras = imgPiedras;
    image(this.imgPiedras, this.piedx, this.piedy);
    this.caer(velocidad);
    pop();
  }

  caer(velocidad) {
    this.piedy += velocidad;
    if (this.piedy > height) {
      this.piedy = -50;
      this.golpeado = true;
    }
  }

}
