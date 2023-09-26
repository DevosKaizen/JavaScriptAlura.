// tipo

const meuNumero = 3;

let primeiroNumero = 1;
const segundoNumero = 2;

const operacaoMatematica =  primeiroNumero + segundoNumero;

console.log(operacaoMatematica);

const alura = "Alura";
console.log(alura * primeiroNumero)

console.log('\n\n\n_____________________')
primeiroNumero = 50;
console.log('\n a const é: ', primeiroNumero)
console.log(' o tipo é:', typeof primeiroNumero) // verifica o tipo com typeof
console.log('_____________________')

//RangeError: Quando o código recebe um dado do tipo certo, porém não dentro do formato aceitável. Por exemplo, um processamento que só pode ser feito com números inteiros maiores ou iguais a zero, mas recebe -1.

// ReferenceError: Normalmente ocorre quando o código tenta acessar algo que não existe, como uma variável que não foi definida; muitas vezes é causado por erros de digitação ou confusão nos nomes utilizados, mas também pode indicar um erro no programa.

// SyntaxError: Na maior parte dos casos ocorre quando há erros no programa e o JavaScript não consegue executá-lo. Os erros podem ser métodos ou propriedades escritos ou utilizados de forma incorreta, por exemplo, operadores ou sinais gráficos com elementos a menos, como esquecer de fechar chaves ou colchetes.

// TypeError: Indica que o código esperava receber um dado de um determinado tipo, tal qual uma string de texto, mas recebeu outro, como um número, booleano ou null.