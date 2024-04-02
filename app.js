
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
    speed: 1000,
    loop: true,
});




//ANIMACIONES TEXTO 

var text = document.querySelector('#Tokio');

var textLife = document.querySelector('#Life');

var textStory = document.querySelector('#Story');

var textNight = document.querySelector('#Nights'); 



// TAKING THE CHARS

const strText = text.textContent;
const strTextLife = textLife.textContent;
const strTextNight = textNight.textContent;
const strTextStory = textStory.textContent;

// SPLIT TITLES

const splitText = strText.split("");

const splitTextLife = strTextLife.split("");

const splitTextNight = strTextNight.split("");

const splitTextStory = strTextStory.split("");

console.log(textNight)


text.textContent="";

textLife.textContent="";

//textNight.textContent="";

//textStory.textContent="";

for(let i = 0; i < splitText.length; i++){

    text.innerHTML+= '<span class="lifes">' + splitText[i] +'</span>'
}

for(let i = 0; i <splitTextLife.length; i++){
    textLife.innerHTML+= "<span>" + splitTextLife[i] + "</span>"
}

for(i=0; i < splitTextStory.length; i++){
     textStory.innerHTML+= "<span>" + splitTextStory[i] +"</span>"
}

for(i=0; i< splitTextNight.length; i++){
    textNight.innerHTML+= "<span>" + splitTextNight[i] +"</span>"
}

// FUNCION ONTICK() TITULO LIFESTYLE

let charLife = 0; 
let intervalLife = setInterval(onTickLife, 400)

function onTickLife(){
    const spanLife = textLife.querySelectorAll('span')[charLife];
        spanLife.classList.add('fade');
        textLife.style.color="white"
        charLife++
        if(charLife === splitTextLife.length){
            //console.log(intervalLife)
            completeLife();
            return
    }
}

function completeLife(){
    clearInterval(intervalLife)
    intervalLife = null;
}

// FUNCION ONTICK() TITULO TOKIO

let char = 0;
let interval = setInterval(onTick, 100)

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

let test = document.querySelector(".swiper-slide-active");

let hijos = test.children;

let source = hijos[0].getAttribute('src')

let elementos = document.getElementById('Elemento')

elementos.src= source


function a(){

setTimeout(cambioImagen,150)

}

let  cambioImagen = ()=> {

const test = document.querySelector(".swiper-slide-active");

let hijos = test.children;

let source = hijos[0].getAttribute('src');

var alt = hijos[0].getAttribute('alt')

let elementos = document.getElementById('Elemento')

elementos.src= source

cambioTitulo(alt)

}

var observer = new MutationObserver(function(mutations) {
    a();
});

//  opciones del observer
var config = { attributes: true, childList: true, subtree: true };

// observar el DOM
observer.observe(document.body, config);

// DESAPARECER TITULOS CUANDO NO SON LLAMADOS

textLife.style.display="none";
textNight.style.display="none";
textStory.style.display="none"; 

function b (){
setTimeout(cambioTitulo,150)
}

let cambioTitulo = (alt) => {

text.style.display="none";
textLife.style.display="none";
textNight.style.display="none";
textStory.style.display="none";


switch (alt) {
        case 'TokioNight':
            text.style.display = "inline-block";
            break;
        case 'TokioOne':
            textLife.style.display = "inline-block";
            break;
        case 'TokioN':
            textNight.style.display = "inline-block";
            break;
        default:
            textStory.style.display = "inline-block";
            break;
    }
}

//console.log(text)
