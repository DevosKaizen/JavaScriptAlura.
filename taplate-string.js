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