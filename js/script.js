document.addEventListener("DOMContentLoaded", function () {
    console.log("El archivo ajustarEstilos.js se ha cargado correctamente.");

    
    var introLeft = document.querySelector('.intro-left');
    var introRight = document.querySelector('.intro-right');

    function ajustarEstilos() {
        if (introLeft.offsetHeight > introRight.offsetHeight) {
            introLeft.style.flexBasis = '100%';
        } else {
            introLeft.style.flexBasis = '60%'; // O el ancho que desees para intro-left
        }
    }

    // Llama a la función al cargar la página y en el evento de redimensionamiento de la ventana
    ajustarEstilos();
    window.addEventListener('resize', ajustarEstilos);

});