// tipo de dado
// booleanos

// conversao implicita (permite converter um tipo de dado em outro, numero - string - numero)


const numero = 456
const numeroString = "456"
const numeroString1 = "456a"

console.log(numero == numeroString); // true (converte numero para string e compara)
console.log(numero === numeroString); // false pq pega o tipo tambem

console.log( numero + numeroString ); // converte numero para string e concatena



//conversao explicita (  )  

// Number
// String - toString


console.log( numero + Number(numeroString) ); 
console.log( numero + Number(numeroString1) );




//Já aprendemos os tipos de variáveis que podemos utilizar, entre os quais temos os números, os textos e os booleanos. Porém, como podemos utilizar o valor de uma variável numérica em um texto, ou utilizar uma string que contenha apenas números para fazer contas?

// Para estes casos, no JavaScript vamos utilizar Number() e String(), que vão nos permitir converter os dados para números ou textos.

// String()
// Vamos fazer alguns exemplos de conversão de números e booleanos através de String():


let telefone = 12341234;
console.log("O telefone é " + String(telefone)); // teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings




let largura = "10";
let altura = "5";
console.log( + largura * + altura); // teremos a conversão de String para números realizado usando o + antes das variáveis


let telefone = 12341234;
console.log("O telefone é " + telefone.toString()); // o .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.



let usuarioConectado = false;
console.log(Number(usuarioConectado)); // teremos a conversão da booleana para número, sendo que false (falso) retorna o número 0.
usuarioConectado = true;
console.log(Number(usuarioConectado)); // agora teremos a conversão de true (verdadeiro) para o número 1.



// Dica de boas práticas: Apesar do JavaScript fazer a maioria das conversões de forma correta, problemas podem aparecer, então é sempre bom fazer as conversões de forma explícita. Não é comum usar o operador de soma para fazer a conversão para números, mas este uso é possível. Conversões de booleanos não costumam ser muito usados, mas são possíveis.