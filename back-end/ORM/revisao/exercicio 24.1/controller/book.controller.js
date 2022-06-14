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
    const book = await book.bookServices.getById(id);
    return res.status(200).send(book);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: error.message });
  }
}

module.exports = { getAll, getById };