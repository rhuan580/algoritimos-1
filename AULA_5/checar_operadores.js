//
//
//
//
//
//
//
//
//
//

const operadorEscolhido = "";

// ARITMETICOS
if (operadorEscolhido === "+") {
  console.log("O operador de MAIS é responsavel por somar ou concatear strings");
} else if (operadorEscolhido === "-") {
  console.log("subtrai valores inteiros");
} else if (operadorEscolhido === "*") {
  console.log("multiplica valores inteiros");
} else if (operadorEscolhido === "/") {
  console.log("Divide valores inteiros");
}
// COMPARAÇÃO
else if (operadorEscolhido === "==") {
  console.log("Operador de igualdade, compara se o VALOR é igual");
} else if (operadorEscolhido === "===") {
  console.log("Operador de idêntico, compara se o TIPO e o VALOR  é igual");
} else if (operadorEscolhido === "!==") {
  console.log("Operador de diferente, compara se é DIFERENTE do valor");
} else if (operadorEscolhido === "<=") {
  console.log(
    "Operador de MENOR ou IGUAL, verificar se o valor é menor ou igual"
  );
}
// LOGICO
else if (operadorEscolhido === "&&") {
  console.log("Operador de 'E', todas as condições devem ser verdadeiras");
} else if (operadorEscolhido === "||") {
  console.log(
    "Operador de 'OU', pelo menos uma das condições deve ser verdadeira");
} else if (operadorEscolhido === "!") {
  console.log(
    "Operador 'NOT' OU OPOSIÇÃO, valor contrário ou oposto do original");
}
