//* Explique e demonstre o uso de um tipo genérico
// Tipo genérico é uma forma de criar um código reutilizavel e flexivel. Ele tambem pode usar outros tipos de dados sem perder a tipagem.

//? Fique a vontade para implementar novas funções.
//? Mas a function principal da chamada precisa ser a main!
export function main<T>(valor: T): T {
  return valor;
}

const a = main("Olá");
const b = main(123);
const c = main(true);
console.log(a, b, c);
// Resultado do console.log = ("Olá",  123,  true)
