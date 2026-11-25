var express = require('express');

module.exports = function () {
  var app = express(); //inicializa o express.
  var home - require('../app/routes/home'); //define a rota para home.
  
  app.set('port', 3000); //Define a variavel de ambiente 'port', que seria onde o servidor vai rodar.

  app.use(express.static('./public')); //Torna os arquivos na pasta public acessíveis para o cliente.
  app.use(app.router);

  app.set('view engine', 'ejs'); //Define a template engine ejs.
  app.set('views', './app/views'); //Define onde encontrar as views.

  home(app);
  
  return app;
};
