/*NOME DO BANCO DE DADOS*/
const database = "BD3-Alex-Aula"

/* NOME DO BANCO DA COLEÇÃO DE DADOS: */
const collection = "livraria"

/* CRIAR OU ACESSAR O BANCO DE DADOS: */
use(database);

/* SELECIONA UMA CATEGORIA ESPECIFICA*/
db[collection].find({
  $and: [
    { categoria: { $eq: 'Fantasia Heroica' } },
    { valor: { $lte: 100 } }
  ]
});

