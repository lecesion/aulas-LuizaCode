const express = require('express')
const routers = require('') // arquivo pra onde minha rota irá olhar (arquivo controller)

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routers)

app.listen(3000, function () {
    console.log("Servidor está funcionando.")
});