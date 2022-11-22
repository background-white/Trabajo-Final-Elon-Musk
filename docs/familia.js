// referencia al botón para subir
let mybutton = document.getElementById("btn-back-to-top");

// llamar a la función scrollFunction cada vez que se mueva el scroll
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    // si se movio a mas de 20px de arriba agregar al boton el estilo display: block; que muestra el boton
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        // si el scroll de arriba es menos de 20px agregar al boton el estilo display: none; que oculta el boton
        mybutton.style.display = "none";
    }
}

// cada vez que se haga click en el boton se llamará a la función backToTop
mybutton.addEventListener("click", backToTop);

function backToTop() {
    // establece el scroll de la pagina en 0px
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}