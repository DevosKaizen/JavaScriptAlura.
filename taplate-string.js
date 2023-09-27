let nome = "Ju";
let idade = 2023-1991;
let cidade = "Poa";

let apresentacao;

apresentacao = "meunome é " + nome + ", minha idade é " + idade + " e nasci em " + cidade;


console.log(apresentacao);
console.log('\n_______________');
// no tamplate ou mascara deve se usar ``crase invez de aspas
apresentacao = `meu nome é ${nome}, minha idade é ${idade} e eu nasci em ${cidade}`; // conhecido como mascara em py
console.log(apresentacao);

//A diferença entre fazer comparações com ==, em que o JavaScript faz conversão entre os tipos de variáveis antes de fazer a comparação, e ===, em que tanto o valor quanto o tipo da variável deve ser o mesmo.
// Como é escrito um operador ternário, com o qual fazemos uma comparação entre valores digitando um ?, seguido da possibilidade true, um : e a possibilidade false, ou seja, comparação ? true : false.
// O porquê do nome “operador ternário”, que se deve ao fato de termos 3 operadores juntos em uma única linha para desempenhar uma tarefa e devolver um resultado.
// O uso da template literal, que facilita a construção de strings que demandam concatenação (a operação em que se junta 2 strings), e foi introduzido no ES6.
// Como usar a template literal, escrevendo o texto entre acentos graves (`) e colocando as variáveis com ${variavel} para que o valor deles fique nessa posição.


// As funções ajudam muito no desenvolvimento de um código, pois colaboram para a separação de trechos de código com funções específicas, tornando-o menor e mais legível, o JavaScript nos oferece algumas funções prontas, como é o caso de funções matemáticas (Math em inglês), alguns exemplos são:

// Math.round(): Faz o arredondamento (round em inglês) de um número de ponto flutuante para o inteiro mais próximo.

// Math.round(4.3) retorna 4
// Math.round(3.85) retorna 4
// Math.round(2.5) retorna 3, quando o número termina com 0.5 a função arredonda para cima
// Math.ceil(): Faz o arredondamento para o valor mais alto, também conhecido como teto (ceil em inglês).

// Math.ceil(5.2) retorna 6
// Math.floor(): Faz o arredondamento para o valor mais baixo, também conhecido como piso (floor em inglês).

// Math.floor(5.2) retorna 5
// Math.trunc() : Desconsidera os números decimais, o que é conhecido como truncamento.

// Math.trunc(4.3) retorna 4
// Math.trunc(4.8) retorna 4
// Math.pow() : Faz a exponenciação de 2 números, quando for simples, como ao quadrado(2) ou cubo(3). Recomenda-se usar a multiplicação por ser mais rápido.

// Math.pow(4 , 2) retorna 4^2 = 16
// Math.pow(2.5 , 1.5) retorna 2.5^(3/2) = 3.9528 ...
// Math.sqrt() : Retorna a raiz quadrada de um número.

// Math.sqrt(64) retorna 8
// Math.min(): Retorna o menor valor entre os argumentos.

// Math.min(0, 150, 30, 20, -8, -200) retorna -200
// Math.max(): Retorna o maior valor entre os argumentos.

// Math.max(0, 150, 30, 20, -8, -200) retorna 150
// Math.random(): Retorna um valor randômico (random em inglês) entre 0 e 1, então não teremos um valor esperado para receber.

// Math.random() retorna 0.7456916270759015
// Math.random() retorna 0.15449802102729304
// Math.random() retorna 0.4214269561951203