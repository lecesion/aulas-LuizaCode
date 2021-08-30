function pegarId() {
    console.log('buscando o ID')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5)
        }, 2000)
    })
}

function buscarEmail(id) {
    console.log('buscando o email')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('leticia.cesion@outlook.com')
        }, 3000)
    })
}


function enviarEmail(corpo, para) {
    console.log('Enviando e-mail')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let emailEnviado = true
            if (emailEnviado) {
                resolve({ email: para, time: "5s" })
            } else {
                reject(para)   //função é chamada com essa estrutura
            }
        }, 5000)
    })

}

async function main() {
    var id = await pegarId()
    var email = await buscarEmail(id)

    try {
        await enviarEmail('Oi. Tudo bem?', email)
        console.log(`O email foi enviado com sucesso.`)
        console.log(`Encerrando a caixa de e-mail.`)

    } catch (e) {
        console.log(e)
    }
}

main()

// enviarEmail('Oi. Tudo bem?', email).then(({ email, time }) => {
//     console.log(`O e-mail foi enviado com sucesso para ${email}.`)
//     console.log(`Duracao do envio foi de ${time}.`)
// }).catch((email) => {
//     console.log(`Erro no envio para ${email}.`)
// })



//PROGRAMA PRINCIPAL
// pegarId().then((id) => {
//     buscarEmail(id).then((email) => {
//         enviarEmail('Oi. Tudo bem?', email).then(({ email, time }) => {
//             console.log(`O e-mail foi enviado com sucesso para ${email}.`)
//             console.log(`Duracao do envio foi de ${time}.`)
//         }).catch((email) => { console.log(`Erro no envio para ${email}.`) })
//     })
// })


// console.log('Encerrando a caixa de e-mail.')


// //PROGRAMA INICIA AQUI
// console.log('Iniciando envio do email...')

// enviarEmail('Oi. Tudo bem?', 'leticia.cesion@outlook.com').then(({ email, time }) => {
//     console.log(`O e-mail foi enviado com sucesso para ${email}.`)
//     console.log(`Duracao do envio foi de ${time}.`)
// }).catch((email) => {
//     console.log(`Erro no envio para ${email}.`)
// })

