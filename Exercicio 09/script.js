var segundosHTML = document.getElementById('segundos')

function calcular() {
  var segundos = segundosHTML.value
  var minutos
  var horas
  const mostrarTempo = (segundos, minutos, horas) => {
    const horasValor = horas < 10 ? '0' + horas : horas
    const minutosValor = minutos < 10 ? '0' + minutos : minutos
    const segundosValor = segundos < 10 ? '0' + segundos : segundos

    document.getElementById('tempo').innerHTML =
      horasValor + ':' + minutosValor + ':' + segundosValor
  }
  if (segundos >= 0) {
    if (segundos >= 60) {
      segundos = 0
      horas++
    }
    if (minutos >= 60) {
      minutos = 0
      horas++
    }
    mostrarTempo(segundos, minutos, horas)
  }
}
