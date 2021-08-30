let express = require('express')
let app = express()
//configuração
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//BANCO DE DADOS
var bancoDeDados = {
    produtos: [{
        id: 1,
        nome: 'chocolate',
        categoria: "Alimentos",
        preco: 10
    },
    {
        id: 2,
        nome: 'iphone',
        categoria: "Smartphone",
        preco: 4000
    },
    {
        id: 3,
        nome: 'sorvete',
        categoria: "Alimentos",
        preco: 20
    },
    {
        id: 4,
        nome: 'notebook',
        categoria: "Informatica",
        preco: 5000
    },

    ]
}

//Programa
var qtdeID = 5

app.listen(2000, function () {
    console.log("Servidor esta funcionando.")
})

app.get('/produtos', (req, res) => {
    res.statusCode = 200
    res.json(bancoDeDados)
})

app.get('/produto/:id', (req, res) => {
    if (isNaN(req.params.id)) {
        res.sendStatus(400)       //bad request: quando a requisição está errada 
    } else {
        var id = parseInt(req.params.id)
        var produto = bancoDeDados.produtos.find(prod => prod.id == id)      //igual a uma função 'for'

        if (produto == undefined) {
            res.sendStatus(404)     //not found: não existe no servidor 
        } else {
            res.json(produto)
            res.sendStatus(200)     //find: devolve o produto encontrado
        }
    }
})

app.post('/produto', (req, res) => {
    var { nome, categoria, preco } = req.body

    if (nome == null || preco == null) {
        res.sendStatus(400)
    } else {
        bancoDeDados.produtos.push({
            id: qtdeID,
            nome,
            categoria,
            preco,
        })
        // res.json(req.body)
        res.sendStatus(201)
        qtdeID++
    }
})

app.delete('/produto/:id', (req, res) => {
    if (isNaN(req.params.id)) {
        res.sendStatus(400)
    } else {
        var id = parseInt(req.params.id)
        var produtoID = bancoDeDados.produtos.findIndex((prod) => prod.id == id)

        if (produtoID == -1) {
            res.sendStatus(404)
        } else {
            bancoDeDados.produtos.splice(produtoID, 1)
            res.sendStatus(200)
        }
    }
})

app.put('/produto/:id', (req, res) => {
    if ((isNaN(req.params.id) || req.body.categoria != undefined)) {
        res.sendStatus(400)
    } else {
        var id = parseInt(req.params.id)
        var produto = bancoDeDados.produtos.find(prod => prod.id == id)

        if (produto == undefined) {
            res.sendStatus(404)
        } else {
            var { nome, categoria, preco } = req.body

            if (nome != undefined) {
                produto.nome = nome
            }

            if (categoria != undefined) {
                produto.categoria = categoria
            }

            if (preco != undefined) {
                produto.preco = preco
            }

            res.sendStatus(200)
        }
    }
})