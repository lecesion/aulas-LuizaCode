let express = require('express')
let api = express()

//CONFIGURAÇÃO
api.use(express.json())
api.use(express.urlencoded({ extended: true }))

//BANCO DE DADOS
var bancoDeDados = {
    catalogoDeLivros: [{
        id: 1,
        nome: 'Sira',
        genero: 'Romance contemporêneo',
        idDoAutor: 1,
        anoPubli: 2009,
        preco: 70,
        estado: 'Novo'
    },
    {
        id: 2,
        nome: 'Uma biografia da depressão',
        genero: 'Psicologia',
        idDoAutor: 2,
        anoPubli: 2005,
        preco: 47,
        estado: 'Semi-novo'
    },
    {
        id: 3,
        nome: 'Ruina e Ascensão',
        genero: 'Fantasia',
        idDoAutor: 3,
        nomeAutor: 'Leigh Bardugo',
        preco: 47,
        estado: 'Usado'
    },
    {
        id: 4,
        nome: 'Harry Potter e a Camera Secreta',
        genero: 'Fantasia',
        idDoAutor: 4,
        anoPubli: 2001,
        preco: 50,
        estado: 'Novo'
    },
    {
        id: 5,
        nome: 'Harry Potter e a Pedra Filosofal',
        genero: 'Fantasia',
        idDoAutor: 4,
        anoPubli: 2000,
        preco: 50,
        estado: 'Novo'
    },
    ],

    catalogoDeAutor: [{
        id: 1,
        nome: 'Maria Duenas',
        nacionalidade: 'Espanhola'
    },
    {
        id: 2,
        nome: 'Christian Dunker',
        nacionalidade: 'Brasileiro'
    },
    {
        id: 3,
        nome: 'Leigh Bardugo',
        nacionalidade: 'Americana'
    },
    {
        id: 4,
        nome: 'J. K. Rolling',
        nacionalidade: 'Britanica'
    },
    ]
}

//PROGRAMA
api.listen(3000, function () {
    console.log('Servidor está funcionando.')
})

//lista de livros
api.get('/livros', (req, res) => {
    res.json(bancoDeDados.catalogoDeLivros)
    res.sendStatus(200)
})

//procurar por ID
api.get("/livro/:id", (req, res) => {
    if (isNaN(req.params.id)) {
        res.sendStatus(400)
    } else {
        var id = parseInt(req.params.id)
        var livro = bancoDeDados.catalogoDeLivros.find((livro) => livro.id == id)

        if (livro == undefined) {
            req.sendStatus(404)
        } else {
            req.json(livro)
            req.sendStatus(200)
        }
    }
})

//procurar por título
api.get('/livros', (req, res) => {
    if (req.query.nome) {
        var nome = req.query.nome
        var livros = bancoDeDados.livros.filter((livro) => livro.nome.toLowerCase().includes(req.query.nome.toLowerCase()))
        if (livros == undefined) {
            res.sendStatus(404);
        } else {
            res.json(livros);
            res.sendStatus(200);
        }

    } else {
        res.json(bancoDeDados.livros)
        res.sendStatus(200)

    }
})

