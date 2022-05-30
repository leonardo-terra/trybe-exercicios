const sinon = require("sinon");
const { expect } = require("chai");

const MoviesModel = require("../../models/movieModel");
const MoviesService = require("../../services/movieService");

describe("Insere um novo filme no BD", () => {
  describe("quando o payload informado não é válido", async () => {
    const payloadMovie = {};

    it("retorna um boolean", async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.a("boolean");
    });

    it('o boolean contém "false"', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.equal(false);
    });
  });

  describe("quando é inserido com sucesso", async () => {
    const payloadMovie = {
      title: "Example Movie",
      directedBy: "Jane Dow",
      releaseYear: 1999,
    };

    before(() => {
      const ID_EXAMPLE = 1;

      sinon.stub(MoviesModel, "create").resolves({ id: ID_EXAMPLE });
    });

    after(() => {
      MoviesModel.create.restore();
    });

    it("retorna um objeto", async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.a("object");
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.have.a.property("id");
    });
  });
});

describe('Busca todos os filmes no BD', () => {
  describe('quando não existe nenhum filme criado', async () => {

    before(() => {
      sinon.stub(MoviesModel, 'getAll')
        .resolves([[]]);
    });

    after(() => {
      MoviesModel.getAll.restore();
    });

    it('retorna um array', async () => {
      const response = await MoviesService.getAll();

      expect(response).to.be.an('array');
    });

    it('o array está vazio', async () => {
      const response = await MoviesService.getAll();

      expect(response).to.be.empty;
    });
  });

  describe('quando existem filmes criados', () => {
    /*Nesse trecho criamo um stub que simula um array sendo retornado para testar as asserções a seguir*/
    before(() => {
      //RETORNO DO ARRAY VAI SER ESSE [[DADOS][METADADOS]]
      //PEGANDO A PRIMEIRA POSICAO QUE É DADOS
      //E CONFIGURANDO JÁ O DADO COMO UM OBJETO
      sinon.stub(MoviesModel, 'getAll')
        .resolves([[
          { 
            id: 1,
            title: 'Example Movie',
            directedBy: 'Jane Dow',
            releaseYear: 1999,
          }
        ]]);
    });

    after(() => {
      MoviesModel.getAll.restore();
    });


    it('retorna um array', async () => {
      const response = await MoviesService.getAll();

      expect(response).to.be.an('array');
    });

    it('o array não está vazio', async () => {
      const response = await MoviesService.getAll();

      expect(response).to.be.not.empty;
    });

    it('o array possui itens do tipo objeto', async () => {
      const [item] = await MoviesService.getAll();

      expect(item).to.be.an('object');
    });

    it('tais itens possui as propriedades: "id", "title", "releaseYear" e "directedBy"', async () => {
      const [item] = await MoviesService.getAll();

      expect(item).to.include.all.keys('id', 'title', 'releaseYear', 'directedBy')
    });
  });
});