function divisao(num1, num2) {
  if (num2 == 0) throw new Error("Não é possível realizar divisões por zero");

  return num1 / num2;
}

try {
  const resultado = divisao(2, 1);
  console.log("resultado: ", resultado);
} catch (e) {
  console.log(e.message);
}
