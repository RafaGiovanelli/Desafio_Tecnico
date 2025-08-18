//* Tipe o objeto a seguir:

const cliente = {
  id: "123",
  name: "João",
  email: "joao@example.com",
  age: 30,
  address: {
    street: "Rua A",
    number: 123,
    city: "São Paulo",
    state: "SP",
  },
  products: [
    {
      name: "Produto 1",
      price: 10.0,
      quantity: 2,
    },
    {
      name: "Produto 2",
      price: 20.0,
      quantity: 1,
    },
  ],
};
// Posso fazer products junto com cliente ou separada, conforme exemplos abaixo:
// EX 1:
type Cliente1 = {
  id: string;
  name: string;
  email: string;
  age: number;
  address: {
    street: string;
    number: number;
    city: string;
    state: string;
  };
  products: {
    name: string;
    price: number;
    quantity: number;
  }[];
};

// EX 2:
type Cliente2 = {
  id: string;
  name: string;
  email: string;
  age: number;
  address: {
    street: string;
    number: number;
    city: string;
    state: string;
  };
  products: Products[];
};

type Products = {
  name: string;
  price: number;
  quantity: number;
};
