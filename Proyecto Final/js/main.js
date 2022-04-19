// ----- Variable general -----
let temperaturaActual = document.getElementById('climaActual')
let diaActual = new Date()
const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
const diaSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado']
const fechaPrincipal = document.getElementById('fecha')
      fechaPrincipal.innerText = `Hoy - ${diaSemana[diaActual.getDay()].slice(0, -2)}, ${diaActual.getDate()} de ${meses[diaActual.getMonth()]}`

// ---------- Obtener ubicación ----------

let ubicacionUser = () => {
    const accesoUbi = ubi => {
        // console.log(ubi);
        const datosCoordenadas = ubi.coords
        let lat = datosCoordenadas.latitude
        let lon = datosCoordenadas.longitude

        // ---------- Conexión a la API ----------
        let URL = `http://api.openweathermap.org/data/2.5/forecast?units=metric&lang=ES&lat=${lat}&lon=${lon}&appid=2e324ff67d62aa1208ce988a21f44f5a`
        
        fetch( URL )
            .then (respuesta => respuesta.json())
            .then (data => {
                    setWeatherApi(data);
                    setDayWeatherApi(data);
                  })
    }
    
    navigator.geolocation.getCurrentPosition(accesoUbi);
}


const setWeatherApi = data => {
    // console.log(data)
    const dataApi = {
        ubicacion: data.city.name,
        pais: data.city.country,
        ubicacion2: data.city.name,
        pais2: data.city.country,
        imagenPrincipal: `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`,
        climaActual: Math.round(data.list[0].main.temp),
        descripcion: data.list[0].weather[0].description,
        viento: data.list[0].wind.speed,
        humedad: data.list[0].main.humidity,
        visibilidad: data.list[0].visibility,
        presion: data.list[0].main.pressure,
    }

    document.getElementById('imagenPrincipal').src = dataApi.imagenPrincipal;
    document.getElementById('file').value = dataApi.humedad;

    console.log( dataApi );

    Object.keys(dataApi).forEach( key => {
        document.getElementById(key).textContent = dataApi[key]
    })
}

const setDayWeatherApi = data => {

    // console.log(data);

    for (let i = 1; i <= 5; i++) {

        const objDias = {
            proxDias: `${diaActual.getDate()+i}/${meses[diaActual.getMonth()]}`,
            climaMinDias: Math.round(data.list[i].main.temp_min),
            climaMaxDias: Math.round(data.list[i].main.temp_max),
            imagenDias: `http://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png`
        }

        let contenedor = document.getElementById('contenedor-proximos')
        let lista = document.createElement('li')
        lista.innerHTML = `<p>${objDias.proxDias}</p>
                        <img src='${objDias.imagenDias}'>
                        <div><p>${objDias.climaMinDias}°</p><p>${objDias.climaMaxDias}°</p></div>
                        `
        contenedor.appendChild(lista)
        
    }
}

document.addEventListener("DOMContentLoaded", ubicacionUser);

// ----- Función para comvertir a Fahrenheit -----

function CambiarFahrenheit(celsius, fahrenheit) {
    const temperaturaFahrenheit = celsius * 1.8 + fahrenheit;
    temperaturaActual.innerText = Number(temperaturaFahrenheit.toFixed(1));
}

function CambiarCelsius(celsius, fahrenheit) {
    const temperaturaCelsius = (fahrenheit - celsius) * 5 / 9;
    temperaturaActual.innerText = Number(temperaturaCelsius.toFixed(1));
}

// ----- Array próximos días -----

// class ProximosDias {
//     constructor (dia, fecha, image, gradosmin, gradosmax){
//         this.dia = dia
//         this.date = fecha
//         this.imagen = image
//         this.gradesmin = parseFloat(gradosmin)
//         this.gradesmax = parseFloat(gradosmax)
//     }
// }

// const pronosticoDias = []
//       pronosticoDias.push (new ProximosDias( diaSemana[diaActual.getDay() + 1],`${diaActual.getDate()+1}/${meses[diaActual.getMonth()]}`, 'img/lluvioso.png', 24, 17));
//       pronosticoDias.push (new ProximosDias( diaSemana[diaActual.getDay() + 2],`${diaActual.getDate()+2}/${meses[diaActual.getMonth()]}`, 'img/llluviatrueno.png', 24, 17));
//       pronosticoDias.push (new ProximosDias( diaSemana[diaActual.getDay() + 3],`${diaActual.getDate()+3}/${meses[diaActual.getMonth()]}`, 'img/parcialmente-nublado.png', 24, 17));
//       pronosticoDias.push (new ProximosDias( diaSemana[diaActual.getDay() + 4],`${diaActual.getDate()+4}/${meses[diaActual.getMonth()]}`, 'img/lluvioso.png', 24, 17));
//       pronosticoDias.push (new ProximosDias( diaSemana[diaActual.getDay() + 5],`${diaActual.getDate()+5}/${meses[diaActual.getMonth()]}`, 'img/parcialmente-nublado.png', 24, 17))

// for (const pronostico of pronosticoDias) {
//     let contenedor = document.getElementById('contenedor-proximos')
//     let lista = document.createElement('li')
//     lista.innerHTML = `<h3>${pronostico.dia}</h3>
//                        <p>${pronostico.date}</p>
//                        <img src='${pronostico.imagen}'>
//                        <div><p>${pronostico.gradesmin}°</p><p>${pronostico.gradesmax}°</p></div>
//                       `
//     contenedor.appendChild(lista)
// }

// ------------ Eventos -----------

let btnCelsius = document.getElementById('cel')
let btnFahrenheit = document.getElementById('fah')

btnFahrenheit.addEventListener('click', () => {

    if (!btnFahrenheit.classList.contains('active')) {

        alertify.alert("Esta cambiando a Fahrenheit", function(){
            alertify.success('Cambio ejecutado');
        });
    
        btnCelsius.classList.remove("active")
        btnFahrenheit.className += "active"
    
        let temperaturaPrincipal = (parseInt(temperaturaActual.innerText));
        CambiarFahrenheit(temperaturaPrincipal, 32)
    
        let cambioLetra = document.getElementById('cambiaraf')
        cambioLetra.innerText = '°F'

    }
})

btnCelsius.addEventListener('click', () => {

    if (!btnCelsius.classList.contains('active')) {

        alertify.alert("Esta cambiando a Celsius", function(){
            alertify.success('Cambio ejecutado');
        });
    
        btnFahrenheit.classList.remove("active")
        btnCelsius.className += "active"
    
        let temperaturaPrincipal = (parseInt(temperaturaActual.innerText));
        CambiarCelsius(32, temperaturaPrincipal)
    
        let cambioLetra = document.getElementById('cambiaraf')
        cambioLetra.innerText = '°C'

    }

})


// ---------- Error de buscador ------------
let buscador = document.getElementById('buscador')
buscador.oninput = () => {
    alertify.error('Funcionalidad no disponible');
}


// Guardar en memoria

// localStorage.setItem('pronosticoDias', JSON.stringify(pronosticoDias))
// const pronosticoDiasJSON = localStorage.getItem('pronosticoDias')

// pronosticoDiasJSON != '' && pronosticoDiasJSON.length >= 4 ? console.log(pronosticoDiasJSON) : console.log('faltan datos');
// console.log(pronosticoDiasJSON);

