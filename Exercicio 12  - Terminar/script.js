var coeficienteaHTML = document.getElementById('coeficientea')
var coeficientebHTML = document.getElementById('coeficienteb')
var coeficientecHTML = document.getElementById('coeficientec')

function calcular() {
  var coeficienteA = parseFloat(coeficienteaHTML.value)
  var coeficienteB = parseFloat(coeficientebHTML.value)
  var coeficienteC = parseFloat(coeficientecHTML.value)
  var delta
  //Cálculo Delta
  var b2 = coeficienteB * coeficienteB
  var ac = -4 * coeficienteA * coeficienteC

  if (ac > 0) {
    delta = b2 + ac
    var a2 = coeficienteA * 2

    var x1 = -coeficienteB + Math.sqrt(delta) / a2
    var x2 = -coeficienteB - Math.sqrt(delta) / a2

    document.getElementById('x1').innerHTML = 'X1 = ' + x1.toFixed(4)
    document.getElementById('x2').innerHTML = 'X2 = ' + x2.toFixed(4)
    return
  } else {
    delta = b2 - ac
    var a2 = coeficienteA * 2

    var x1 = -coeficienteB + Math.sqrt(delta) / a2
    var x2 = -coeficienteB - Math.sqrt(delta) / a2

    document.getElementById('x1').innerHTML = 'X1 = ' + x1.toFixed(4)
    document.getElementById('x2').innerHTML = 'X2 = ' + x2.toFixed(4)
  }
}
