const saludoUsuario = prompt('Escriba su nombre')
const cambioNombre = document.getElementById('nombre-usuario')

if (saludoUsuario != '') {
    cambioNombre.innerHTML = `Hola ${saludoUsuario}`
} else if (saludoUsuario == 'null') {
    cambioNombre.innerHTML = `Hola Usuario`
}

// ------------- DOM lista -------------

const juegoInteres = [
    {id: 1, nombre: "Elden Rign", estreno: "febrero de 2022", desarrollador: "FromSoftware"},
    {id: 2, nombre: "Call of Duty: Vanguard", estreno: "septiembre de 2021", desarrollador: "Sledgehammer Games"},
    {id: 3, nombre: "Rainbow Six Extraction", estreno: "enero de 2022", desarrollador: "Ubisoft"},
]

for (const juego of juegoInteres) {
    let root = document.getElementById('root')
    let lista = document.createElement('li')
    lista.innerHTML = `<h2>${juego.nombre}</h2>
                       <h3>Desarrollador: ${juego.desarrollador}</h3>
                      <p> Mes de estreno: ${juego.estreno}</p>
                      `
    root.appendChild(lista)

}