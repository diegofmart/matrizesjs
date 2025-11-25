const { getCarro, getMoto, getCaminhao } = require("./matrizes");

test("Retorna o carro correto pelo modelo", () => {
  const carro = getCarro("monza");
  expect(carro).toEqual({
    modelo: "monza",
    cilindrada: "2000",
    marca: "chevrolet",
    ano: "1993"
  });
});

test("Retorna a moto correta pelo modelo", () => {
  const moto = getMoto("ninja");
  expect(moto).toEqual({
    modelo: "ninja",
    cilindrada: "600",
    marca: "kawasaki",
    ano: "2018"
  });
});

test("Retorna o caminhão correto pelo modelo", () => {
  const caminhao = getCaminhao("actros");
  expect(caminhao).toEqual({
    modelo: "actros",
    cilindrada: "12000",
    marca: "mercedes-benz",
    ano: "2021"
  });
});
