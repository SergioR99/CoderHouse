const boton = document.getElementById('ingresar')

function validarFormulario() {

    const usuario = document.getElementById('user')
    const contra = document.getElementById('contrasenia')

    if (usuario.value == "" || contra.value == "") {

        usuario.className += "alerta"
        contra.className += "alerta"

        const addText = document.getElementById('texto-error')
        addText.innerText = 'Debe diligenciar los campos'

    } else {
        console.log(`usuario: ${usuario.value} contraseña: ${contra.value}`);

        usuario.classList.remove("alerta")
        contra.classList.remove("alerta")

        const addText = document.getElementById('texto-error')
        addText.innerText = `Datos ingresados con exito`
    }
}

boton.addEventListener('click', validarFormulario)
