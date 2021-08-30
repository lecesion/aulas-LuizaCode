function pegarUsuarios() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { nome: "Islene", hobby: "dormir" },
                { nome: "Natahlia", hobby: "ler" },
                { nome: "Anne", hobby: "comer" },
            ])
        }, 5000)
    })
}

// async function main() {
//     var usuarios = await pegarUsuarios()
//     console.log(usuarios)
// }


//PRincipal

main()

// var usuarios = pegarUsuarios()
// console.log(usuarios)


//tratamento de imput é custoso em sentido de tempo
// function soma(numA, numB) {
//     let a = Number(numA)
//     let b = Number(numB)
//     if (Number.isNaN(a) || Number.isNaN(b)) {
//         console.log('nao tem numero')
//     } else {
//         console.log(`O resultado foi: ${numA + numB}`)
//     }
// }

// somar(2, 2)


//COMO GERAR UM ERRO
// function verificarString(palavra) {
//     if (typeof palavra == 'string') {
//         console.log('Parabens! vc informou uma palavra')
//     } else {
//         throw new Error('Parametro invalido')
//     }
// }

// verificarString('leticia')
// verificarString(2)

// //TRY CATCH
// try {
//     //fazer isso aqui
//     console.log(`${nome}`)
// } catch (e) {           //e = erro
//     console.log(e)
// } finally {              //não é tão utilizado, mas é uma opção
//     console.log('encerrando o programa')
// }