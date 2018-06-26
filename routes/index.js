var express = require('express');
var router = express.Router();
var cliente = require('./../model/cliente');

/* GET home page. */
router.get('/', function (req, res, next) {
  cliente.find(function (err, clientes) {
    if (err) {
      throw err;
    }
    //console.log(contatos.length);    
    res.render('index', { 'title': 'Meus Contatos', 'clientes': clientes });
  });
});

router.get('/clienteExcluir/:id', function(req, res, next){
  var id = req.params.id;
  console.log('sou eu:'+ id);
  cliente.remove({_id: id}, function(err){
    if (err){
      console.log('sou eu:'+ id);  
    }
    console.log('Cliente excluido');
    res.redirect('/');
  });
});

//------------------Salvar contato----------------------
router.post('/clienteSalvar', function(req, res, next){
  var nome = req.body.nome;
  var telefone1 = req.body.telefone1;
  var telefone2 = req.body.telefone2;
  var email = req.body.email;
  //console.log(nome);
  var dados = {'nome': nome, 'telefone1': telefone1, 'telefone2': telefone2, 'email': email};
  var novoCliente = new cliente(dados);
  novoCliente.save(dados);
  //console.log('cliente salvo');
  res.redirect('/');
});

//-----------------Atualizar contato-----------------------
router.post('/clienteAtualizar', function(req, res, next){
  var id = req.body.id;
  var nome = req.body.nome;
  var telefone1 = req.body.telefone1;
  var telefone2 = req.body.telefone2;
  var email = req.body.email;
  var dados = {'nome': nome, 'telefone1': telefone1, 'telefone2': telefone2, 'email': email};
  cliente.update({'_id': id}, dados, function(err ){
    if (err) throw err;

    console.log('Cliente atualizado!');
    res.redirect('/');
  } );
  
});
module.exports = router;
