//percorrer numeros - for
//condição - se o 1001 numero primo foi encontrado

let primosEncontrados = 0
let dividendo
let ehPrimo

for (dividendo = 2; primosEncontrados < 1001; dividendo++) {
    ehPrimo = true
    for (let divisor = 2; dividendo > divisor; divisor++) {
        if (dividendo % divisor == 0) {
            ehPrimo = false;
            break
        }
    }

    if (ehPrimo == true) {
        primosEncontrados++
    }
}

console.log(`O 1001 numero primo é ${--dividendo}`)