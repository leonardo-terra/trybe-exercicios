const readline = require("readline-sync");

const calculaArea = () => {
  const lado = readline.questionInt("Qual o tamanho do lado?");
  if (lado < 0) return "Valor inválido";
  const area = lado * lado;
  return area;
};

console.log(calculaArea());

module.exports = calculaArea;
