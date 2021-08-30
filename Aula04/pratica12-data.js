//function
function converteData(data) {
    dia = data.substring(0, 2)
    mes = parseInt(data.substring(3, 5))
    meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    ano = data.substring(6)
    console.log(`${dia} de ${meses[mes - 1]} de ${ano}`)
}
converteData('16/10/1993')

function dataPorExtenso(data) {
    dia = data.substr(0, 2);
    meses = ['janeiro', 'fevereiro', 'março', 'abri', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    mes = parseInt(data.substr(3, 2));
    ano = data.substr(6);
    console.log(`${dia} de ${meses[mes - 1]} de ${ano}`); //[mes-1] acessa o índice escolhido no array meses
}

function dataPorExtenso1(data) {
    let dataArray = data.split('/');
    dia = dataArray[0];
    meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    mes = parseInt(dataArray[1]);
    ano = dataArray[2];
    console.log(`${dia} de ${meses[mes - 1]} de ${ano}`); //[mes-1] acessa o índice escolhido no array meses
}


dataPorExtenso('16/10/2018')

dataPorExtenso('15/09/2028')

dataPorExtenso1('15/02/2008')

//Swich

dataInserida = '22/04/1983';

const myArr = dataInserida.split("/");
console.log(myArr);

dia = myArr[0];
ano = myArr[2];
let mes;

switch (myArr[1]) {
    case '01':
        this.mes = 'Janeiro';
        break;

    case '02':
        this.mes = 'Fevereiro';
        break;

    case '03':
        mes = 'Março';
        break;

    case "04":
        mes = 'Abril';

        break;

    case "05":
        this.mes = 'Maio';
        break;

    case '06':
        this.mes = 'Junho';
        break;

    case '07':
        this.mes = 'Julho';
        break;

    case '08':
        this.mes = 'Agosto';
        break;

    case '09':
        this.mes = 'Setembro';
        break;

    case '10':
        this.mes = 'Outubro';
        break;
    case '11':
        this.mes = 'Novembro';
        break;

    case '12':
        this.mes = 'Dezembro';
        break;

    default:
        console.log("Vazio");
        break;
}

console.log(`${dia} de ${mes} de ${ano}`);

console.log(`${myArr[1]}`);