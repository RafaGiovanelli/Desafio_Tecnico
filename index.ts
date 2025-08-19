import inquirer from "inquirer";
import { main as varLetConstTest } from "./ConceitosJavascript/JS01.ts";
import { main as hoisting } from "./ConceitosJavascript/JS02.ts";
import { main as logicOperators } from "./ConceitosJavascript/JS03.ts";
import { main as templateString } from "./ConceitosJavascript/JS04.ts";
import { main as destructuring } from "./ConceitosJavascript/JS05.ts";
import { main as spreadOperator } from "./ConceitosJavascript/JS06.ts";
import { main as closure } from "./ConceitosJavascript/JS07.ts";
import { main as promises } from "./ConceitosJavascript/JS08.ts";
import { main as ponteiros } from "./ConceitosJavascript/JS09.ts";
import { main as arrayMethods } from "./ConceitosJavascript/JS10.ts";

const allTests = [
  { function: varLetConstTest, name: "JS01 ~ varLetConstTest" },
  { function: hoisting, name: "JS02 ~ hoisting" },
  { function: logicOperators, name: "JS03 ~ logicOperators" },
  { function: templateString, name: "JS04 ~ templateString" },
  { function: destructuring, name: "JS05 ~ destructuring" },
  { function: spreadOperator, name: "JS06 ~ spreadOperator" },
  { function: closure, name: "JS07 ~ closure" },
  { function: promises, name: "JS08 ~ promises" },
  { function: ponteiros, name: "JS09 ~ ponteiros" },
  { function: arrayMethods, name: "JS10 ~ arrayMethods" },
];

async function app() {
  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "data",
      message: "Escolha um teste para executar:",
      choices: allTests.map((test) => ({
        name: test.name,
        value: test.function,
      })),
    },
  ]);

  await answers.data(); // se for async, aguarda a execução da função
}

app();
