var numeroHTML = document.getElementById('numero')

function calcular() {
  var numero = parseInt(numeroHTML.value)
  var par

  if (numero != null) {
    for (par >= 1; par <= numero; par++) {
      document.getElementById('resultado').innerHTML = par + '<br />'
    }
  }
}
