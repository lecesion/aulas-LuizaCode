const listaNomes = ['Taína', 'Stellinha', 'Tequila', 'Pituzinho', 'Aline'];

function listagem(lista) {
    for (let i = 1; i <= lista.length; i++) {
        console.log(`${i}. ${lista[i - 1]}`);
    }
}

console.log(`Escolha um número para ser excluido da lista:`);
listagem(listaNomes);

const escolha = 2;
console.log(`Opção: ${escolha}`);

listaNomes.splice(escolha - 1, 1);

console.log('Lista após a exclusão:')
listagem(listaNomes);
