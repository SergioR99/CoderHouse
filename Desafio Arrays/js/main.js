class Concesionario {
    constructor (nombre, precio, stock){
        this.nombre = nombre.toUpperCase()
        this.valor = parseFloat(precio)
        this.cantidad = stock
    }
}

const motosConcesionario = []
      motosConcesionario.push (new Concesionario('mto9', 47000000, 3));
      motosConcesionario.push (new Concesionario('mto3', 27500000, 5));
      motosConcesionario.push (new Concesionario('nmax', 13500000, 8));
      motosConcesionario.push (new Concesionario('xtz150', 10900000, 13)
)

for (const producto of motosConcesionario) {
    console.log('Moto: ' +producto.nombre,'- Precio: ' + producto.valor, '- Stock: ' + producto.cantidad);
}
