const mongoose = require('./../database/connect_db');

const clienteSchema = new mongoose.Schema({
    nome: String,
    telefone1: String,
    telefone2: String,
    email: String,
}, {collection: 'cliente'});

const cliente = mongoose.model('cliente', clienteSchema);

module.exports = cliente;