const fs = require("fs");

const nomeDoArquivo = "meu-arquivo.txt";

fs.readFile(nomeDoArquivo, "utf-8", (err, data) => {
  if (err) {
    console.error(
      "Nao foi possível ler o arquivo",
      nomeDoArquivo,
      "erro: ",
      err
    );
    process.exit(1);
  }
  console.log("conteudo do arquivo: ", data);
});
