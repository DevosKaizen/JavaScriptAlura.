// boolean

const usuarioLogado = true
const contapagada = false

// truthy ou falsy

// 0 => false
// 1 => true

console.log(0 == false);
console.log("" == false);

console.log(1 == false);
console.log("a" == false);

//null == vazio ou nada
// undefined

let varNull = null;
let varunde;
console.log(varNull);
console.log(varunde);

let numero = 3;
let texto = 'alura';

console.log(typeof numero);
console.log(typeof texto);

console.log(typeof varNull); // objeto , alguns erros nao podem voltar atrás
console.log(typeof varunde);