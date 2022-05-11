function divisao(num1, num2) {
  const promise = new Promise((resolve, reject) => {
    if (num2 == 0)
      reject(new Error("Não é possivel dividir um número por zero"));

    const resultado = num1 / num2;
    resolve(resultado);
  });
  return promise;
}

divisao(1, 0)
  .then((result) => console.log("sucesso: ", result))
  .catch((err) => console.log("erro: ", err.message));
