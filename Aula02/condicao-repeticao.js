/*// (condicao) ? true : false - (utilizando o if e else)

var peso, altura, imc, condicao;

peso = 59;
altura = 1.65;

imc = peso / (altura * altura);
    console.log(imc);

if(imc < 19.1){
    condicao = 'abaixo do peso';
    console.log(`você está ${condicao}`);
}
else if(imc > 19.1 && imc < 25.8){
    condicao = 'no peso normal';
    console.log(`você está ${condicao}`);
}
else if(imc > 25.8 && imc <= 27.3){
    condicao = 'marginalmente acima do peso';
    console.log(`você está ${condicao}`);
}
else{ 
    console.log(`você está acima do peso`);
}

//switch-case: facilita a escrita de programa em que a seleção deve ser feita entre várias alternativas.
var letra = 'A'
var idade = 8;

switch(letra){
    case 'A':
        idade++;
        console.log('Anne');
        break

    case 'B':
        console.log('Bianca')
        if(idade < 10) {
            idade = idade +2;
            console.log(idade);
        }
        break

    case 'C':
        console.log('Carla');
        break

    case 'D':
        console.log('Dani');
        break

    default:
        console.log('Letra nao existe no alfabeto!');
}

//Prática 04

var pedido = 104
var qtde = 2

switch(pedido){
    case 100:
        valor = 1.2 * qtde;
    console.log(`Cachorro quente - Total: ${valor}`);
    break

    case 101:
        valor = 1.3 * qtde;
    console.log(`Bauru simples - Total: ${valor}`);
    break

    case 102:
        valor = 1.5 * qtde;
    console.log(`Bauru com ovo - Total: ${valor}`);
    break
    
    case 103:
        valor = 1.2 * qtde;
    console.log(`Hamburguer - Total: ${valor}`);
    break

    case 104:
        valor = 1.3 * qtde;
    console.log(`Cheeseburguer - Total: ${valor}`);
    break

    case 105:
        valor = 1.00 * qtde;
    console.log(`Refrigerante - Total: ${valor}`);
    break

    default:
        console.log('Você comprou em outra lanchonete!')
}


/*diferença entre while e for: 
for - o laço sabe quantas vezes será rodado;
while - quando não sabemos a quantidade exata de laços (bloco de comandos irá rodar).*/

/*fluxo de repetição:
for(inicializador; condição; incrementador){
    Bloco de comandos;
}*/

/*//Prática 05

for(var count = 10; count <= 500 ; count++){
    if( count != 100){
    if(count % 18 == 0){
        console.log(`achei um número: ${count}`)
    }   
}
}


for(var count = 500; count >= 10 ; count--){
       if(count % 18 == 0){
        console.log(`achei um número: ${count}`)
        break;
    }   
}*/

//fluxo de repetição: while

var count = 10;

while (count <= 10){
    console.log(count)
    count++;
}

// Repetição com do-while

let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);