/*let texto = '10.99999995'
let number = 10.99999995

let numero = parseFloat(texto)

console.log(typeof(texto))
console.log(typeof(numero))
console.log(parseInt(texto))
console.log(number.toFixed(2))
console.log(isNaN(texto))
console.log(isNaN(number))
console.log(isNaN(typeof(numero)))

var nome = 'Letícia'
console.log(nome.length)

var frase = 'Essa aula tá muito doida'
console.log(frase.indexOf('doida'))

var doida = frase.slice(19,24)
console.log(doida)

var frase = 'Essa aula tá muito doida'

console.log(frase.toUpperCase())
console.log(frase.toLocaleLowerCase())
console.log(frase)

var nome = '             Letícia'
console.log(nome.trim())

console.log(frase.split(" "))
console.log(frase.lastIndexOf("doida"))*/

//ARRAY
var numeros = [1, 2, 3, 4, 5]

console.log(numeros.length)

//.push = acrescenta um ultimo elemento
numeros.push(123)
console.log(numeros)

//.pop = remove o ultimo elemento
numeros.pop()
console.log(numeros)
numeros.pop()
console.log(numeros)

numeros.unshift(0)
console.log(numeros)

numeros.shift()
console.log(numeros)

//remove e adiciona números no array
numeros.splice(2, 0, 6)
console.log(numeros)
numeros.splice(2, 1)
console.log(numeros)

//remove e adiciona números no array
console.log(numeros.indexOf(3))
console.log(numeros.indexOf(10))

console.log(numeros.join(" "))

//inverte array (tras o ultimo primeiro)
console.log(numeros.reverse())