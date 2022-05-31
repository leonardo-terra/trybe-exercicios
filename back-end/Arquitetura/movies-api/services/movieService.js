const MoviesModel = require("../models/movieModel");

const isValid = (title, directedBy, releaseYear) => {
  if (!title || typeof title !== "string") return false;
  if (!releaseYear || typeof releaseYear !== "number") return false;
  if (!directedBy || typeof directedBy !== "string") return false;

  return true;
};
 
const create = async ({ title, directedBy, releaseYear }) => {
  const isMovieValid = isValid(title, directedBy, releaseYear);
  //RETONA FALSO QUANDO DER ERRO DE VALIDAÇÃO
  //console.log(isMovieValid)
  if (!isMovieValid) return false;
 
  const { id } = await MoviesModel.create({ title, directedBy, releaseYear });
  //RETORNO DO SERVICE
  return {
    id,
  };
};

const changeMovieToCamelCase = (movieData) => {
  const { id, title, directed_by, release_year } = movieData;
  //console.log(movieData)
  return {
    id,
    title,
    directedBy: directed_by,
    releaseYear: release_year,
  };
};

const getAll = async () => {
  const [moviesData] = await MoviesModel.getAll();
  //console.log(moviesData[1]) 

  return moviesData.map(changeMovieToCamelCase);
}


module.exports = {
  create,
  getAll
};
