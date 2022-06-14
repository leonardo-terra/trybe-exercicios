const bookServices = require('../services/book.services');

const getAll = async (_req, res) => {
  try {
    const data = await bookServices.getAll();
    console.log("data Controller", data);
    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = { getAll };