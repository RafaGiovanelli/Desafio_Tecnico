//* O que são promises e como funcionam?
// Promises(Promessa em português) é um objeto usado para lidar com operações assíncronas. Ela representa uma promessa de que algo irá acontecer no futuro.
// A promise tem alguns estados, que são eles: Pending, fulfilled  e Rejected.
// Pending é quando a promise não foi executada ou está aguardando condição para iniciar.
// fulfilled quando a operação assincrona conclui seu codigo com sucesso.
// Rejected é quando a operação assincrona teve algum problema ou erro durante o processo.

// ? Explique o conceito de promises e como elas são utilizadas em JavaScript.
// ? Use comentarios ou logs e exemplos para demonstrar.

//? Fique a vontade para implementar novas funções.
//? A function principal da chamada precisa ser a main!

export function main() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Passou 5 segundos!");
    }, 5000);
  });
}
main().then((mensagem) => {
  console.log(mensagem);
});
// Log: "Passou 5 segundos!" 
