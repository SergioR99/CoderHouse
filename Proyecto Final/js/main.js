// ----- Variable general -----
const URL = 'http://api.openweathermap.org/data/2.5/forecast?lat=6.217&lon=-75.567&appid=2e324ff67d62aa1208ce988a21f44f5a'
let temperaturaActual = document.getElementById('climaActual')
let diaActual = new Date()
const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
const diaSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado']
const fechaPrincipal = document.getElementById('fecha')
      fechaPrincipal.innerText = `Hoy - ${diaSemana[diaActual.getDay()].slice(0, -2)}, ${diaActual.getDate()} de ${meses[diaActual.getMonth()]}`

// ----- Función para comvertir a Fahrenheit -----
function CambiarFahrenheit(celsius, fahrenheit) {
    const temperaturaFahrenheit = celsius * 1.8 + fahrenheit;
    temperaturaActual.innerText = temperaturaFahrenheit
}

function CambiarCelsius(celsius, fahrenheit) {
    const temperaturaCelsius = (fahrenheit - celsius) * 5 / 9;
    temperaturaActual.innerText = temperaturaCelsius
}

// ----- Array próximos días -----

class ProximosDias {
    constructor (dia, fecha, image, gradosmin, gradosmax){
        this.dia = dia
        this.date = fecha
        this.imagen = image
        this.gradesmin = parseFloat(gradosmin)
        this.gradesmax = parseFloat(gradosmax)
    }
}

const pronosticoDias = []
      pronosticoDias.push (new ProximosDias( diaSemana[diaActual.getDay() + 1],`${diaActual.getDate()+1}/${meses[diaActual.getMonth()]}`, 'img/lluvioso.png', 24, 17));
      pronosticoDias.push (new ProximosDias( diaSemana[diaActual.getDay() + 2],`${diaActual.getDate()+2}/${meses[diaActual.getMonth()]}`, 'img/llluviatrueno.png', 24, 17));
      pronosticoDias.push (new ProximosDias( diaSemana[diaActual.getDay() + 3],`${diaActual.getDate()+3}/${meses[diaActual.getMonth()]}`, 'img/parcialmente-nublado.png', 24, 17));
      pronosticoDias.push (new ProximosDias( diaSemana[diaActual.getDay() + 4],`${diaActual.getDate()+4}/${meses[diaActual.getMonth()]}`, 'img/lluvioso.png', 24, 17));
      pronosticoDias.push (new ProximosDias( diaSemana[diaActual.getDay() + 5],`${diaActual.getDate()+5}/${meses[diaActual.getMonth()]}`, 'img/parcialmente-nublado.png', 24, 17))

for (const pronostico of pronosticoDias) {
    let contenedor = document.getElementById('contenedor-proximos')
    let lista = document.createElement('li')
    lista.innerHTML = `<h3>${pronostico.dia}</h3>
                       <p>${pronostico.date}</p>
                       <img src='${pronostico.imagen}'>
                       <div><p>${pronostico.gradesmin}°</p><p>${pronostico.gradesmax}°</p></div>
                      `
    contenedor.appendChild(lista)
}

// ------------ Eventos -----------

let btnCelsius = document.getElementById('cel')
let btnFahrenheit = document.getElementById('fah')

btnFahrenheit.addEventListener('click', () => {

    alertify.alert("Esta cambiando a Fahrenheit", function(){
        alertify.success('Cambio ejecutado');
    });

    btnCelsius.classList.remove("active")
    btnFahrenheit.className += "active"

    let temperaturaPrincipal = (parseInt(temperaturaActual.innerText));
    CambiarFahrenheit(temperaturaPrincipal, 32)

    let cambioLetra = document.getElementById('cambiaraf')
    cambioLetra.innerText = '°F'
})

btnCelsius.addEventListener('click', () => {

    alertify.alert("Esta cambiando a Celsius", function(){
        alertify.success('Cambio ejecutado');
    });

    btnFahrenheit.classList.remove("active")
    btnCelsius.className += "active"

    let temperaturaPrincipal = (parseInt(temperaturaActual.innerText));
    CambiarCelsius(32, temperaturaPrincipal)

    let cambioLetra = document.getElementById('cambiaraf')
    cambioLetra.innerText = '°C'
})

// ---------- Error de buscador ------------
let buscador = document.getElementById('buscador')
buscador.oninput = () => {
    alertify.error('Funcionalidad no disponible');
}


// Guardar en memoria

localStorage.setItem('pronosticoDias', JSON.stringify(pronosticoDias))
const pronosticoDiasJSON = localStorage.getItem('pronosticoDias')

// pronosticoDiasJSON != '' && pronosticoDiasJSON.length >= 4 ? console.log(pronosticoDiasJSON) : console.log('faltan datos');
// console.log(pronosticoDiasJSON);

// ---------- Conexión a la API ----------
fetch(URL)
    .then (respuesta => respuesta.json())
    .then( datos => {
        console.log(`Ciudad: ${datos.city.name}, Temperatura: ${datos.list[0].main.temp}, Temperatura minima: ${datos.list[0].main.temp_min}, Temperatura maxima: ${datos.list[0].main.temp_max}`);
        console.log(datos);
    })