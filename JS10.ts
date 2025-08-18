//* Explique o que faz os metodos find,filter e reduce ?
// Find = Serve para procurar o primeiro elemento que bata com a condição explicita e retorna o primeiro que ele encontrar.
// Filter = Posso usa-lo para criar um novo array apenas com os elementos do array original que for true na condição descrita.
// Reduce = Serve para reduzir as informações do array em um unico valor. 

// ? Use demonstre utilizando a constante chamada orders.
//? Fique a vontade para implementar novas funções.
//? A function principal da chamada precisa ser a main!

const orders = [
  {
    id: 1,
    products: [
      { name: "Notebook", quantity: 1, price: 1000 },
      { name: "Phone", quantity: 1, price: 5000 },
      { name: "Tablet", quantity: 1, price: 5000 },
    ],
  },
  {
    id: 2,
    products: [
      { name: "Mouse", quantity: 2, price: 50 },
      { name: "Monitor", quantity: 1, price: 200 },
    ],
  },
  {
    id: 3,
    products: [
      { name: "Keyboard", quantity: 1, price: 100 },
      { name: "Webcam", quantity: 1, price: 150 },
    ],
  },
];

export function main() {
  // EX 1 - Find:
  const produtosProcurados = orders.find(produto => produto.id === 1);
  console.log(produtosProcurados);

  // EX 2 - Find:
  const produtosProcurados2 = orders.map(produto => produto.products.find(computador => computador.name.toLocaleLowerCase() === 'notebook'));
  console.log(produtosProcurados2);
  
  // EX 1 - Filter:
  const produtosFiltrados1 = orders.map(order => order.products.filter(telefone => telefone.name.toLowerCase() === 'phone'));
  console.log(produtosFiltrados1);

  // EX 2 - Filter:
  const produtosFiltrados2 = orders.flatMap(order => order.products).filter(telefone => telefone.name.toLowerCase() === 'phone');
  console.log(produtosFiltrados2);


  // EX 1 - Reduce:
  const somarPreco = orders.map(item => item.products.reduce((total, produto) => total + produto.price * produto.quantity, 0));
  console.log(somarPreco);

  // EX 2 - Reduce:
  const somaTotal = orders.flatMap(item => item.products).reduce((precoTotal, produtos) => precoTotal + produtos.price * produtos.quantity, 0);
  console.log(somaTotal);
}
main();
