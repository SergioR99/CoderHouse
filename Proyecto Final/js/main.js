// ----- Variable general -----
const temperatura = prompt('Ingresa la temperatura')

// ----- Función para comvertir a Fahrenheit -----
function CambiarFahrenheit(celsius, fahrenheit) {
    const temperaturaFahrenheit = celsius * 1.8 + fahrenheit;
    console.log(`La temperatura en °C es de ${temperatura} y en °F es de ${temperaturaFahrenheit}`)
}

CambiarFahrenheit(temperatura, 32)

// ----- Array próximos días -----
class ProximosDias {
    constructor (dia, fecha, image, grados){
        this.dia = dia.toUpperCase()
        this.date = fecha.toUpperCase()
        this.imagen = image
        this.grades = parseFloat(grados)
    }
}

const pronosticoDias = []
      pronosticoDias.push (new ProximosDias('mañana','5/3', '../img/lluvioso.png', 24));
      pronosticoDias.push (new ProximosDias('domingo','6/3', '../img/llluviatrueno.png', 24));
      pronosticoDias.push (new ProximosDias('lunes','7/3', '../img/parcialmente-nublado.png', 24));
      pronosticoDias.push (new ProximosDias('martes','8/3', '../img/lluvioso.png', 24));
      pronosticoDias.push (new ProximosDias('miércoles','9/3', '../img/parcialmente-nublado.png', 24))

for (const pronostico of pronosticoDias) {
    console.log(`Día: ${pronostico.dia} Fecha: ${pronostico.date} Url imagen: ${pronostico.imagen} Temperatura: ${pronostico.grades}`);
}

console.log(ProximosDias.length);

const busquedad = pronosticoDias.find( dias => {
    console.log(dias)
})