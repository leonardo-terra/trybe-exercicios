// importa express
const express = require("express");

// Cria a api
const api = express();

// Estabelece json como formato.
api.use(express.json());

// Associa todas as rotas no arquivo./routes/index.js ao /sistema.
/* api.use("/systema", require("./routes")); */

//Configura a requisição a ser tratada e uma resposta.
api.get("/welcome", (req, res) => {
  console.log("welcome rapaz");
  res.status(200).json({ message: "tudo ok por aqui" });
});

//Sobe a API na porta.

const PORT = 3000;
api.listen(PORT, () => {
  console.log("Subiu na porta", PORT);
});
