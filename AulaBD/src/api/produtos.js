const express = require("express");
const router = express.Router()

var listaDeProdutos = []

router.get("/produtos", (req, res) => {
    res.json(listaDeProdutos)
})

router.post("/produtos", (req, res) => {
    const dadosProdutos = req.body
    listaDeProdutos.push(dadosProdutos)
    res.send('Produto cadastrato com sucesso!')
})

module.exports = router