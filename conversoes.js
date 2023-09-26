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
// String


console.log( numero + Number(numeroString) ); 
console.log( numero + Number(numeroString1) );