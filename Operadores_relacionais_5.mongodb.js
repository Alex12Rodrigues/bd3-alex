/*NOME DO BANCO DE DADOS*/
const database = "BD3-Alex-Aula"

/* NOME DO BANCO DA COLEÇÃO DE DADOS: */
const collection = "livraria"

/* CRIAR OU ACESSAR O BANCO DE DADOS: */
use(database);

/* SELECIONA TODOS OS LIVROS PELOS VALORES DECRESCENTES*/
db[collection].find({
  autor: 'J.R.R Tolkien'
})
.sort({ valor: -1})


/* SELECIONA TODOS OS LIVROS PELOS VALORES CRESCENTES*/
db[collection].find({
  autor: 'J.R.R Tolkien'
})
.sort({ valor: 1})







