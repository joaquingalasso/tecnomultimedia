class bloquedetexto{
  constructor(bloqueanchura,bloquealtura,radio){
  this.bloqueanchura= bloqueanchura;
  this.bloquealtura= bloquealtura;
  this.radio= radio;
}

dibujarBloque(blox,bloy,historia){
  push();
  this.blox= blox;
  this.bloy= bloy; 
  this.historia= historia;
  stroke(15,15,15);
  fill(15,30,55);
  rect(this.blox,this.bloy,this.bloqueanchura,this.bloquealtura,this.radio);
  fill(125,125,190);
  textAlign(CENTER, CENTER);
  textSize(17);
  text(historia,this.blox+10,this.bloy,this.bloqueanchura-20,this.bloquealtura);
  pop();
}
}
