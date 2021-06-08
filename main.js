const nombre = document.getElementById("nombreCliente")
const apellido = document.getElementById("apellidoCliente")
const rut = document.getElementById("rutCliente")
const correo = document.getElementById("correoCliente")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings =""
    let entrar = false
    parrafo.innerHTML = ""
    let regexEmail =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if(nombre.value.length <6){
        warnings += 'El nombre no es valido <br>'
        entrar = true
    }
    if(apellido.value.length <3){
        warnings += 'El apellido no es valido <br>'
        entrar = true
    }
   
    if(rut.value.length <9){
        warnings += 'El rut no es valido <br>'
        entrar = true
    }
    if(!regexEmail.test(correo.value)){
        warnings += 'El correo no es valido <br>'
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Datos Enviados"
    }
})

