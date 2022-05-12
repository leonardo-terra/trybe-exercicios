const { expect } = require("chai");
const calculaArea = require("../calculaArea");

describe("Executa o script calculaArea", () => {
  describe("quando lado é maior que zero", () => {
    it("retorna um number", () => {
      const resposta = calculaArea(2);
      expect(resposta).to.a("number");
    });

    it("retorna 100, quando o lado é 10", () => {
      const resposta = calculaArea(10);
      expect(resposta).to.be.equals(100);
    });
  });

  describe("quando o valor informado for negativo", () => {
    it('deve lançar uma exceção com a mensagem "Valor inválido', () => {
      expect(calculaArea).to.throw("Valor inválido");
    });
  });
});
