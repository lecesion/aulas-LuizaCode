// Function: é um 'subprograma' que pode ser chamado por código externo à função

function somar(numero1, numero2=10){
    return numero1 + numero2
}

var numero1 = 10
//var numero 2 = 20
console.log(`O resultado da soma é ${somar(numero1)}`)
console.log(`O resultado da soma é ${somar(numero1,30)}`)

//arrow function
var somar = (numero1, numero2=10) =>{
    return numero1 + numero2
}

var numero1 = 10
//var numero 2 = 20
console.log(`O resultado da soma é ${somar(numero1)}`)
console.log(`O resultado da soma é ${somar(numero1,30)}`)