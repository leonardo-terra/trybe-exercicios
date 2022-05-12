const divisao = require("./operacoes/divisao");
const multiplicacao = require("./operacoes/multiplicacao");
const soma = require("./operacoes/soma");
const subtracao = require("./operacoes/subtracao");

function calculadora(num1, num2, operacao) {
  switch (operacao) {
    case "somar":
      return soma(num1, num2);
      break;

    case "subtrair":
      return subtracao(num1, num2);
      break;

    case "divisao":
      return divisao(num1, num2);
      break;

    case "multiplicar":
      return multiplicacao(num1, num2);

    default:
      return console.log("nao é uma operacao valida");
      break;
  }
}

calculadora(1, 5, "somar");

module.exports = calculadora;
