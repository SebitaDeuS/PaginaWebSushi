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



//Validar rut

function validarRut(rut) {
    // Verificar el formato del RUT
    if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rut)) {
        return false;
    }

    // Extraer el número y el dígito verificador
    var splitRut = rut.split('-');
    var numero = splitRut[0];
    var dv = splitRut[1].toUpperCase();

    // Verificar el dígito verificador
    var suma = 0;
    var multiplo = 2;
    for (var i = numero.length - 1; i >= 0; i--) {
        suma += parseInt(numero.charAt(i)) * multiplo;
        if (multiplo < 7) {
            multiplo++;
        } else {
            multiplo = 2;
        }
    }
    var dvEsperado = 11 - (suma % 11);
    dv = (dv === 'K') ? 10 : parseInt(dv);
    return dvEsperado === dv;
}

//validacion registro usuario
function validarFormulario() {
    let rut = document.getElementById('rut').value;
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let email = document.getElementById('email').value;
    let psw = document.getElementById('psw').value;
    let psw1 = document.getElementById('psw1').value;

    if (rut ==='') {
        document.getElementById('mensajeRut').innerText = 'Por favor ingrese su rut.';
        return false;
    } else if(!validarRut(rut)){
        document.getElementById('mensajeRut').innerText = 'El rut ingresado no es valido';
        return false;
    }else {
        document.getElementById('mensajeRut').innerText = '';
    }
    


    if (nombre === '') {
        document.getElementById('mensajeNombre').innerText = 'Por favor ingrese su nombre.';
        return false;
    } else {
        document.getElementById('mensajeNombre').innerText = '';
    }


    if (apellido === '') {
        document.getElementById('mensajeApellido').innerText = 'Por favor ingrese su apellido.';
        return false;
    } else {
        document.getElementById('mensajeApellido').innerText = '';
    }


    if (psw === '') {
        document.getElementById('mensajePsw').innerText = 'Por favor ingrese su contraseña.';
        return false;
    } else {
        document.getElementById('mensajePsw').innerText = '';
    }


    if (psw1 === '') {
        document.getElementById('mensajePsw1').innerText = 'Por favor confirme su contraseña.';
        return false;
    } else if (psw !== psw1) {
        document.getElementById('mensajePsw1').innerText = 'Las contraseñas no coinciden.';
        return false;
    } else {
        document.getElementById('mensajePsw1').innerText = '';
    }
    if(email==''){
        document.getElementById('mensajemail').innerText='Porfavor ingrese su email'
        return false;
    }else{
        document.getElementById('mensajemail').innerText=''
    }
}
   




