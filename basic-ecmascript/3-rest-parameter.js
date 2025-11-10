/*

Para começarmos falando sobre Rest Parameter temos que explicara diferença entre ele e o Spread Operator

    * Spread Operator (Espelhamento): "Tira da caixa". Pega um array/objeto e espalha seu conteúdo.
    * Rest Parameter (Parâmetro Resto): "Coloca na caixa". Pega vários argumentos soltos e junta em um único array.


O Parâmetro Rest (...)

Ele é usado exclusivamente na definição dos parâmetros de uma função.

Ele permite que uma função aceite um número indefinido de argumentos e os trate como um array.

Antes do ES6, se você quissesse criar uma função que aceitasse, por exemplo , qualquer número de argumentos para somá-los, você tinha
que usar uma variável especial chamada arguments.

E ficava desse jeito
*/

function somaAntigo(){
    // 'arguments' não é um array de fato. É um "objeto que se parece  com um array".
    // Você não pode usar .map() ou .reduce() nele de forma simples.
    let total =0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

console.log(somarAntigo(2, 2, 2)); // 6
console.log(somarAntigo(10, 20, 30, 40,)); // 100


/*

Agora com o Rest, o código fica mais limpo e arguments não é mais necessário utilizar:

*/


// o '...numeros' é o Parâmetro Rest.
function somarNovo(...numeros){
    // 'numeros' É um array de fato!
    // Se chamarmos somarNovo(10, 20, 30), 'numeros' será [10, 20, 30]
    return numeros.reduce((total,num) => total + num, 0);
}

console.log(somarNovo(2, 2, 2)); // 6
console.log(somarNovo(10, 20, 30, 40)); // 100

/*

O ...numeros na definição da função fala ao JavaScript "Quando esta função for chamada, pegue todos os argumentos que ela receber
, junte-os em um array e chame esse array de numeros."

O Parâmetro Rest deve ser sempre o último parâmetro na definição da função.

Você pode ter parâmetros normais antes dele, mas nada depois.

*/


//       Parâmetro normal       |  Parâmetro Rest
function apresentar(primeiroNome, ...outrosNomes){
    console.log("O primeiro nome é:", primeiroNome);
    console.log("Os outros nomes são:", outrosNomes);
}

// Baseado nisso, se executarmos este código:

apresentar('Ana', 'Beatriz', 'Carlos', 'Daniela');


/*

A saída seria:

O primeiro nome é: Ana
Os outros nomes são: [ 'Beatriz', 'Carlos', 'Daniela' ]

O primeiroNome pegou o primeiro argumento, e o ...outroNomes (o Rest) pegou "todo o resto" e os agrupou num array.

No final Spread e Rest, ambos usam ..., mas são opostos:

1. Spread (Espelhamento)
    * Quando usar: Na criação de arrays/objetos ou na chamada de funções
    * O que faz: Pega um único array/objeto e espalha seus valores.
    * Exemplo: const novoArray = [...arrayAntigo, 4, 5]; (Espalha o arrayAntigo)

2. Rest (Resto)
    * Quando usar: Na definição dos parâmetros de uma função.
    * O que faz: Pega vários argumentots "soltos" e os junta em um único array.
    * Exemplo: function somar(...numeros) {...} (Junta os argumentos em numeros)
    

Com isso terminamos sobre os três conceitos mais importantes do ES6 para manipulação de dados:
Desestruturação, Spread e Rest
*/