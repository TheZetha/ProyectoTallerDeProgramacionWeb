
const button = document.querySelector('.button')
const nav    = document.querySelector('.nav')

button.addEventListener('click',()=>{
    nav.classList.toggle('activo')
})



function changeHeaderColor() {
    var header = document.getElementById('main-header');
    if ((window.scrollY > 0) || (window.innerWidth < 600)) {
        header.style.backgroundColor = '#1C2331'; // Cambia el color si se desplaza o si el ancho es menor a 600px
    } else {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.2)'; // Vuelve al color inicial si no cumple las condiciones
    }
}

window.addEventListener('scroll', changeHeaderColor);
window.addEventListener('resize', changeHeaderColor);