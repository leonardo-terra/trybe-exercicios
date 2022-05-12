const { expect } = require("chai");

const testarCalculadora = require("../calculadora");

describe("Testa se a calculadora consegue, ", () => {
  it("somar dois números. ", () => {
    const resposta = testarCalculadora(1, 2, "somar");
    expect(resposta).equals(3);
  });

  it("subtrair dois números. ", () => {
    const resposta = testarCalculadora(5, 2, "subtrair");
    expect(resposta).to.be.equals(3);
  });

  it("dividir dois números. ", () => {
    const resposta = testarCalculadora(6, 2, "divisao");
    expect(resposta).to.be.equals(3);
  });

  it("multiplicar dois números. ", () => {
    const resposta = testarCalculadora(1, 3, "multiplicar");
    expect(resposta).to.be.equals(3);
  });
});
