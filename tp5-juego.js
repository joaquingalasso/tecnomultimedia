const ANCHO_IMAGEN = 45;
const ALTO_IMAGEN = 50;
const VELOCIDAD_BALA = 5;
const PUNTAJE_POR_ENEMIGO = 10;
const NUMERO_INICIAL_DE_ENEMIGOS = 8;

// clase principal que contiene toda la lógica del juego
class Juego {

    constructor() {
        this.imagenFondo = loadImage('data/fondo.jpg');
        this.imagenJugador = loadImage('data/jugador.png');
        this.imagenEnemigo = loadImage('data/enemigo.png');
        this.imagenBala = loadImage('data/bala.png');
        this.imagenLibro = loadImage('data/libro.png');

        // instancia creada del jugador
        this.jugador = new Jugador(width / 2, 50, this.imagenJugador);

        // arreglos para los enemigos y las balas
        this.enemigos = [];
        this.balas = [];
        this.balasEnemigas = [];

        // inicializar el puntaje y el estado del juego
        this.puntaje = 0;
        this.juegoTerminado = false;
        this.menuVisible = true;
        this.movFondo = 0;

        // generar a los enemigos iniciales
        this.generarEnemigos(NUMERO_INICIAL_DE_ENEMIGOS);
    }

    actualizar() {
        if (this.menuVisible) {
            this.mostrarMenu();
        } else if (!this.juegoTerminado) {
            // desplazar fondo hacia arriba
            image(this.imagenFondo, 0, this.movFondo);
            this.movFondo += 5;
            if (this.movFondo > 0) {
                this.movFondo = -600;
            }

            this.jugador.actualizar();

            // actualizar las balas del jugador
            for (let i = this.balas.length - 1; i >= 0; i--) {
                this.balas[i].actualizar();
                if (this.balas[i].fueraDePantalla()) {
                    // eliminar la bala si está fuera de la pantalla
                    this.balas.splice(i, 1);
                } else {
                    // verificar si la bala colisiona con algún enemigo
                    for (let j = this.enemigos.length - 1; j >= 0; j--) {
                        if (this.balas[i].colisiona(this.enemigos[j])) {
                            // eliminar la bala y el enemigo si hay colisión
                            this.balas.splice(i, 1);
                            this.enemigos.splice(j, 1);
                            // inc el puntaje
                            this.puntaje += PUNTAJE_POR_ENEMIGO;
                            break;
                        }
                    }
                }
            }

            // actualizar las balas enemigas
            for (let i = this.balasEnemigas.length - 1; i >= 0; i--) {
                this.balasEnemigas[i].actualizar();
                if (this.balasEnemigas[i].colisiona(this.jugador)) {
                    // terminar el juego si una bala enemiga colisiona con el jugador
                    this.terminarJuego();
                    return;
                }
                if (this.balasEnemigas[i].fueraDePantalla()) {
                    // eliminar la bala enemiga si está fuera de pantalla
                    this.balasEnemigas.splice(i, 1);
                }
            }

            // actualizar los enemigos
            for (let i = this.enemigos.length - 1; i >= 0; i--) {
                this.enemigos[i].actualizar();

                if (random(1) < 0.01) {
                    // crear una nueva bala enemiga con cierta probabilidad
                    this.balasEnemigas.push(new Bala(this.enemigos[i].x, this.enemigos[i].y, this.imagenBala, true));
                }

                if (this.enemigos[i].colisiona(this.jugador)) {
                    // terminar el juego si un enemigo colisiona con el jugador
                    this.terminarJuego();
                    return;
                }
            }

            if (this.puntaje >= 100 && this.enemigos.length === 0) {
                // generar nuevos enemigos si se alcanza cierto puntaje y no hay más enemigos
                this.generarEnemigos(8);
            }
        }
    }

    dibujar() {
        if (this.menuVisible) {
            this.mostrarMenu();
        } else if (!this.menuVisible && !this.juegoTerminado) {

            this.jugador.dibujar();

            for (let bala of this.balas) {
                bala.dibujar();
            }

            for (let bala of this.balasEnemigas) {
                bala.dibujar();
            }

            for (let enemigo of this.enemigos) {
                enemigo.dibujar();
            }
        }
        if (this.juegoTerminado) {
            this.mostrarPantallaDeJuegoTerminado();
        }
        if (this.puntaje >= 80) {
            this.mostrarPantallaDeVictoria();
        }
        this.mostrarPuntaje();
    }

    generarEnemigos(num) {
        for (let i = 0; i < num; i++) {
            this.enemigos.push(new Enemigo(random(width), random(height / 2, height), this.imagenEnemigo));
        }
    }

    mostrarPuntaje() {
        textSize(20);
        fill(255);
        textAlign(RIGHT);
        text('Puntaje: ' + this.puntaje, width - 20, 30);
    }

    terminarJuego() {
        this.juegoTerminado = true;
    }

    mostrarPantallaDeJuegoTerminado() {
        background(0);
        textAlign(CENTER);
        textSize(35);
        fill(255);
        text('¡Perdiste!', width / 2, height / 2);
        text('No lograste escapar.', width / 2, height / 1.5);
        this.mostrarPuntaje();
    }

    mostrarPantallaDeVictoria() {
        background(0);
        textAlign(CENTER);
        textSize(35);
        fill(255);
        text('¡Ganaste!', width / 2, height / 2);
        text('Lograste escapar.', width / 2, height / 1.5);
        this.mostrarPuntaje();
    }

    iniciarJuego() {
        this.menuVisible = false;
        this.juegoTerminado = false;
        this.jugador = new Jugador(width / 2, 50, this.imagenJugador);
        this.enemigos = [];
        this.balas = [];
        this.balasEnemigas = [];
        this.puntaje = 0;
        this.generarEnemigos(NUMERO_INICIAL_DE_ENEMIGOS);
    }

    mostrarMenu() {
        background(0);
        textAlign(CENTER);
        textSize(40);
        fill(255);
        text('Minijuego: El Peatón', width / 2, height / 2 - 100);
        textSize(20);
        text('Te movés con las flechitas.\nDisparás con la barra espaciadora.\n¡Presioná ENTER para Iniciar!', width / 2, height / 2);
        text('Hecho por Joaquín Galasso', width / 2, height / 1.5);
    }

    manejarTeclaPresionada(tecla) {
        if (this.menuVisible) {
            // acá quería añadir botones de créditos navegables pero al final no lo hice, tranquilamente se podría hacer
            if (tecla === UP_ARROW) {
            } else if (tecla === DOWN_ARROW) {
            } else if (tecla === ENTER) {
                this.iniciarJuego();
            }
        } else if (!this.juegoTerminado) {
            // controles del juego
            if (tecla === LEFT_ARROW) {
                this.jugador.moverIzquierda();
            } else if (tecla === RIGHT_ARROW) {
                this.jugador.moverDerecha();
            } else if (tecla === UP_ARROW) {
                this.jugador.moverArriba();
            } else if (tecla === DOWN_ARROW) {
                this.jugador.moverAbajo();
            } else if (tecla === 32) { // barra espaciadora
                this.balas.push(new Bala(this.jugador.x, this.jugador.y, this.imagenLibro, false));
            }
        }
    }

    manejarTeclaLiberada(tecla) {
        if (!this.juegoTerminado && !this.menuVisible) {
            // Manejar la liberación de las teclas de los controles del juego
            if (tecla === LEFT_ARROW || tecla === RIGHT_ARROW || tecla === UP_ARROW || tecla === DOWN_ARROW) {
                this.jugador.detenerMovimiento();
            }
        }
    }
}

// clase base para las entidades del juego
class Entidad {
    constructor(x, y, imagen) {
        this.x = x;
        this.y = y;
        this.imagen = imagen;
        this.velocidad = 1;
        this.ancho = 45;
        this.alto = 45;
    }

    actualizar() {
        // este método se sobreescribe en las subclases
    }

    dibujar() {
        image(this.imagen, this.x - ANCHO_IMAGEN / 2, this.y - ALTO_IMAGEN / 2, ANCHO_IMAGEN, ALTO_IMAGEN);
    }

    colisiona(otra) {
        let d = dist(this.x, this.y, otra.x, otra.y);
        return d < ANCHO_IMAGEN / 2;
    }
}

class Jugador extends Entidad {
    constructor(x, y, imagen) {
        super(x, y, imagen);
        this.velocidad = 5;
        this.moviendoIzquierda = false;
        this.moviendoDerecha = false;
        this.moviendoArriba = false;
        this.moviendoAbajo = false;
    }

    actualizar() {
        if (this.moviendoIzquierda) {
            this.x -= this.velocidad;
        }
        if (this.moviendoDerecha) {
            this.x += this.velocidad;
        }
        if (this.moviendoArriba) {
            this.y -= this.velocidad;
        }
        if (this.moviendoAbajo) {
            this.y += this.velocidad;
        }
        this.x = constrain(this.x, 0, width);
        this.y = constrain(this.y, 0, height);
    }

    moverIzquierda() {
        this.moviendoIzquierda = true;
    }

    moverDerecha() {
        this.moviendoDerecha = true;
    }

    moverArriba() {
        this.moviendoArriba = true;
    }

    moverAbajo() {
        this.moviendoAbajo = true;
    }

    detenerMovimiento() {
        this.moviendoIzquierda = false;
        this.moviendoDerecha = false;
        this.moviendoArriba = false;
        this.moviendoAbajo = false;
    }
}

class Bala extends Entidad {
    constructor(x, y, imagen, esBalaEnemiga) {
        super(x, y, imagen);
        this.velocidad = VELOCIDAD_BALA;
        this.esBalaEnemiga = esBalaEnemiga;
    }

    actualizar() {
        if (this.esBalaEnemiga) {
            this.y -= this.velocidad; // mover hacia arriba para las balas enemigas
        } else {
            this.y += this.velocidad; // mover hacia abajo para los libros del jugador
        }
    }

    fueraDePantalla() {
        return this.y < 0 || this.y > height;
    }
}

class Enemigo extends Entidad {
    constructor(x, y, imagen) {
        super(x, y, imagen);
    }

    actualizar() {
        this.y -= this.velocidad + 0.5;
        if (this.y < 0) {
            this.y = height;
            this.x = random(width);
        }
    }
}