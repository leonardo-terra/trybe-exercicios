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

routes.post("/users", (req, res) => {
  const { id, name, email, phone, age, username } = req.body;
  userData.push({ id, name, email, phone, age, username });
  if (!id || !name || !phone || !age || !username) {
    return res.status(400).json({ message: "Bad Request!" });
  }
  res.status(201).end();
});

routes.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  const userIndex = userData.findIndex((u) => u.id === parseInt(id));

  if (userIndex === -1) {
    return res.status(404).json("Usuário nao encontrado");
  }
  userData.splice(userIndex, 1);

  res.status(204).end();
});

module.exports = routes;
