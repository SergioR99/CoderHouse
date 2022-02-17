//Primera parte de la clase FOR

/*let number = prompt("Dame un número")

for (let i = 1; i <= 10; i++) {

    const resultEnd = number * i

    if (resultEnd >= 20){
        break;
    }

    if (resultEnd == 15){
        continue;
    }

    console.log(`${number} X ${i} = ${resultEnd}`)

}*/

//Segunda parte de la clase WHILE

//Ejemplo 1
let number;

while (number != 50) {
    number = prompt('Adivina el número')
}

//Ejemplo 2
/*let number = 50;

do {
    number = prompt('Adivina el número')
    console.log(number)
} while (number != 50);*/

//Ejemplo 3
/*let contador = 0
let palabra = ''

while (palabra != 'nacional') {
    palabra = prompt('Soy hincha de quien')
    contador ++

    if (contador == 3) {
        alert(`Perdiste amigo`)
        break;
    }

}*/


//Ejemplo 3
/*let contador = 0
let palabra = 'hola'

while (palabra == 'hola') {
    palabra = prompt('Saludame')
    console.log(palabra)

    if (palabra != 'hola'){
        alert('Chao mija')
    }
}*/


//Segunda parte de la clase SWITCH
/* let number = prompt('Un numero del 1 al 10 divisible entre 3')

 switch ( parseInt(number) ) {
     case 3:
         console.log('Sí, el 3 es divicible entre 3')
         break;
     case 6:
        console.log('Sí, el 6 es divicible entre 3')
        break;
     case 9:
        console.log('Sí, el 9 es divicible entre 9')
        break;
     default:
         alert('El numero no es divicible entre 3')
         break;
 }*/
