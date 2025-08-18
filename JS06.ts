//* O que é spread operator (...) e para que serve?
// spread operator(Sintaxe de Espalhamento em portugues) é uma ferramenta do proprio javascript que permite eu "espelhar" um array em outra variavel, para que eu possa tanto utilizar as informações dele dentro de um outro array, quanto adicionar informações no proprio array.

//? Explique o que é spread operator e dê um exemplo.

//? Fique a vontade para implementar novas funções.
//? A function principal da chamada precisa ser a main!

export function main() {
  // EX 1:
  const carro = ['Honda', 'BMW', 'Audi'];
  const cloneCarro = [...carro];
  cloneCarro.push('Mercedes');
  // Resultado: cloneCarro = ["Honda", "BMW", "Audi", "Mercedes"] - Eu clonei o array "carro" e fiz uma inserção de informação no array "cloneCarro".

  // EX 2:
  const pecasCarro = ['Roda', 'Parafuso'];
  const infoCarro = ['Estepe', ...pecasCarro,'Chave de Roda', 'Triangulo']
  console.log(infoCarro);
  // Resultado: infoCarro = ["Estepe", "Roda", "Parafuso", "Chave de Roda", "Triangulo"] - Eu utilizei o spread operator para inserir as informações do array "pecasCarro" no array infoCarro.
  
  return;
}
main();
