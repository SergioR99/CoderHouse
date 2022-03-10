const productos = [
    {id: 1, nombre: "Sergio", edad: 22},
    {id: 2, nombre: "Liliana", edad: 53},
    {id: 3, nombre: "Emmely", edad: 22},
    {id: 4, nombre: "Granada", edad: 24},
]

localStorage.setItem('productos', JSON.stringify(productos))
const productosJSON = localStorage.getItem('productos')
console.log(productosJSON);