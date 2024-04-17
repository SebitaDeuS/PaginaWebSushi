const menuHamburger = document.querySelector(".menu-hamburgesa");
const navLinks = document.querySelector(".nav-links");
const delivery = document.querySelector(".delivery");
const datosDely = document.querySelector(".contenedor-datos-delivery");




//Menu hamburgesa
menuHamburger.addEventListener('click', () =>{
    navLinks.classList.toggle('mobile-menu')
})

//Scroll para animacion navbar
window.addEventListener("scroll", function(){
    const scrollNav = this.document.querySelector("nav");
    scrollNav.classList.toggle("abajo",window.scrollY>0);
})

//funcion que hace que aparezca el formulario
delivery.addEventListener('click', function(){
    datosDely.classList.toggle('contenedor-delivery-active')
})



