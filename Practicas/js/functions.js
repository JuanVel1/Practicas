//funcion estandar
function captura_valores() {
    let name = document.getElementById("user_name").value
    console.log(name)
    
}

//funcion clousure o anonima

const clousure_function = function(){
    let lastname = document.getElementById("lastname").value
    console.log(lastname)
}

//funcion flecha o arrow
const arrow_function = ()=>{
    let age = document.getElementById("user_age").value
    let mayor_edad = false
    if (age>18)
        mayor_edad = true
    else
        mayor_edad

    //operadores ternarios
    //(condicion)?true:false - que pasa si se cumple- que pasa si no
    age >18? mayor_edad = true : mayor_edad
    age >=18? console.log("Es mayor de edad") : console.log("Es menor de edad")
}