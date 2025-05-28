function toggleMenu() {
  const menu = document.getElementById("menu-opcoes");
  if (menu.style.display === "block") {
    menu.style.display = "none"; //Esconde o menu
  } else {
    menu.style.display = "block"; //Mostra o menu
  }
}

//Fecha o menu se clicar fora dele
document.addEventListener("click", function (e) {
  const menu = document.getElementById("menu-opcoes");
  const toggle = document.getElementById("menu-toggle");

  //Verifica se o clique não foi no botão e nem no menu
  if (!toggle.contains(e.target) && !menu.contains(e.target)) {
    menu.style.display = "none";
  }
});

const carros = [
  {
    nome: "Suv XX - modelo YY",
    descricao: "SUV confortável, potente e ideal para grandes viagens.",
    imagem: "../imagens/carro-preto.png",
  },
  {
    nome: "Suv XY - modelo XY",
    descricao: "SUV confortável.",
    imagem: "../imagens/carro-verde.png",
  },
  {
    nome: "LUXOR S68 - Mdodelo XY",
    descricao: "Potente e ideal para grandes viagens.",
    imagem: "../imagens/carro-branco.png",
  },
];

let indiceAtual = 0;

function mostrarCarro(indice) {
  const carro = carros[indice];
  document.getElementById("imagem-carro").src = carro.imagem;
  document.getElementById("nome-carro").textContent = carro.nome;
  document.getElementById("descricao-carro").textContent = carro.descricao;
}

document.querySelector(".btn-anterior").addEventListener("click", () => {
  indiceAtual = (indiceAtual - 1 + carros.length) % carros.length;
  mostrarCarro(indiceAtual);
});

document.querySelector(".btn-proximo").addEventListener("click", () => {
  indiceAtual = (indiceAtual + 1) % carros.length;
  mostrarCarro(indiceAtual);
});

//Mostra o primeiro carro ao carregar
mostrarCarro(indiceAtual);

//Calculadora

const precosCarros = {
  "Carros Populares": 120,
  SUV: 350,
  Sedan: 250,
  "Carros Elétricos": 300,
  "Carros Executivos": 400,
  "Pick-ups": 280,
};

const precosExtras = {
  gps: 20,
  cadeira: 30,
  wifi: 10,
  assistencia: 50,
};

document.getElementById("modeloCarro").addEventListener("input", function () {
  const modelo = this.value;
  const preco = precosCarros[modelo];
  const precoCarro = document.getElementById("preco-carro");

  if (preco) {
    precoCarro.textContent = `Preço por dia: R$ ${preco.toFixed(2)}`;
  } else {
    precoCarro.textContent = ``;
  }
});

document.querySelector(".linha").addEventListener("submit", function (event) {
  event.preventDefault();

  const dias = parseInt(document.getElementById("qtdDias").value) || 0;

  const modelo = document.getElementById("modeloCarro").value;
  const precoCarro = precosCarros[modelo] || 0;

  let totalExtras = 0;
  const extrasMarcados = document.querySelectorAll(
    'input[name="extras"]:checked'
  );

  extrasMarcados.forEach((extra) => {
    const valor = precosExtras[extra.value];
    if (valor) {
      totalExtras += valor;
    }
  });

  const total = (precoCarro + totalExtras) * dias;

  const resultado = document.getElementById("resultado");
  resultado.classList.remove("hidden");

  document.getElementById("total").value = `R$ ${total.toFixed(2)}`;
});
