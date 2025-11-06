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


/* DESESTRURAÇÃO DE ARRAYS

Esse tópico segue a mesma dinâmica: Simplificar o acesso aos dados. A principal diferença é que, em vez de usarmos "nomes de propriedades" (com {}), nós usamos a "posição" dos elementos (com []).

Imagine que você tem um array simples:
*/

const cores = ['vermelho', 'verde', 'azul'];

/* Para pegar os dois primeiros valores, você faria:

const primeiraCor = cores[0];
const segundaCor = cores[1];

console.log(primeiraCor); // 'vermelho'
console.log(segundaCor); // 'verde'
*/

/* Isso funciona, mas é um pouco verboso.

Com a desestruração, fazemos a mesma coisa em uma única linha:
*/

const [primeiraCor, segundaCor] = cores;

console.log(primeiraCor); // 'vermelho'
console.log(segundaCor); // 'verde/

/* Seguindo a mesma lógica, os colchetes [] no lado esquerdo da atribuição ( = ) são a sintaxe da desestruração. Eles dizem ao JavaScript?

1- "Olhe para o array à direita(o array cores)."
2- "Pegue o primeiro elemento (indice 0) e coloque-o em uma nova variável chamada primeiraCor."
3- "Pegue o segundo elemento (indice 1) e coloque-o em uma nova variável chamada segundaCor."

O nome das variàveis (primeiraCor, segundaCor) é você quem decide. O que importa é a ordem em que elas aparecem.
*/

/* DESESTRURAÇÃO DE ARRAYS EM FUNÇÕES

Existem duas formas principais de usá-la com funções:

1- Para "desempacotar" o retorno de uma funçção.
2- Para "desempacotar" um argumento (parâmetro) que a função recebe.

1. Desestruturando o retorno de uma função

Vamos pensar em uma função que retorno um array com coordenadas [x, y].
*/

function getCoordenadas(){
    // Algum tipo de cálculo
    return [10, 20];
}

/* Sem usarmos a desestruração ficaria assim:

const ponto = getCoordenadas(); // 'ponto' agora é o array [10, 20]

const x = ponto [0];
const y = ponto [1];

console.log(x); // 10
console.log(y); // 20

*/

/* Com a desestruturação nós podemos aplicar diretamento o valor que a função retorna:
*/

const [x, y] = getCoordenadas();

console.log(x); // 10
console.log(y); // 20

/*
1- getCoordenadas() é executada e retorna o array [10, 20].
2- o JavaScript executa: const [x, y] = [10, 20];
3- x recebe o primeiro item (10).
4- y recebe o segundo item (20).

Tornando isso mais limpo e direto.
*/

/*
2. Desestruturando um argumento de array

Agora vamos ver uma função que recebe um array config contendo a largura e a altura.
*/


function aplicarConfig(config){
    // O argumento 'config' é o array [800, 600]
    const largura = config[0];
    const altura = config[1];

    console.log(`Aplicando ${largura} x ${altura}`);
    }

aplicarConfig([800, 600]); // Saída: Aplicando 800x600


/* Com a desestruturação nós substituímos o nome do argumento config pela própria sintaxe de desestruturação:
*/

function aplicarConfig([largura, altura]) {
    // As variáveis 'largura e 'altura' já existem!
    console.log(`Aplicando ${largura}x${altura}`);
}

aplicarConfig([800,600]); // Saída: Aplicando 800x600


/*
1- Chamamos aplicarConfig([800, 600]).
2- A função esperava um array como seu primeiro (e único) argumento.
3- Ela recebeu [800, 600].
4- A sintaxe nos parâmetros ([largura, altura]) fez a desestruturação na hora:
    * Largura recebeu o primeiro item (800).
    * Altura recebeu o segundo item (600).

Isso torna o código dentro da função muito mais limpo, pois você não precisa das linhas consta largura = config[0]; etc.

*/