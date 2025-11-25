const veiculos = [
  {
    carros: [
      { modelo: "monza", cilindrada: "2000", marca: "chevrolet", ano: "1993" },
      { modelo: "verona", cilindrada: "1800", marca: "ford", ano: "1988" },
      { modelo: "uno", cilindrada: "1000", marca: "fiat", ano: "2010" }
    ],
    motos: [
      { modelo: "cb 500", cilindrada: "500", marca: "honda", ano: "2020" },
      { modelo: "ninja", cilindrada: "600", marca: "kawasaki", ano: "2018" },
      { modelo: "fazer", cilindrada: "250", marca: "yamaha", ano: "2019" }
    ],
    caminhoes: [
      { modelo: "volvo fh", cilindrada: "13000", marca: "volvo", ano: "2022" },
      { modelo: "actros", cilindrada: "12000", marca: "mercedes-benz", ano: "2021" },
      { modelo: "constellation", cilindrada: "9000", marca: "vw", ano: "2020" }
    ]
  }
];

function getCarro(modelo) {
  return veiculos[0].carros.find(c => c.modelo === modelo) || null;
}

function getMoto(modelo) {
  return veiculos[0].motos.find(m => m.modelo === modelo) || null;
}

function getCaminhao(modelo) {
  return veiculos[0].caminhoes.find(c => c.modelo === modelo) || null;
}

module.exports = { getCarro, getMoto, getCaminhao };
