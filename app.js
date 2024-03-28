

// SWIPER 
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    effect: "cube",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    cubeEffect: {
        shadow: true,
        slideShadows: false,
        shadowOffset: 10,
        shadowScale: 0.0001,
    },
    speed: 2000,
    loop: true,
});

let test = document.querySelector(".swiper-slide-active");

let hijos = test.children;

let source = hijos[0].getAttribute('src')

let elementos = document.getElementById('Elemento')

elementos.src= source

// Iterar sobre los hijos y mostrarlos en la consola
//for (var i = 0; i < hijos.length; i++) {
//  console.log("Hijo " + (i + 1) + ": " + hijos[i].tagName);
//console.log(source);
//}

function a(){

setTimeout(cambioImagen,150)

}

function cambioImagen(){

let test = document.querySelector(".swiper-slide-active");

let hijos = test.children;

let source = hijos[0].getAttribute('src')

let elementos = document.getElementById('Elemento')

elementos.src= source
}

var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    a()
 });
});

// Configurar las opciones del observer
var config = { attributes: true, childList: true, subtree: true };

// Empezar a observar el DOM
observer.observe(document.body, config);


const text = document.querySelector('.titleTokio');

const textLife = document.querySelector('.titleLife');

const textNight = document.querySelector('.titleStory');

const textStory = document.querySelector('.titleNight');


// TAKING THE CHARS


const strText = text.textContent;
const strTextLife = textLife.textContent;
//const strTextNight = textNight.textContent;
//const strTextStory = textStory.textContent;




// SPLIT TITLES

const splitText = strText.split("");

const splitTextLife = strTextLife.split("");



for(let i = 0; i < splitText.length; i++){
    text.innerHTML+= "<span>" + splitText[i] +"</span>"
}



for(let i = 0; i < splitTextLife.length; i++){
    textLife.innerHTML+= "<span>" + splitTextLife[i] +"</span>"
}


console.log(splitTextLife)
//
//
//
//
//    textNight.innerHTML+= "<span>" + splitText[i] +"</span>"
//    textStory.innerHTML+= "<span>" + splitText[i] +"</span>"


let char = 0;

let interval = setInterval(onTick, 80)

function onTick(){

const span = text.querySelectorAll('span')[char];
span.classList.add('fade');
char++



if(char === splitText.length){
complete();
return

}
}



function complete(){
clearInterval(interval)
interval = null;
}

