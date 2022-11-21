
//subir boton

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


const slider = document.getElementById("slider");
let sliderSection = document.querySelectorAll(".slider-section");
let sliderSectionLast = sliderSection[sliderSection.length - 1];

const btnLeft = document.getElementById("btn-left");
const btnRight = document.getElementById("btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);


/*Boton de la derecha*/
function Next() {
    let sliderSectionFirst = document.querySelectorAll(".slider-section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}

/*Boton de la izquierda*/
function Prev() {
    let sliderSection = document.querySelectorAll(".slider-section");
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = "0%";
    slider.style.transition = "all 0.5s";
    setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
}

btnRight.addEventListener('click', function () {
    Next();
})
btnLeft.addEventListener('click', function () {
    Prev();
})

setInterval(function () {
    Next();
}, 3000);



//Galeria

let rsultado = document.getElementById("resultado");

function replace1() {
    let img1 = document.getElementById("img1").getAttribute('src');
    resultado.setAttribute('src', img1);
}
function replace2() {
    let img2 = document.getElementById("img2").getAttribute('src');
    resultado.setAttribute('src', img2);
}
function replace3() {
    let img3 = document.getElementById("img3").getAttribute('src');
    resultado.setAttribute('src', img3);
}
function replace4() {
    let img4 = document.getElementById("img4").getAttribute('src');
    resultado.setAttribute('src', img4);
}




img1.addEventListener('click', function () {
    replace1();
})
img2.addEventListener('click', function () {
    replace2();
})
img3.addEventListener('click', function () {
    replace3();
})
img4.addEventListener('click', function () {
    replace4();
})

//formulario
var form = document.getElementById("my-form");

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            status.innerHTML = "Gracias por Registrarte!";
            form.reset()
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                } else {
                    status.innerHTML = "¡Ups! Hubo un problema al enviar su formulario"
                }
            })
        }
    }).catch(error => {
        status.innerHTML = "¡Ups! Hubo un problema al enviar su formulario"
    });
}
form.addEventListener("submit", handleSubmit)

