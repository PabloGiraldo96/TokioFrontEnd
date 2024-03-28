

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


// Obtener todos los títulos
const titles = document.querySelectorAll('.title');

// Iterar sobre cada título
titles.forEach(title => {
    // Obtener el texto del título
    const text = title.textContent;
    
    // Crear un nuevo HTML con cada carácter envuelto en un span
    const newText = [...text].map(char => `<span>${char}</span>`).join('');

    // Reemplazar el contenido del título con el nuevo HTML
    title.innerHTML = newText;

    // Obtener todos los caracteres del título
    const chars = title.querySelectorAll('span');

    // Iterar sobre cada carácter
    chars.forEach((char, index) => {
        // Definir la animación inicial
        char.style.opacity = 0;

        // Definir la animación de entrada
        char.style.transition = 'opacity 3.5s';
        char.style.transitionDelay = `${index * 0.1}s`; // Retrasar la animación de cada carácter
        char.style.opacity = 1;

    // Añadir un pequeño retraso a cada título
    title.style.transitionDelay = `${titles.length * 2.3}s`;

    // Hacer visible el título
    title.style.opacity = 1;
    



    console.log(index)
    });


});
