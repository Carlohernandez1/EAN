// Alternar modo claro/oscuro
document.getElementById('modo-luz').addEventListener('click', function () {
    document.body.classList.toggle('modo-oscuro');
    this.textContent = document.body.classList.contains('modo-oscuro') ? '🌙' : '🌞'; // Cambiar entre luna y sol
});


// Aumentar texto
document.getElementById('aumentar-texto').addEventListener('click', function () {
    const currentFontSize = parseFloat(getComputedStyle(document.body).fontSize);
    document.body.style.fontSize = `${currentFontSize + 2}px`;
});

// Disminuir texto
document.getElementById('disminuir-texto').addEventListener('click', function () {
    const currentFontSize = parseFloat(getComputedStyle(document.body).fontSize);
    if (currentFontSize > 10) { // Evita tamaños de texto extremadamente pequeños
        document.body.style.fontSize = `${currentFontSize - 2}px`;
    }
});



// Carrusel funcionalidad
let currentIndex = 0;
const images = document.querySelectorAll('.carrusel-imagen');
const totalImages = images.length;

// Mostrar imagen actual
function showImage(index) {
    images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
            img.classList.add('active');
        }
    });
}

// Cambiar a la siguiente imagen
function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
}

// Cambiar a la imagen anterior
function prevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    showImage(currentIndex);
}

// Configurar botones de control
document.getElementById('next').addEventListener('click', nextImage);
document.getElementById('prev').addEventListener('click', prevImage);

// Cambio automático cada 5 segundos
setInterval(nextImage, 5000);

// Mostrar la primera imagen inicialmente
showImage(currentIndex);
