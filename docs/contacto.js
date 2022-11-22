alert("¡Bienvenido!")



function enviardatos(){
    let nombre1 = document.getElementById("nombres").value
    let apellido1 = document.getElementById("apellidos").value
    let correo1 = document.getElementById("correo").value
    let contraseña1 = document.getElementById("contraseña").value

    console.log(nombre1)
    console.log(apellido1)
    console.log(correo1)
    console.log(contraseña1)

}


window.addEventListener("load", function(){
    this.document.getElementById("botonenvio").addEventListener("click", function(){
        alert("LOS DATOS HAN SIDO ENVIADOS")
    })
})

