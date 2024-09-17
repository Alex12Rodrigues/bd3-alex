/*NOME DO BANCO DE DADOS*/
const database = "BD3-Alex-Aula"

/* NOME DO BANCO DA COLEÇÃO DE DADOS: */
const collection = "livraria"

/* CRIAR OU ACESSAR O BANCO DE DADOS: */
use (database);

// /* SELECIONA O LIVRO COM VALOR MAIOR QUE...*/ 
// db[collection].find(
//   {valor:{$gt: 125}}

// )

/* SELECIONA O LIVRO COM VALOR MENOR QUE...*/ 
db[collection].find(
  {valor:{$lt: 100}}
  
)

