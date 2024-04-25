function validar() {
    let texto = document.getElementById("idcorreo").value;
    if (texto == ""){
        document.getElementById("msj").className = "text-danger"
    document.getElementById("msj").innerHTML = "Ingresa el Correo";
    }else{
        document.getElementById("msj").className="text-success"
        document.getElementById("msj").innerHTML="Es valido";
    }
}