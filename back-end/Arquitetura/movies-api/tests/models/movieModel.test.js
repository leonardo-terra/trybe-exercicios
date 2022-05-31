const sinon = require("sinon");
const { expect } = require("chai");
const connection = require("../../models/connection");
const MoviesModel = require("../../models/movieModel");

describe("Insere um novo filme no BD", () => {
  const payloadMovie = {
    title: "Example Movie",
    directedBy: "Jane Dow",
    releaseYear: 1999,
  };

  before(() => {
    //O RETORNO DO POST NO MODELS VAI SER INSERTID = 1
    const execute = [{ insertId: 1 }];

    sinon.stub(connection, "execute").resolves(execute);
  });

  after(() => {
    connection.execute.restore();
  });

  describe("quando é inserido com sucesso", async () => {
    it("retorna um objeto", async () => {
      //CHAMEI O CREATE, ELE FAZ O CONNECTION EXECUTE E RETORNA O VALOR INSERIDO IGUAL A 1
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.be.a("object");
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create(payloadMovie);
      console.log('resultado', response)
      expect(response).to.have.a.property("id");
    });
  });
});

/*Primeiro vamos criar as descrições de cada teste - A primeira descrição diz respeito a finalidade do teste */
describe('Busca todos os filmes no BD', () => {
  /*Agora eu vou colocar o detalhamento de cada um dos testes*/
  /*O primeiro testes que vamos realizar é quando não existe nenhum filme criado*/
  describe('quando não existe nenhum filme criado', () => {
    before(() => {
      const resultExecute = [[]]; // retorno esperado nesse teste

      sinon.stub(connection, 'execute').resolves(resultExecute);
    });

    after(() => {
      connection.execute.restore();
    });
    /*O comportamente experado para essa situação é a devolução de um array*/
    it('retorna um array', async () => {
      const [response] = await MoviesModel.getAll();

      expect(response).to.be.an('array');
    });
    /*E que este array esteja vazio*/
    it('o array está vazio', async () => {
      const [response] = await MoviesModel.getAll();

      expect(response).to.be.empty;
    });
  });

  describe('quando existem filmes criados', () => {
    /*Vamos mockar o array esperado na consulta ao banco de dados*/
    before(() => {
      const resultExecute = [
        {
          id: 1, 
          title: 'Example Movie',
          directed_by: 'Jane Dow',
          release_year: 1999,
        },
      ];

      sinon.stub(connection, 'execute').resolves(resultExecute);
    })

    after(() => {
      connection.execute.restore();
    })

    it('retorna um array', async () => {
      const response = await MoviesModel.getAll();

      expect(response).to.be.an('array');
    });

    it('o array não está vazio', async () => {
      const response = await MoviesModel.getAll();

      expect(response).to.not.be.empty;
    });

    it('o array possui itens do tipo objeto', async () => {
      const [item] = await MoviesModel.getAll();

      expect(item).to.be.an('object');
    });

    it('tais itens possui as propriedades: "id", "title", "releaseYear" e "directedBy"', async () => {
      const [item] = await MoviesModel.getAll();

      expect(item).to.include.all.keys(
        'id',
        'title',
        'release_year',
        'directed_by',
      );
    });
  });

});
