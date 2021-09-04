const express = require("express");
const router = express.Router()

router.get("/fornecedores", (req, res) => {
    res.send('Segue lista de fornecedores: ')
})

module.exports = router