const rLine = require('readline-sync');

const chamandoSoma = require('./pratica04-soma')
const chamandoSub = require('./pratica04-subtracao')
const chamandoMult = require('./pratica04-multiplicacao')
const chamandoDiv = require('./pratica04-divisao')

let operation, number1, number2

do {
    console.log(`Menu: \r\n 1. Somar \r\n 2. Subtrair \r\n 3. Multiplicar \r\n 4. Dividir \r\n 5. Encerrar Calculadora`);

    operation = rLine.questionInt('Informe operacao: ');

    if (operation < 5 && operation > 0) {
        number1 = rLine.questionFloat("Valor 1: ")
        number2 = rLine.questionFloat("Valor 2: ")
    }

    switch (operation) {
        case 1:
            console.log(chamandoSoma(number1, number2))
            break
        case 2:
            console.log(chamandoSub(number1, number2))
            break
        case 3:
            console.log(chamandoMult(number1, number2))
            break
        case 4:
            console.log(chamandoDiv(number1, number2))
            break

    }

} while (operation < 5 && operation > 0);

if (operation == 5) {
    console.log('Calculadora encerrada')
} else {
    console.log('ERROR')
}
