//* O que é um ponteiro? Como que ele pode afetar os objetos?
// Ponteiros são variaveis que contem o valor de uma outra variavel pelo seu endereço de memória.
// Quando voce atribui um objeto na variavel, ele está criando uma referencia, ou seja, qualquer alteração que seja feita atraves da referencia que voce criou, irá afetar o objeto original, pois ambas as variaveis estão apontadas para o mesmo local da memoria.

// ? Explique o conceito de ponteiros e de exemplos de como eles funcionam.
// ? Use comentarios ou logs e exemplos para demonstrar.

//? Fique a vontade para implementar novas funções.
//? A function principal da chamada precisa ser a main!

export function main() {
  // Ex 1:
  const carroJapones = {
    marca: ["Honda", "Subaru"],
  };
  const todosCarros = carroJapones.marca;
  todosCarros.push("BMW", "Audi", "Mercedes");
  console.log(todosCarros);
  //O resultado do console.log será = ["Honda", "Subaru", "BMW", "Audi", "Mercedes"] tanto para a variavel "todosCarros" como a variavel "carroJapones" pois eu alterei a variavel que esta recebendo a referencia da original e isso afeta a variavel original.

  // EX 2:
  function carroDoJapao(carro) {
    carro.marca = "Toyota";
  }

  function carroAmericado(carro) {
    carro = { marca: "Ford", modelo: "Ranger" };
  }
  const original = { marca: "Honda", modelo: "Civic" };

  carroDoJapao(original);
  console.log(original);
  // O resultado da variavel original será = { marca: "Toyota", modelo: "Civic" }, pois ela foi chamada na função "carroJapao" e recebeu uma alteração dentro do objeto "carro.marca".

  carroAmericado(original);
  console.log(original);
  // O resultado da variavel original será = { marca: "Toyota", modelo: "Civic" }, pois na função "carroAmericado" ele cria um outro objeto dentro, fazendo com que ele fique alocado em outro espaço de memoria e nao recebendo referencia da variavel "original".
}
main();
