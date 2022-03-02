// ----------- FUNCIONES DE ORDEN SUPERIOR -------------

function regresaFuncion() {
    return () => {console.log('Hola mundo');}
}

// regresaFuncion()()

const nuevaFuncion = regresaFuncion()
nuevaFuncion()

function multiplicarPor (multiplicador) {
    // return numero => {return numero * multiplicador}
    return numero => numero * multiplicador
}

const multiplicarPor10 = multiplicarPor(10)
console.log(multiplicarPor10(5));

function saludador(nombre) {
    return () => console.log('Hola ' + nombre);
}

const saludarSergio = saludador('Sergio')
saludarSergio()


// ------------- FUNCIONES POR PARAMETRO -------------
 
const nombrePersonas = ['Emmely', 'Sergio', 'Natalia']

function transformadorNombres(nombres, transformador) {
     for (const nombre of nombres) {
        console.log(transformador(nombre)); 
     }
 }

 const convertirMayus = texto => texto.toUpperCase() 
 transformadorNombres(nombrePersonas, convertirMayus())