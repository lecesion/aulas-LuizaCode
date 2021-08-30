//duas funções de um modulo que já existe
let { readFile, writeFile } = require('fs')

// readFile('arquivo.txt', 'uft8', (error, texto) => {
//     if (error) {
//         throw error
//     } else {
//         console.log(texto)
//     }
// })

let novoTexto = 'Pense como um boleto. Um boleto sempre vence.'

writeFile('arquivo.txt', novoTexto, (error) => {
    if (error) {
        throw error
    } else {
        console.log('Deu certo a escrita.')
    }
})