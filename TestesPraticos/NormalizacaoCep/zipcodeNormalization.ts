// * Utilizando o require do node pegue os dados do JSON data.json
// * Crie uma função que formate o cep (zipCode) e então faça uma request para uma
// * Api publica de consulta de cep e preencha os campos city, state e address
// * E altere o JSON original com os dados retornados pela API

// ? Pode utilizar qualquer API, e qualquer biblioteca para fazer requisições HTTP
// ? A function principal da chamada precisa ser a main!

import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const listaCepPath = path.join(__dirname, "data.json");
const json = await fs.readFile(listaCepPath, "utf-8");
const listaCep = JSON.parse(json);

export async function main() {
  async function formataCep() {
    for (const zipCode of listaCep.customers) {
      zipCode.address.zipCode = zipCode.address.zipCode.replace(/\D/g, "");
      const consultaCep = await fetch(
        `https://viacep.com.br/ws/${zipCode.address.zipCode}/json/`
      );
      const dataCep = await consultaCep.json();

      if (zipCode.address.zipCode.length === 8) {
        if (!dataCep.erro) {
          zipCode.address.city = dataCep.localidade;
          zipCode.address.state = dataCep.uf;
          zipCode.address.street = dataCep.logradouro;
        } else {
          console.log(`CEP Invalido: ${zipCode.address.zipCode}`);
        }
      } else {
        console.log(`CEP Não encontrado: ${zipCode.address.zipCode}`);
      }
    }
    await fs.writeFile(listaCepPath, JSON.stringify(listaCep, null, 2), "utf-8");
  }
  await formataCep();
  console.log(listaCep);
}
main();
