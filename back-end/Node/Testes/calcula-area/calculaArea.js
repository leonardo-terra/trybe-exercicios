const readline = require("readline-sync");

const calculaArea = () => {
  const lado = readline.questionInt("Qual o tamanho do lado?");
  if (lado < 0) throw new Error("Valor inválido");
  const area = lado * lado;
  return area;
};

module.exports = calculaArea;
