/* O Spread Operator basicamente "tira os itens da caixa". Ele pega uma estrutura (como um array) e a expande
em seus elementos individuais

1- Spread em Arrays

Para Combinar arrays imagine que você tem duas listas e quer criar uma terceira com todos os itens

Sem o spread ficaria dessa forma

const parte1 = ['a', 'b'];
const parte2 = ['c', 'd'];
const combinado = parte1.concat(parte2); // ['a', 'b', 'c', 'd']

Com o Spread ficaria desse jeito

*/

const parte1 = ['a', 'b'];
const parte2 = ['c', 'd'];
const combinado = [...parte1, ...parte2];

console.log(combinado); // ['a', 'b', 'c', 'd']

/*

 * ...parte1 foi "expandido" e se tornou 'a', 'b'
 * ...porte2 foi "expandido" e se tornou 'c', 'd'
 * O JavaScript então interpretou a linha como: const combinado = ['a', 'b', 'c', 'd'];
*/

/*

2- Para copiarmos Arrays

Se você fizer const copia = original; , você não está criando uma cópia. Você está apenas criando uma nova
referência para o mesmo array.

O Spread é a forma mais fácil de criar uma cópia rasa (shallow copy);

*/

const original = [1, 2, 3];
const copia = [...original];

copia.push(4); // Adiciona um item na cópia

console.log(copia); // [1, 2, 3, 4]
console.log(original); // [1, 2, 3] (O original não foi modificado!)


/*

3- Para imutabilidade (Adicionando itens)

O Spread é excelente para adicionar itens a um array sem modificar o original (um pilar da programação funcional);

*/

const numeros = [1, 2, 3];

// Adiciona no final
const comMaisUm = [...numeros, 4]; // [1, 2, 3, 4]

// Adiciona no começo
const comZero = [0, ...numeros]; // [0, 1, 2, 3]

console.log(numeros); // [1, 2, 3] (O original continua intacto)



/* 

4- O Spread em Objetos

Este é o uso principal. Se você tem dois objetos e quer criar um novo que contenha as propriedades de ambos.

*/

const usuario = {
    nome: 'Douglas',
    idade: 22
};
const infoTrabalho = {
    empresa: 'Tech',
    cargo: 'Engenheiro de Software'
};
const perfilCompleto = { ...usuario, ...infoTrabalho };

console.log(perfilCompleto);

/*
{
    nome: 'Douglas',
    idade: 22,
    empresa: 'Tech',
    cargo: 'Engenheiro de Software'
}
*/

/* 

Acontece que

* ...usuario foi "expandido" e se tronou nome: 'Douglas', idade: 22
* ...infoTrabalho foi "expandido" e se tornou empresa: 'Tech', cargo: 'Engenheiro de Software'
* O JavaScript interpretou a linha como: const perfilCompleto = {`nome: 'Douglas', idade: 22, empresa: 'Tech', cargo: 'Engenheiro de Software'};
*/


/*

5- Para copiar Objetos

Asimm como nos arrays, esta é a forma mais fácil de criar uma cópia rasa (shallow copy) de um objeto:

*/
/*
const original = {a: 1, b: 2};
const copia = { ...original };

copia.c = 3; // Adiciona uma propriedade na cópia

console.log(copia); // { a: 1, b: 2, c: 3}
console.log(original); // { a: 1, b: 2} (O original não foi modificado!)

*/

/*

6- Para imutabilidade (Atualizando Propriedades)

Esse é um padrão para atualizar um estado de em bibliotecas como o React. Você cria uma nova versão do objeto com a propriedade atualizada, em
vez de modificar o original.


Se você espalhar dois objetos que têm a mesma chave, o valor do último objeto a ser espalhado
substituirá os anteriores.

*/

const configuracoes = {
    tema: 'claro',
    notificacoes: true,
    fonte: 16
};

// Queremos "atualizar" o tema para 'escuro' sem mudar o original.

const configAtualizadas = { ...configuracoes, tema: 'escuro' };

console.log(configAtualizadas);
/*
{

    tema: 'escuro', // <-- Veio por último e substituiu
    notificacoes: true,
    fonte: 16
}

*/

console.log(configuracoes); // O original está intacto

/*

 * ...configuracoes espalhou tema: 'claro', notificacoes: true e fonte: 16.
 * Depois, a propriedade tema: 'escuro' foi adicionada.
 * Como a chave tema já existia, o valor 'escuro' (o último a ser definido) venceu.

*/