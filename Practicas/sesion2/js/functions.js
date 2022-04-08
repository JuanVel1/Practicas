const user_data =()=>{
    let user_name = document.getElementById("icon_prefix").value
    let user_contact = document.getElementById("icon_telephone").value
    document.getElementById("salida_generada").innerHTML = user_name + user_contact
}