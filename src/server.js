const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();
const porta = process.env.PORT || 8080;

app.use(cors(),routes);

app.use(function(req, res, next) {
    res.status(404).send({
        "message": "Rota não encontrada, olhe a documentação para ver as rotas disponíveis",
        "data": []
    });
});

app.listen(porta);