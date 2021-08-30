const mes = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
const dia = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

for (let count = 0; count < mes.length; count++) {
    console.log(`O mês ${mes[count]} tem ${dia[count]} dias`)
}