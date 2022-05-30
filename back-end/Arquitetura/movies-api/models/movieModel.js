const connection = require("./connection");

const create = async ({ title, directedBy, releaseYear }) => {
  const [result] = await connection.execute(
    "INSERT INTO `movies-api`.movies (title, directed_by, release_year) VALUES (?, ?, ?)",
    [title, directedBy, releaseYear]
  );

  return {
    //QUAL O RETORNO ESPERADO PARA SUCESSO? OBJETO
    //QUAL O RETORNO ESPERADO PARA ERRO?
    id: result.insertId,
  };
};

const getAll = () => {
  return connection.execute(
    'SELECT * FROM `movies-api`.movies',
  );
};

module.exports = {
  create,
  getAll
};
