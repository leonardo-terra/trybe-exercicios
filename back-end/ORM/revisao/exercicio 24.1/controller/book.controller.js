const bookServices = require('../services/book.services');

const getAll = async (_req, res) => {
  try {
    const books = await bookServices.getAll();
    return res.status(200).send(books);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
}

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await bookServices.getById(id);
    return res.status(200).send(book);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Livro não encontrado!" });
  }
}

const create = async (req, res) => {
  try {
    const newBook = await bookServices.create(req.body);
    return res.status(201).send({ message: "Livro criado com sucesso!" });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
}

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const updateBook = await bookServices.update(id, req.body);
    return res.status(200).send({ message: "Livro atualizado com sucesso" });
  } catch (error) {
    return res.status(404).send({ message: error.message });
  }
}
module.exports = { getAll, getById, create, update };