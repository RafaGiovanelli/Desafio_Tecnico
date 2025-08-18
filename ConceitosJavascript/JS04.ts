//* O que significa template string e como usá-la?.
// Template String é uma forma de concatenar uma variavel com string utilizando crases (``) ao em vez de aspas simples ou duplas.

//? Fique a vontade para implementar novas funções.
//? A function principal da chamada precisa ser a main!

export function main(nome, sobrenome, idade) {
  // Exemplo sem template string:
  const informações1 = "Oi, meu nome é " + nome + " " + sobrenome + " e eu tenho " + idade + " anos";
  console.log(informações1);

  // Exemplo com template string:
  const informações2 = `Oi, meu nome é ${nome} ${sobrenome} e eu tenho ${idade} anos!`
  console.log(informações2);
  // new Promise((res) => setTimeout(res, 1000));
  // return;
}
const informaçõesPessoais = main('Raphael', 'Giovanelli', 26);
console.log(informaçõesPessoais);
