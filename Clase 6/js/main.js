
const calificaciones = [6, 7, 5, 9, 5]

for (let i = 0; i < calificaciones.length; i++) {
    console.log(i, calificaciones[i]);
}

// Quita el primer registro del array
let califQuitada = calificaciones.shift()
califQuitada++

// Agrega a el primer registro del array
calificaciones.unshift(califQuitada)

console.log(califQuitada);
console.log(calificaciones.join('-*-'));

// Concatenar arrays
const calificacionesRestantes = [5, 6]
let todas = calificaciones.concat(calificacionesRestantes)

console.log(todas);





