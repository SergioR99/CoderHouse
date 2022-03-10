// const btn = document.getElementById('btn')

// btn.addEventListener('click', onClickHandler)

// function onClickHandler() {
//     console.log('click al boton');
// }

// btn.onclick = () => {
//     console.log('click');
//     console.log(ipt.value);
// }

// const ipt = document.getElementById('ipt')
// ipt.oninput = () => {console.log('entrada de input');}


// ------------- Segunda parte clase --------------
// const boton = document.getElementById('btn')

// boton.addEventListener('click', () => {
//     const input = document.getElementById('ipt')
//     const nombreProd = input.value

//     const nuevoProduc = document.createElement('li')
//     nuevoProduc.innerText = nombreProd

//     const root = document.getElementById('root')
//     root.appendChild(nuevoProduc)
// })

// ------------- Tercera parte clase --------------
const send = document.getElementById('send')
send.addEventListener('click', clickEnviar)

function validarFormulario() {
    const usuario = document.getElementById('user')
    const contra = document.getElementById('pass')

    console.log(user.value);
    console.log(contra.value);

}

function clickEnviar (evento) {
    evento.preventDefault()
    console.log(evento.target);
    validarFormulario()
}

    