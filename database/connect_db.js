//Autor: Harley Macedo
//Classe de conexão com database mongodb
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/projWeb');
//mongoose.Promise = global.Promise;
console.log('connect_db: Conexao estabelecida!');

module.exports = mongoose;