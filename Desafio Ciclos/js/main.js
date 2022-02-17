let number = prompt('Dame un número para hacer una multiplicación')
for (let i = 1; i <= 10; i++) {
    const operation = parseInt(number) * i
    console.log(`${number} X ${i} = ${operation}`)
}

alert('Continuamos con el desafio')

let repet = prompt('Numero de repeticiones')
for (let i = 0; i < parseInt(repet); i++) {
    console.log('Hola')
}

alert('Continuamos con el desafio')

let accountant = 0
let word = ''

while (word != 'navaja') {
    word = prompt('Hagamos una adivinanza: Lana sube, lana baja');
    accountant++
    if (accountant == 3) {
        console.log('Solo tenias 3 intentos');
        break;
    }
}