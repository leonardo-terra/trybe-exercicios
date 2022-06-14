const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll();
  return books;
}

const getById = async (id) => {
  const book = await Book.findOne({ where: { id } });
  return book;
}

module.exports = { getAll, getById };