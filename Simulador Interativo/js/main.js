function simulador () {

    const moneyRequested = document.getElementById("monto-solicitado").value;
    const dues = document.getElementById("meses-solicitados").value;

    if ( dues <= 23) {

        let result = parseInt(moneyRequested) * 1.5 / parseInt(dues);
        const textChange = document.getElementById('monthly-fee')

        textChange.innerHTML = `Su cuota mensual será de $ ${result.toFixed(0)} por ${dues} meses`
        console.log(result);

        let payments = parseInt(moneyRequested) * 1.5;

        for (let i = 1; i <= dues; i++) {

            payments =  payments - result ;
            console.log(`Pago #${i} cuota $${result.toFixed(0)} total deuda $${payments}`);

        }

    } else if ( dues >= 24) {

        let result = parseInt(moneyRequested) * 1.9 / parseInt(dues);
        const textChange = document.getElementById('monthly-fee')

        textChange.innerHTML = `Su cuota mensual será de $ ${result.toFixed(0)} por ${dues} meses`
        console.log(result);

        let payments = parseInt(moneyRequested) * 1.5;

        for (let i = 1; i <= dues; i++) {

            payments =  payments - result ;
            console.log(`Pago #${i} cuota $${result.toFixed(0)} total deuda $${payments.toFixed(0)}`);

        }

    } else if (moneyRequested !== '' && dues !== ''){

        alert('Debes ingresar los datos solicitados');

    }

}
