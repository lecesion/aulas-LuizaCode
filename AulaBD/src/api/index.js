const express = require("express");

const produtosRouter = require('./produtos')
const fornecedoresRounter = require('./fornecedores');
const router = require("./produtos");

const rounter = express.Router()

router.get('/', (req, res)) => {
    res.send('Yamn yamn')
})

