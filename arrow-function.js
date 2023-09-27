

nome = "caralho";
function apresentar(nome) {
    return `meu nome é ${nome}`;
}
//  Arrow function veio com ES6     || nao pode ser nomeada sempre vem com uma const mais uma variavel || se tiver mais de uma linha precisa de chaves.
const apresentarArrow = nome => `meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

//arrow com mais de uma linha

const somaNumeroPequenos = (num1, num2) => {
    if (num1 > 10 ||num2 > 10) {
        return " somente numeros de 1 a 9"
    } else {
        return num1 + num2;
    }
}
// HOISTING: arrow se comporta como uma expressao