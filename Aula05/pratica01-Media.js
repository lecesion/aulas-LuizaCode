const rLine = require('readline-sync')

const aluna = rLine.question('Nome aluno: ');

const nota1 = rLine.questionFloat('Informe nota 1: ');
const nota2 = rLine.questionFloat('Informe nota 2: ');
const nota3 = rLine.questionFloat('Informe nota 3: ');

media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
    console.log(` O aluno(a) ${aluna}, foi APROVADO(A). Sua media e: ${media.toFixed(2)}.`)
} else if (media < 5) {
    console.log(` O aluno(a) ${aluna}, foi REPROVADO(A). Sua media e: ${media.toFixed(2)}.`)
} else {
    console.log(` O aluno(a) ${aluna}, foi para RECUPERAÇÃO. Sua media e: ${media.toFixed(2)}.`)
}


