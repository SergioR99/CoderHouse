let moneyRequested = document.getElementById("monto-solicitado".value)
let dues = document.getElementById("monto-solicitado".value)

function simulador (moneyRequested, dues) {

    if (dues == '' || moneyRequested == '') {
        alert('Debes ingresar los datos solicitados')
    } else{
        let result = moneyRequested * 1.8 / dues
        return result
    }
}
