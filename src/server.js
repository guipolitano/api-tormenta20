const express = require('express');
const routes = require('./routes');
const app = express();
const porta = process.env.PORT || 8080;

app.use(routes);
app.listen(porta);