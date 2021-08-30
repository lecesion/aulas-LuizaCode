const rLine = require('readline-sync');

console.log(`Menu: \r\n 1. Somar \r\n 2. Subtrair \r\n 3. Multiplicar \r\n 4. Dividir \r\n 5. Encerrar Calculadora`);
let operation = rLine.questionFloat('Informe operacao: ');

if (operation === 5) {
    console.log(`Calculadora encerrada`)
}

let value1 = rLine.questionFloat('Valor 1: ');
let value2 = rLine.questionFloat('Valor 2: ');

while (operation === 1 || 2 || 3 || 4) {
    if (operation === 1) {
        console.log(`${value1 + value2}`)

        operation = rLine.questionFloat('Informe operacao: ');
        value1 = rLine.questionFloat('Valor 1: ');
        value2 = rLine.questionFloat('Valor 2: ');

    } else if (operation === 2) {
        console.log(`${value1 - value2}`)

        operation = rLine.questionFloat('Informe operacao: ');
        value1 = rLine.questionFloat('Valor 1: ');
        value2 = rLine.questionFloat('Valor 2: ');

    } else if (operation === 3) {
        console.log(`${value1 * value2}`)

        operation = rLine.questionFloat('Informe operacao: ');
        value1 = rLine.questionFloat('Valor 1: ');
        value2 = rLine.questionFloat('Valor 2: ');

    } else if (operation === 4) {
        console.log(`${value1 / value2}`)

        operation = rLine.questionFloat('Informe operacao: ');
        value1 = rLine.questionFloat('Valor 1: ');
        value2 = rLine.questionFloat('Valor 2: ');

    } else if (operation === 5) {
        console.log(`Calculadora encerrada`)
        break

    } else {
        console.log('ERROR')
        break
    }
}
