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

routes.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const user = userData.filter((u) => u.id === parseInt(id));
  if (!user.length) {
    return res.status(404).json({ message: "pessoa usuaria não encontrada" });
  }
  res.status(200).json(user);
});

module.exports = routes;
