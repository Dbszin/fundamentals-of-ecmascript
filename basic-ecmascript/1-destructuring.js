/*
O fundamento da desestruração é simplificar o acesso a dados que estão 
"empacotados" dentro de estruturas como objetos ou arrays
*/
/* Como funciona quando se tem um objeto sem desestruração */

const pessoa ={ 
    nome: 'Douglas',
    idade: 22,
    profissao: 'Engenheiro de Software'
};
/* Para usar o nome e idade em variáveis separadas, você faria:*/
 
/* 
const nome = pessoa.nome;
const idade = pessoa.idade;

console.log(nome); // Ana
console.log(idade); // 30

Isso se torna algo que se repete e você tem que escrever pessoa. toda vez para conseguir usar o objeto em questão*/

/* A desestruração nos dá um atalho para conseguir fazer exatamente a mesma coisa. Para o mesmo objeto pessoa, faríamos:*/

const { nome, idade } = pessoa;

console.log (nome); // Douglas
console.log(idade); // 22


/* As chaves no { } no lado esquerdo da atribuição (=) não estão criando um objeto. Elas são a sintaxe de desestruração. Elas dizem ao JavaScript:

1- "Olhe para o objeto à direita(o objeto pessoa."
2- "Dentro dele, encontre uma propriedade chamada nome."
3- "Crie uma nova variável chamada nome e coloque o valor dessa propriedade nela."
4- "Faça o mesmo para a propriedade idade."

É uma forma de "puxar" as propriedades para fora do objeto e transformá-las em variáveis locais com o mesmo nome.

*/