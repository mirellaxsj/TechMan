const express = require('express');

const router = express.Router();

const usuarios = require('./controllers/usuarios');
const equipamentos = require('./controllers/equipamentos');
const comentarios = require('./controllers/comentarios');


module.exports = router;