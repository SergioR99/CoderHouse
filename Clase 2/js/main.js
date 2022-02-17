//Parte 1 de la clase

/*let age = prompt("Ingresa tu edad")

if ( age == "") {

    alert("Debe ingresar la edad")

} else {

    if ( age < 18 ) {
        console.log('Menor de edad');
    } else if (age < 30) {
        console.log('Estas en los 20s');
    } else if (age < 40) {
        console.log('Estas en los 30s');
    } else{
        console.log('Mayor de edad');
    }

}*/


//Parte 2 condicionales Actividad

/*let ingreso = prompt('Digite su ingreso')

if ( ingreso < 100) {

    alert(`Su ingreso neto es: ${ingreso}`)

} else if (ingreso < 200) {
     
    let gananciaNeta = ingreso * 0.79
    alert (`Su ganancia neta es: ${gananciaNeta.toFixed(2)}` )

} else {
     
    let gananciaNeta = ingreso * 0.65
    alert ('Su ganancia neta es: ' + gananciaNeta.toFixed(2) )

}*/

//Parte 3

let ageOne = prompt('Persona 1 edad')
let ageTwo = prompt('Persona 1 edad')

if ( ageOne >= 18 && ageTwo >= 18) {

    alert('Ambos son mayores de edad')

} else if ( ageOne >= 18 || ageTwo >= 18 ) {

    alert('Alguno es mayor de edad')

} else {

    alert('Ambos son menores')

}

