// Variables
const IMAGENES = [
    'img/montanya.jpg',
    'img/parque.jpg',
    'img/palmeras.jpg'
];
const TIEMPO_INTERVALO_MILESIMAS_SEG = 1000;
let posicionActual = 0;
let $imagen = document.querySelector('#imagen');
let intervalo;


window.onload = function () {

    intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
    renderizarImagen();
} 

function pasarFoto() {
    if(posicionActual >= IMAGENES.length - 1) {
        posicionActual = 0;
    } else {
        posicionActual++;
    }
    renderizarImagen();
}

/**
 * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
 */
function renderizarImagen () {
    $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
}



