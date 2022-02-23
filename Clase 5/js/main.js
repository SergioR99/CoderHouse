// Objeto literal

// const producto1 = {
//     id: 001,
//     titulo: 'Xiaomi',
//     precio: 800000,
//     stock: 4,
// }

// console.log(producto1.titulo);
// console.log(producto1['stock']);


// ----------- FUNCION CONSTRUCTORA -----------------
// Se nombra con mayuscula para indicar

// function Alumno(nombre, edad, curso, nacionalidad) {
//     this.name = nombre
//     this.age = edad
//     this.course = curso
//     this.nationality = nacionalidad
// }

// const alumno1 = new Alumno('Emmely', 22, 'Administracion', 'Colombia')
// const alumno2 = new Alumno('Jacob', 15, 'Desarrollo', 'Gringo')

// console.log(alumno1);

// ----------- METODOS -----------------

// const producto1 = {
//     id: 001,
//     titulo: 'Xiaomi',
//     precio: 800000,
//     stock: 4,
// }

// for (const key in producto1) {
//     console.log(key, producto1[key])
// }

// function Alumno(nombre, edad, curso, nacionalidad) {
//     this.name = nombre
//     this.age = edad
//     this.course = curso
//     this.nationality = nacionalidad,

//     this.mostrarDatos = function () {
//         console.log("Datos:", this.name, this.age, this.course, this.nationality);
//     }
// }

// const alumno1 = new Alumno('Emmely', 22, 'Administracion', 'Colombia')
// alumno1.mostrarDatos()

// ----------- CLASES -----------------
 class Personaje {

     constructor(nombre, vida, poder){
        this.nombre = nombre,
        this.vida = vida,
        this.poder = poder
     }
     atacar (valor){
        this.poder = this.poder + valor
     }
     recibirAtaque (valor){
         const nuevaVida = this.vida - valor
         if (nuevaVida <= 0) {
             console.log(`${this.nombre} Ya esta muerto`);
             this.vida = 0
         } else {
             this.vida = this.vida - valor
         }
     }

     mostrarDatos(){
         console.log(`${this.nombre} tiene ${this.vida} vida y ${this.poder} poder`);
     }

}

const hobbit1 = new Personaje ('Frodo', 10, 50)
const elfo = new Personaje ('Sam',8, 60)
const elfo2 = new Personaje ('Dobby', 9, 70)

elfo.mostrarDatos()
elfo.recibirAtaque(8)
elfo.atacar(5)
elfo.atacar(3)
elfo.mostrarDatos()

