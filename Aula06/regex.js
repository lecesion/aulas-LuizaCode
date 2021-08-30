// var regex = new RegExp('aula');

// var outroRegex = /aula/

// console.log(regex.test('aula está legal hoje!'))
// console.log(outroRegex.test('sdwerwerw'))

//const numeros = /./

// const numeros = /\d/  //verificar se existe pelo menos algum número
// console.log(numeros.test('1'))
// console.log(numeros.test('8'))
// console.log(numeros.test('7'))
// console.log(numeros.test('asdja'))

// const numeros = /\D/  //não aceita só dígitos (precisa ter uma letra)
// console.log(numeros.test('1'))
// console.log(numeros.test('8dsaad'))
// console.log(numeros.test('7'))
// console.log(numeros.test('asdja'))

// const numeros = /\s/  //
// console.log(numeros.test('1'))
// console.log(numeros.test('8dsaad'))
// console.log(numeros.test(' '))
// console.log(numeros.test('asdja'))

// const numeros = /\w/  // 
// console.log(numeros.test('1'))
// console.log(numeros.test('8dsaad'))
// console.log(numeros.test('7'))
// console.log(numeros.test('asdja'))

// const numeros = /\W/  //não pode ser só numero e só letras
// console.log(numeros.test('1'))
// console.log(numeros.test('8dsaad'))
// console.log(numeros.test('@'))
// console.log(numeros.test('asdja'))

// const numeros = /[^aula]/  //o circunflexo significa not (ele não aceita o que é 'aula')
// console.log(numeros.test('1'))
// console.log(numeros.test('8dsaad'))
// console.log(numeros.test('@'))
// console.log(numeros.test('aula'))
// console.log(numeros.test('aula asdja'))