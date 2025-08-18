//* Qual a diferença entre let, const e var?
// Se voce declarar uma variavel com as palavras-chaves "var" e "let" elas pode ter seus valores alterados durante o codigo e caso use a palavra-chave "const" isso não será possivel. Uma variavel criada com let, nao pode ser declarada novamente, apenas seu valor alterado.
// Caso voce declare uma variavel com as palavras-chave "var", "let" e "const" de forma global e não atribuir valor a elas então "var" e "let" iram ser iniciadas como "undefined" e "const" irá pedir para declarar um valor, umva vez declarado não poderá ser alterado.
// A palavra-chave "var" pode ser acessado por todo código, por conta do processo de hoisting, que faz com que a variavel decladara com "var" seja jogada para o inicio do codigo, fazendo com que o mesmo fique declarado como "undefined" até ter um valor atribuido.
// O mais recomendado entre as 3 é utilizar "let" e "const" para evitar erros inesperados e mais clareza no código.

//? Fique a vontade para implementar novas funções.
//? A function principal da chamada precisa ser a main!

export async function main() {
  console.log("Executando o teste varLetConstTest...");
  // Simula operação assíncrona
  await new Promise((res) => setTimeout(res, 1000));
  console.log("Teste finalizado!");
}
main();
