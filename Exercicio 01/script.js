var comprimentoHTML = document.getElementById('comprimento')
var larguraHTML = document.getElementById('largura')

//Função
function calculo() {
  var comprimento = comprimentoHTML.value
  var largura = larguraHTML.value

  if (comprimento && largura > 0) {
    var resultado = comprimento * largura
    var preco = resultado * 200

    document.getElementById('resultadom2').innerHTML = resultado.toFixed(2)
    document.getElementById('resultadopreco').innerHTML =
      'R$:' + ' ' + preco.toFixed(2)
    document.getElementById('infocomp').innerHTML = comprimento
    document.getElementById('infolarg').innerHTML = largura
  } else {
    alert('Dados inválidos.')
  }
}
