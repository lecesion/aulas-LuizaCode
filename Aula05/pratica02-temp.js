const rLine = require('readline-sync');

function converterTemperatura(temp) {
    console.log(`A temperatura em F: ${temp * 9 / 5 + 32}`);
}

const temperatura = rLine.questionFloat('Informe a temperatura em C: ');
converterTemperatura(temperatura);

const novaTemperatura = rLine.questionFloat('Informe nova temperatura em C: ')
converterTemperatura(novaTemperatura)




