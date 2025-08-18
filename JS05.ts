//* Explique o que é destructuring e dê um exemplo.
// Destructuring(desestruturação em portugues) é uma expressão que possibilita extrair dados de arrays e objetos e manipula-los de forma mais simples.

//? Fique a vontade para implementar novas funções.
//? A function principal da chamada precisa ser a main!

export function main() {
  const carros = ['Honda', 'BMW', 'Audi'];
  const [carro1, carro2, carro3] = carros;
  console.log(carro1);
  console.log(carro2);
  console.log(carro3);

  // Voce pode ignorar um valor caso não queira. Neste caso eu não quero pegar o valor de "Maçã". Exemplo:
  const frutas = ['Mamão', 'Maçã', 'Manga'];
  const [fruta1, , fruta3] = frutas;
  console.log(fruta1);
  console.log(fruta3);
  return;
}
main();
