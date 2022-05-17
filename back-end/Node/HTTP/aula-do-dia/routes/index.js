// importa express
const express = require("express");
const userData = require("./data");

// Cria a api
const routes = express.Router();

//Configura a requisição a ser tratada e uma resposta.
routes.get("/welcome", (req, res) => {
  console.log("welcome rapaz");
  res.status(200).json({ message: "tudo ok por aqui" });
});

routes.get("/users", (req, res) => {
  res.status(200).json(userData);
});

module.exports = routes;
