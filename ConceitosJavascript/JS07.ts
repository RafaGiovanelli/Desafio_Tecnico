//* O que é closure?
// Closure é quando uma função interna pode utilizar as informações declaradas na função externa.
// ? Explique o conceito de closure e como ele é utilizado em JavaScript.
// ? Use comentarios ou logs e exemplos para demonstrar.

//? Fique a vontade para implementar novas funções.
//? A function principal da chamada precisa ser a main!

// EX 1:
// export function main(valorPizza, valorRefrigerante) {
//   return function restaurante() {
//     const soma = valorPizza + valorRefrigerante;
//     return soma;
//   }
// }
// const pedido = main(50, 10);
// console.log(pedido);

// EX 2:
export function main(valorPizza, valorRefrigerante) {
  let total = valorPizza + valorRefrigerante;

  return {
    adicionarSobremesa(precoSobremesa) {
      total += precoSobremesa;
    },
    adicionarTaxaEntrega(taxaEntrega) {
      total += taxaEntrega;
    },
    obterTotal() {
      return total;
    },
  };
}
const pedido = main(50, 10);
pedido.adicionarSobremesa(15);
pedido.adicionarTaxaEntrega(8);
console.log("Seu pedido ficou no valor de: R$", pedido.obterTotal());