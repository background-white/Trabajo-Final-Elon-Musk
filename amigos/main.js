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