function ganaste(){
    Swal.fire(
        'Felicitaciones!',
        'Has ganado el Juego!',
        'success'
      )
}

function perdiste(){
    Swal.fire({
        icon: 'error',
        title: 'Lamento decirte que perdiste...',
        text: 'Presiona Nuevo Juego para reintentarlo!',
      })
}