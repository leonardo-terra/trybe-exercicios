const axios = require("axios");

const getPokemonById = async (id) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return response.data;
};

async function main() {
  /* for (let i = 1; i <= 10; i++) {
    getPokemonById(i);
  } */
  const promises = [];
  for (let i = 1; i <= 150; i++) {
    promises.push(getPokemonById(i));
  }

  const pokemons = await Promise.all(promises);
  pokemons.forEach((pokemon) => {
    console.log(`pokenome: ${pokemon.name}`);
  });
}

main();
