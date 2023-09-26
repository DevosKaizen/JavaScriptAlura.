const minimo = 18;
let cliente = 18;

if (cliente >= minimo){
    console.log("cliente pode beber ceva");
} else {
    console.log("cliente pode beber SUCO");
}

cliente = 10;// condiçao V          //True                      //False
console.log(cliente >= minimo ? "cliente pode beber ceva" : "so pode susco"); // TERNARIO

// ||: Operador “ou”, retorna true caso uma condição seja válida;
// &&: Operador “e”, retorna true somente se todas as condições forem válidas;
// != e !==: Operadores “não igual” e “estritamente não igual”, utilizados para comparação, da mesma forma que == e === retornam true ou false.