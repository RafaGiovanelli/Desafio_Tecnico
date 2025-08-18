// * Explique em comentários qual a diferença entre 'type' e 'interface' em TypeScript,
// A interface eu posso utilizar para modelar objetos e tambem posso trabalhar com heranças. É possivel declarar a mesma interface novamente, para atribuir um valor novo.
// Já o type ele serve para realizar uniões e interseções. Não é possivel declarar o mesmo type novamente.
// * e dê exemplos de quando usar um ou outro.

// ? Use comentários para explicar a diferença.
// ? Pode utilizar outras interfaces e tipos como exemplo.

// Exemplo usando interface
interface Person {
  name: string;
  age: number;
}

interface Employee {
  id: number;
  name: string;
  position: string;
}

type Company = {
  name: string;
  address: string;
  cnpj: string;
  employees: number;
  founded: number;
  isActive: boolean;
};

export function main() {
  // Exemplo de Interface:
  interface Car {
    wheels: 4;
  }

  interface Car {
    doors: 4;
  }
  // Eu fazendo essa mesclagem da mesma interface com informações diferentes, ela irá ficar assim:
  interface Car {
    wheels: 4;
    doors: 4;
  }

  // No exemplo abaixo eu faço uma herança das informações que estão dentro da interface "Person" para a interface "Employee".
  interface Employee2 extends Person {
    id: number;
    name: string;
    position: string;
  }

  const dev: Employee2 = {
    id: 1,
    name: "Raphael",
    age: 26,
    position: "Trainee",
  };
  console.log(dev);
  // Resultado do meu console.log:
  /*
  {
    id: 1,
    name: 'Raphael',
    age: 26,
    position: 'Trainee'
  }
  */

  // Exemplo de Type:
  const empresa: Company = {
    name: "Kruzer",
    address: "Avenida Paulista, 2006",
    cnpj: "00.000.000/0001-00",
    employees: 50,
    founded: 2018,
    isActive: true,
  };

  // Exemplo unificando os dados utlizando interseção(&):
  type EmployeeCompany = Employee2 & Company;

  const funcionario: EmployeeCompany = {
    id: 1,
    name: "Raphael",
    age: 26,
    position: "Trainee",
    cnpj: "00.000.000/0001-00",
    address: "Avenida Paulista, 2006",
    employees: 50,
    founded: 2018,
    isActive: true,
  };

  // Exemplo unificando os dados utilizando uniao(|):
  type PersonOrEmployee = Person | Employee;

  const a: PersonOrEmployee = {
    id: 1,
    name: "Raphael",
    position: "Trainee",
  };
  const b: PersonOrEmployee = {
    name: "Raphael",
    age: 26,
  };
  const c: PersonOrEmployee = {
    id: 1,
    name: "Raphael",
    age: 26,
    position: "Trainee",
  };
  console.log(a, b, c);
  // Resultado do meu console.log:
  // { id: 1, name: "Raphael", position: "Trainee" } - Validado pelo Employee
  // { name: "Raphael", age: 26 } - Validado pelo Person
  // { id: 1, name: "Raphael", age: 26, position: "Trainee" } - Validado pelo Person e Employee
  // Utilizando a uniao(|) eu preciso ter todos os campos de pelo menos um dos dois tipos inteiros, resumindo eu não posso criar uma variavel "C" com um dos campos Person ou Employee a menos, tem que ter todos os campos.
}
