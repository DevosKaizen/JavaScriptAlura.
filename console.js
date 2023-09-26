// log significa registro

const minhaVar =  true;
const quadrado = 3;
let i;

//função 
function Bloco(){
    for (i = 0; i <= quadrado; i++) {
        console.log('\u2588');
        
    }
}

console.log(245);
console.log("eu sou um texto");
console.log(minhaVar);

// Tratamento de ERRO
// console.error

console.error("\n\n\nvocê nao pode digitar numeros negativos");

Bloco();

console.log('\u2588'); // Barra branca

console.error(new Error("\n \u2588 deu erro \u2588")); // melhor para informar erro
 

// Embora seja o mais utilizado, .log() é um dos vários métodos que podemos utilizar para exibir informações na chamada “saída padrão” - o terminal - enquanto estamos desenvolvendo uma aplicação. A palavra log significa algo como “registro”, então este método apenas registra no terminal o que passamos entre os parênteses, por exemplo o conteúdo de uma variável ou o resultado de uma operação.

// Entre os outros métodos, existem:

// console.error() para exibir mensagens de erro;
// console.table() para visualizar de forma mais organizada informações tabulares;
// console.time() e console.timeEnd() para temporizar período que uma operação de código leva para ser iniciada e concluída;
// console.trace() para exibir a stacktrace de todos os pontos (ou seja, os arquivos chamados) por onde o código executado passou durante a execução.