/*NOME DO BANCO DE DADOS*/
const database = "BD3-Alex-Aula"

/* NOME DO BANCO DA COLEÇÃO DE DADOS: */
const collection = "livraria"

/* CRIAR OU ACESSAR O BANCO DE DADOS: */
use (database);

/* SELECIONA O LIVRO COM VALOR MAIOR QUE...*/ 
db[collection].find(
  {valor:{$gte: 100, $lte: 150}}

)

