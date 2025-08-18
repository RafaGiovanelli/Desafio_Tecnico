//* O que é hoisting em JavaScript?
//? Explique o conceito de hoisting e como ele afeta a declaração de variáveis e funções.
// Hoisting em javascript é um mecanismo que faz com que as variaveis sejam movidas para o topo do escopo, antes da execução do código. Ela acontece quando uma variavel é declarada com a palavra-chave "var" enquanto "let" e "const" lançam um erro.

//? Fique a vontade para implementar novas funções.
//? A function principal da chamada precisa ser a main!

export function main() {
  // Exemplo de hoisting com "var":
  // Exemplo 1:
  console.log(fruta);
  var fruta;
  fruta = 'Morango';
  // O código irá interpretar assim:
  var fruta;
  console.log(fruta); // fruta is undefined
  fruta = 'Morango';

  // Exemplo 2:
  var carro1 = 'Honda';
  carro2 = 'Bmw';
  console.log(carro1, carro2);
  var carro2;
  // O código irá interpretar assim:
  var carro1 = 'Honda';
  var carro2;
  carro2 = 'Bmw';
  console.log(carro1, carro2); // Honda, Bmw

  // Exemplo 3:
  x = 10;
  y = 20;
  console.log(x, y);
  var x, y;
  // O código irá interpretar assim:
  var x, y;
  x = 10;
  y = 20;
  console.log(x, y); // 10, 20
}
main();
