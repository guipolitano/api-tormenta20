const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();
const porta = process.env.PORT || 8080;

app.use(cors(),routes);
app.listen(porta);