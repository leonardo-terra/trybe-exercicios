// importa express
const express = require("express");

const api = express();

// Estabelece json como formato.
api.use(express.json());

// Associa todas as rotas no arquivo./routes/index.js ao /sistema.
api.use("/sistema", require("./routes"));

//Sobe a API na porta.
const PORT = 3000;
api.listen(PORT, () => {
  console.log("Subiu na porta", PORT);
});
