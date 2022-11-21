const slider = document.getElementById("slider");
let sliderSection = document.querySelectorAll(".slider-section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.getElementById("btn-left");
const btnRight = document.getElementById("btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);


/*Boton de la derecha*/
function Next(){
    let sliderSectionFirst = document.querySelectorAll(".slider-section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend',sliderSectionFirst);
        slider.style.marginLeft= "-100%";
    },500);
}

/*Boton de la izquierda*/
function Prev(){
    let sliderSection = document.querySelectorAll(".slider-section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft= "-100%";
    },500);
}

btnRight.addEventListener('click',function(){
    Next();
})
btnLeft.addEventListener('click',function(){
    Prev();
})

setInterval(function(){
    Next();
},3000);



//Galeria

let rsultado = document.getElementById("resultado");

function replace1() {
    let img1 = document.getElementById("img1").getAttribute('src');
    resultado.setAttribute('src',img1);
}
function replace2() {
    let img2 = document.getElementById("img2").getAttribute('src');
    resultado.setAttribute('src',img2);
}
function replace3() {
    let img3 = document.getElementById("img3").getAttribute('src');    
    resultado.setAttribute('src',img3);
}
function replace4() {
    let img4 = document.getElementById("img4").getAttribute('src');    
    resultado.setAttribute('src',img4);
}




img1.addEventListener('click',function(){
    replace1();
})
img2.addEventListener('click',function(){
    replace2();
})
img3.addEventListener('click',function(){
    replace3();
})
img4.addEventListener('click',function(){
    replace4();
})

