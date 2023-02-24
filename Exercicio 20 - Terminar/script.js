var numero1HTML = document.getElementById('numero1')
var numero2HTML = document.getElementById('numero2')

let numero1 = parseInt(numero1HTML.value)
let numero2 = parseInt(numero2HTML.value)

// JavaScript program to print the sum
// of all numbers in range L and R

// Function to return the sum of
// all natural numbers
function sumNatural(n) {
  sum = (n * (n + 1)) / 2
  return sum
}

// Function to return the sum
// of all numbers in range L and R
function calcular(numero1, numero2) {
  if (numero1 >= 0 && numero2 >= 0) {
    var resultado = sumNatural(numero2) - sumNatural(numero1 - 1)
    document.getElementById('resultado').innerHTML = 'Resultado: ' + resultado
  }

  //return sumNatural(r) - sumNatural(l - 1)
}

// Driver Code
/* let l = 2
let r = 5 */
//document.write('Sum of Natural numbers from L to R is ' + suminRange(l, r))

// This code is contributed by sravan kumar gottumukkalan
