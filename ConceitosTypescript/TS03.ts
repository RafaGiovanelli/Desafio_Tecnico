// * Crie uma interface chamada cliente que tenha os campos:
// !  - document:
// !  - name:
// !  - email:
interface Cliente {
  document: number;
  name: string;
  email: string;
}

// * Crie um type chamado ItemPedido com os campos:
// ! - product
// ! - quantity
// ! - unitPrice
type ItemPedido = {
  product: string;
  quantity: number;
  unitPrice: number;
};

// * Crie uma interface chamada Pedido que tenha os campos:
// ! - id
// ! - clientId
// ! - items
// ! - paid
interface Pedido {
  id: number;
  clientId: number;
  items: ItemPedido[];
  paid: boolean;
}

// * Crie uma função chamada getValueOrder que retorna o valor total de um pedido
// * Cria uma função que retorne o resumo do pedido

//? Fique a vontade para implementar novas funções e usar dados mocados.
//? Mas a function principal da chamada precisa ser a main!

// EX 1 - Dados mocadas dentro da função "main":
export function main1() {
  function getValueOrder(order: Pedido): number {
    return order.items.reduce((total, item) => {
      return total + item.quantity * item.unitPrice;
    }, 0);
  }

  function getOrderSummary(order: Pedido, client: Cliente) {
    const total = getValueOrder(order);

    return {
      orderId: order.id,
      clientName: client.name,
      orderItems: order.items,
      total,
      status: order.paid === true ? "Pago" : "Pendente",
    };
  }

  const client: Cliente = {
    document: 1234567890,
    name: "Raphael Giovanelli",
    email: "teste@gmail.com",
  };

  const order: Pedido = {
    id: 1,
    clientId: 1,
    items: [
      { product: "Xbox", quantity: 1, unitPrice: 5000 },
      { product: "Tv", quantity: 1, unitPrice: 3500 },
    ],
    paid: true,
  };

  const totalPedido = getValueOrder(order);
  console.log(`Valor total do pedido é: ${totalPedido}`);

  const resumoPedido = getOrderSummary(order, client);
  console.log(resumoPedido);
}
main1();

// EX 2 - Passando os dados para a função "main" como parametro
export function main2(client: Cliente, order: Pedido) {
  function getValueOrder(order: Pedido): number {
    return order.items.reduce((total, item) => {
      return total + item.quantity * item.unitPrice;
    }, 0);
  }

  function getOrderSummary(order: Pedido, client: Cliente) {
    const total = getValueOrder(order);

    return {
      orderId: order.id,
      clientName: client.name,
      orderItems: order.items,
      total,
      status: order.paid === true ? "Pago" : "Pendente",
    };
  }

  const totalPedido = getValueOrder(order);
  console.log(`Valor total do pedido é: ${totalPedido}`);

  const resumoPedido = getOrderSummary(order, client);
  console.log(resumoPedido);
}

const client: Cliente = {
    document: 1234567890,
    name: "Raphael Giovanelli",
    email: "teste@gmail.com",
  };

  const order: Pedido = {
    id: 1,
    clientId: 1,
    items: [
      { product: "Xbox", quantity: 1, unitPrice: 5000 },
      { product: "Tv", quantity: 1, unitPrice: 3500 },
    ],
    paid: true,
  };
  main2(client, order);
