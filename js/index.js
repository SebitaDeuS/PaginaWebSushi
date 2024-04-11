const menuHamburger = document.querySelector(".menu-hamburgesa");
const navLinks = document.querySelector(".nav-links");
const delivery = document.querySelector(".delivery");
const datosDely = document.querySelector(".contenedor-datos-delivery");





menuHamburger.addEventListener('click', () =>{
    navLinks.classList.toggle('mobile-menu')
})

window.addEventListener("scroll", function(){
    const scrollNav = this.document.querySelector("nav");
    scrollNav.classList.toggle("abajo",window.scrollY>0);
})

delivery.addEventListener('click', function(){
    datosDely.classList.toggle('contenedor-delivery-active')
})



