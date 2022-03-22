const date = localStorage.getItem('date') || new Date ()

date ? console.log('Ya existe fecha', date  )
     : localStorage.setItem('date', new Date())