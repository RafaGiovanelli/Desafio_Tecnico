//* Faça casos de uso dos sinais logicos ==,===, <, >, <=, >= &&, ||.

//? Fique a vontade para implementar novas funções.
//? A function principal da chamada precisa ser a main!

export function main(a, b, c, d) {
  // Exemplos de cada uso dos sinais logicos abaixo:

  // "==" faz uma validação não tao estrita, ou seja, caso o valor seja igual mesmo a tipagem sendo diferente ele vai considerar true.
  if (a == b) {
    console.log("É igual");
  } else {
    console.log("É diferente");
  }

  // "===" faz uma validação estrita, ou seja, caso o valor seja igual mas a tipagem seja diferente ele considera como false. Nesse caso, tanto o valor como a tipagem PRECISAM ser IGUAIS.
  if (a === b) {
    console.log("É igual");
  } else {
    console.log("É diferente");
  }

  // Faz uma validação que caso a variavel A seja menor que B então ele retorna true, senao ele retorna false.
  if (a < b) {
    console.log(`${a} é menor que ${b}`);
  } else {
    console.log(`${a} é maior que ${b}`);
  }

  // Faz uma validação que caso a variavel A seja maior que B então ele retorna true, senao ele retorna false.
  if (a > b) {
    console.log(`${a} é maior que ${b}`);
  } else {
    console.log(`${a} é menor que ${b}`);
  }

  // Faz uma validação que caso a variavel A seja menor que a variavel B ou a variavel A seja igual a variavel B então ele retorna true, senão ele retorna false.
  if (a <= b) {
    console.log(`${a} é menor ou igual a ${b}`);
  } else {
    console.log(`${a} é maior ou igual a ${b}`);
  }

  // Faz uma validação que caso a variavel A seja maior que a variavel B ou a variavel A seja igual a variavel B então ele retorna true, senão ele retorna false.
  if (a >= b) {
    console.log(`${a} é maior ou igual a ${b}`);
  } else {
    console.log(`${a} é menor ou igual a ${b}`);
  }

  // Faz uma validação que caso a variavel A seja maior que a variavel B "E(&&)" a variavel C seja completamente igual a variavel D então ele retorna true, caso uma das duas verificações não seja verdadeira, entao ele dará false.
  if (a > b && c === d) {
    console.log('Verdadeiro');
  } else {
    console.log('Falso');
  }

  // Faz uma validação que caso a variavel A seja menor que B "OU(||)" a variavel C é maior que a variavel D. Neste caso, é necessário apenas uma das opções serem verdadeiras para retornar true, caso as duas sejam falsas entao retornará false.
  if (a < b || c > d) {
    console.log('Verdadeiro');
  } else {
    console.log('Falso');
  }
  return;
}
const validações = main(10, 20, 30, 40);
console.log(validações);

