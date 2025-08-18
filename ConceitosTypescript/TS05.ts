//* Crie um type chamado Carro com as propriedades:
//!    - brand
//!    - model
//!    - year
//!    - electric
type Carro = {
  brand: string;
  model: string;
  year: number;
  electric: boolean;
};

//* Crie uma função chamada getValue que receba:
//!  - um objeto do tipo Carro
//!  - uma chave que seja uma das propriedades do Carro

//* Essa função deve retornar o valor da propriedade informada.
//* Teste a função passando diferentes propriedades e exiba o resultado no console.

//? Fique a vontade para implementar novas funções e usar dados mocados.
//? Mas a function principal da chamada precisa ser a main!

// EX 1 - Dados mocadas dentro da função "main":
export function main1() {
  function getValue<Key extends keyof Carro>(car: Carro, key: Key): Carro[Key] {
    return car[key];
  }
  const brandCar = getValue(infoCar, "brand");
  const modelCar = getValue(infoCar, "model");
  const yearCar = getValue(infoCar, "year");
  const electricEngine = getValue(infoCar, "electric");

  const isElectric = electricEngine ? "O motor do carro é elétrico" : "O motor do carro não é elétrico";

  console.log("Marca do carro:", brandCar);
  console.log("Modelo do carro:", modelCar);
  console.log("Ano do carro:", yearCar);
  console.log(isElectric);
}

const infoCar: Carro = {
  brand: "BYD",
  model: "Seal",
  year: 2024,
  electric: true,
};
main1();

// EX 2 - Passando os dados para a função "main" como parametro:
export function main2(
  brand: string,
  model: string,
  year: number,
  electric: boolean
) {
  const infoCar: Carro = {
    brand,
    model,
    year,
    electric,
  };

  function getValue<Key extends keyof Carro>(car: Carro, key: Key): Carro[Key] {
    return car[key];
  }
  const brandCar = getValue(infoCar, "brand");
  const modelCar = getValue(infoCar, "model");
  const yearCar = getValue(infoCar, "year");
  const electricEngine = getValue(infoCar, "electric");

  const isElectric = electricEngine ? "O motor do carro é elétrico" : "O motor do carro não é elétrico";

  console.log("Marca do carro:", brandCar);
  console.log("Modelo do carro:", modelCar);
  console.log("Ano do carro:", yearCar);
  console.log(isElectric);
}
main2("BYD", "Seal", 2024, true);