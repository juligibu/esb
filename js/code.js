// NAVBAR SCROLL

const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 30 && window.screen.width > 880) {
        nav.classList.add('active')
    }else {
        nav.classList.remove('active')
    }
}

// INTERFAZ CARGA

window.onload = function carga() {
    var contenedor = document.getElementById('loader-principal')
        contenedor.style.visibility = 'hidden';
        contenedor.style.opacity = '0';  
}

// RESPONSIVE

addEventListener('DOMContentLoaded', () => {
    const btn_menu = document.querySelector('.btn-menu')
    if (btn_menu) {
        btn_menu.addEventListener('click', () => {
            const menu_items = document.querySelector('.menu-items')
            menu_items.classList.toggle('show')
        })
    }
})

// CARROUSEL

let indice = 1;
muestraSlides(indice);

function avanzaSlide(n){
    muestraSlides( indice+=n );
}

function posicionSlide(n){
    muestraSlides(indice=n);
}
setInterval(function tiempo(){
    muestraSlides(indice+=1)
},4000);
function muestraSlides(n){
    let i;
    let slides = document.getElementsByClassName('miSlider');
    let barras = document.getElementsByClassName('barra');

    if(n > slides.length){
        indice = 1;
    }
    if(n < 1){
        indice = slides.length;
    }
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
    for(i = 0; i < barras.length; i++){
        barras[i].className = barras[i].className.replace(" active", "");
    }

    slides[indice-1].style.display = 'block';
    barras[indice-1].className += ' active';

}

//MODAL

let modal = document.getElementById('miModal');
let flex = document.getElementById('flex');
let abrir = document.getElementById('abrir');
let cerrar = document.getElementById('close');

abrir.addEventListener('click', function(){
    modal.style.display = 'block';
});

cerrar.addEventListener('click', function(){
    modal.style.display = 'none';
});

window.addEventListener('click', function(e){
    console.log(e.target);
    if(e.target == flex){
        modal.style.display = 'none';
    }
});

let modald = document.getElementById('miModald');
let flexd = document.getElementById('flexd');
let abrird = document.getElementById('abrird');
let cerrard = document.getElementById('closed');

abrird.addEventListener('click', function(){
    modald.style.display = 'block';
});

cerrard.addEventListener('click', function(){
    modald.style.display = 'none';
});

window.addEventListener('click', function(e){
    console.log(e.target);
    if(e.target == flex){
        modald.style.display = 'none';
    }
});

let modalt = document.getElementById('miModalt');
let flext = document.getElementById('flext');
let abrirt = document.getElementById('abrirt');
let cerrart = document.getElementById('closet');

abrirt.addEventListener('click', function(){
    modalt.style.display = 'block';
});

cerrart.addEventListener('click', function(){
    modalt.style.display = 'none';
});

window.addEventListener('click', function(e){
    console.log(e.target);
    if(e.target == flex){
        modalt.style.display = 'none';
    }
});