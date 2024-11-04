let index = 0;

function mostrarImagen() {
    const imagenes = document.querySelector('.imagenes');
    const total = imagenes.children.length;
    imagenes.style.transform = `translateX(${-index * 100}%)`;
}

function cambiarImagen() {
    const imagenes = document.querySelector('.imagenes');
    const total = imagenes.children.length;
    index = (index + 1) % total;
    mostrarImagen();
}

// Cambiar imagen cada 3 segundos
setInterval(cambiarImagen, 3000);

// Inicializar mostrando la primera imagen
mostrarImagen();
