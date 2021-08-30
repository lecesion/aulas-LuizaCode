let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
//console.log(lista.reverse());
console.log(lista);

let tamanho = lista.length - 1;
let aux;

for (i = 0; i < (lista.length) / 2; i++) {
    aux = lista[i]
    lista[i] = lista[tamanho]
    lista[tamanho] = aux
    tamanho--
}

console.log(lista)
