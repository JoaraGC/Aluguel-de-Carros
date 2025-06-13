//Validar Nome
const nomeInput = document.getElementById("nome");
const erroNome = document.getElementById("erroNome");

nomeInput.addEventListener("input", function () {
  const nome = nomeInput.value.trim();

  if (nome === "") {
    erroNome.textContent = "Por favor, preencha o nome.";
  } else if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(nome)) {
    erroNome.textContent = "O nome deve conter apenas letras.";
  } else {
    erroNome.textContent = "";
  }
});

//Validar Sobrenome
const sobrenomeInput = document.getElementById("sobrenome");
const erroSobrenome = document.getElementById("erroSobrenome");

sobrenomeInput.addEventListener("input", function () {
  const sobrenome = sobrenomeInput.value.trim();

  if (sobrenome === "") {
    erroSobrenome.textContent = "Por favor, preencha o sobrenome.";
  } else if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(sobrenome)) {
    erroSobrenome.textContent = "O sobrenome deve conter apenas letras.";
  } else {
    erroSobrenome.textContent = "";
  }
});

// Validação CNH
const cnhInput = document.getElementById("cnh");
const msgErro = document.getElementById("msgErro");

cnhInput.addEventListener("input", () => {
  const valor = cnhInput.value;

  if (!/^\d*$/.test(valor)) {
    msgErro.textContent = "A CNH deve conter apenas números.";
  } else {
    msgErro.textContent = "";
  }
});

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  const valor = cnhInput.value;
  if (valor.length !== 11) {
    e.preventDefault();
    msgErro.textContent = "A CNH deve ter exatamente 11 dígitos.";
    cnhInput.focus();
  }
});

//Tipo de Documento
const select = document.getElementById("tipoDocumento");
const campo = document.getElementById("campoDocumento");
const input = document.getElementById("valorDocumento");
const label = document.getElementById("labelDocumento");
const documentoErro = document.getElementById("documentoErro");

select.addEventListener("change", () => {
  const tipo = select.value;
  if (tipo) {
    campo.style.display = "block";
    label.textContent = tipo;
    input.placeholder = tipo;
    input.value = "";
    documentoErro.textContent = "";

    if (["CPF", "RG", "Passaporte"].includes(tipo)) {
      input.addEventListener("input", validarNumeros);
    } else {
      input.removeEventListener("input", validarNumeros);
      documentoErro.textContent = "";
    }
  } else {
    campo.style.display = "none";
    input.value = "";
    documentoErro.textContent = "";
  }
});

function validarNumeros(e) {
  const original = e.target.value;
  const apenasNumeros = original.replace(/\D/g, "");

  if (original !== apenasNumeros) {
    documentoErro.textContent = "Digite apenas números.";
  } else {
    documentoErro.textContent = "";
  }

  e.target.value = apenasNumeros;
}

//Validar email
const emailInput = document.getElementById("email");
const erroEmail = document.getElementById("erroEmail");

emailInput.addEventListener("input", () => {
  const valor = emailInput.value;
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regexEmail.test(valor)) {
    erroEmail.textContent = "Digite um e-mail válido (ex: nome@exemplo.com)";
  } else {
    erroEmail.textContent = "";
  }
});

//Validar Telefone
const Inputtelefone = document.getElementById("telefone");
const erroTelefone = document.getElementById("erroTelefone");

Inputtelefone.addEventListener("input", function () {
  let telefone = Inputtelefone.value;

  //Remove tudo que não for número
  telefone = telefone.replace(/\D/g, "");

  //Limita a 11 dígitos
  if (telefone.length > 11) {
    telefone = telefone.slice(0, 11);
  }

  //Formata para (00) 00000-0000
  telefone = telefone.replace(/^(\d{2})(\d)/g, "($1) $2");
  telefone = telefone.replace(/(\d{5})(\d{1,4})$/, "$1-$2");

  //Atualiza o campo com o valor fomatado
  Inputtelefone.value = telefone;

  //Faz a validação após formatar
  if (telefone === "") {
    erroTelefone.textContent = "Preencha o número de telefone.";
  } else if (!/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/.test(telefone)) {
    erroTelefone.textContent = "Número de telefone inválido.";
  } else {
    erroTelefone.textContent = "";
  }
});

//Validar Telefone2
const Inputtelefone2 = document.getElementById("telefone2");
const erroTelefone2 = document.getElementById("erroTelefone2");

Inputtelefone2.addEventListener("input", function () {
  let telefone2 = Inputtelefone2.value;

  //Remove tudo que não for número
  telefone2 = telefone2.replace(/\D/g, "");

  //Limita a 11 dígitos
  if (telefone2.length > 11) {
    telefone2 = telefone2.slice(0, 11);
  }

  //Formata para (00) 00000-0000
  telefone2 = telefone2.replace(/^(\d{2})(\d)/g, "($1) $2");
  telefone2 = telefone2.replace(/(\d{5})(\d{1,4})$/, "$1-$2");

  //Atualiza o campo com o valor fomatado
  Inputtelefone2.value = telefone2;

  // Se estiver vazio, não mostra erro (campo não obrigatório)
  if (telefone2 === "") {
    erroTelefone2.textContent = "";
    return;
  }

  //Faz a validação após formatar
  if (!/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/.test(telefone2)) {
    erroTelefone2.textContent = "Número de telefone inválido.";
  } else {
    erroTelefone2.textContent = "";
  }
});

//Validar forma de pagamento
function atualizarFormulario() {
  const forma = document.getElementById("formaPagamento").value;
  const dadosCartao = document.getElementById("dadosCartao");
  const dadosPix = document.getElementById("dadosPix");

  if (forma === "credito" || forma === "debito") {
    dadosCartao.classList.remove("hidden2");
    dadosPix.classList.add("hidden2");
  } else if (forma === "pix") {
    dadosCartao.classList.add("hidden2");
    dadosPix.classList.remove("hidden2");
  } else {
    dadosCartao.classList.add("hidden2");
    dadosPix.classList.add("hidden2");
  }
}

//Validar Nome
function validarNome() {
  const nome = document.getElementById("nomeTitular").value.trim();
  const erroNome = document.getElementById("erro-nome");
  erroNome.textContent = "";

  if (nome === "") {
    erroNome.textContent = "Por favor, preencha o nome do titular.";
    return false;
  }
  if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(nome)) {
    erroNome.textContent = "O nome deve conter apenas letras.";
    return false;
  }
  return true;
}

//Validar Número do cartão
const numeroCartaoInput = document.getElementById("numeroCartao");

numeroCartaoInput.addEventListener("input", function () {
  let valor = this.value.replace(/\D/g, ""); // remove tudo que não for número
  valor = valor.slice(0, 16); // limita a 16 dígitos
  valor = valor.replace(/(.{4})/g, "$1 ").trim(); // adiciona espaço a cada 4 dígitos
  this.value = valor;
});

function validarNumeroCartao() {
  const numero = document
    .getElementById("numeroCartao")
    .value.replace(/\s/g, "");
  const erroCartao = document.getElementById("erro-cartao");
  erroCartao.textContent = "";

  if (numero === "") {
    erroCartao.textContent = "Por favor, preencha o número do cartão.";
    return false;
  }

  if (!/^\d{16}$/.test(numero)) {
    erroCartao.textContent = "O número do cartão deve ter 16 dígitos.";
    return false;
  }

  return true;
}

//Validar data de vencimento
const validadeInput = document.getElementById("validade");
const erroValidade = document.getElementById("erro-validade");

validadeInput.addEventListener("change", function () {
  const hoje = new Date();
  const [ano, mes] = validadeInput.value.split("-");
  const dataSelecionada = new Date(ano, mes - 1); // mês começa em 0 (janeiro)

  const agora = new Date(hoje.getFullYear().hoje.getMonth());

  if (dataSelecionada < agora) {
    erroValidade.textContent = "A data de validade não pode ser no passado.";
    validadeInput.setCustomValidity("Data inválida");
  } else {
    erroValidade.textContent = "";
    validadeInput.setCustomValidity(""); //limpa erro
  }
});

//Validar CVV
function validarCVV() {
  const cvv = document.getElementById("cvv").value.trim();
  const erroCvv = document.getElementById("erro-cvv");

  erroCvv.textContent = "";

  if (cvv === "") {
    erroCvv.textContent = "Por favor, preencha o CVV.";
    return false;
  }

  if (!!/^\d{3,4}$/.test(cvv)) {
    erroCvv.textContent = "O CVV deve ter 3 ou 4 números.";
    return false;
  }
  return true;
}

//Validação final
function formularioValido() {
  let valido = true;

  const spanDeErro = document.querySelector("span");
  spanDeErro.forEach((span) => {
    if (span.textContent.trim() !== "") {
      valido = false;
    }
  });

  const camposObrigatorios = document.querySelectorAll(
    "#nome, #sobrenome, #cnh, #email, #telefone, #valorDocumento, #tipoDocumento, #nacionalidade"
  );
  camposObrigatorios.forEach((campo) => {
    if (campo.offsetParent !== null && campo.value.trim() === "") {
      valido = false;
      const spanErro = campo.parentElement.querySelector("span");
      if (spanErro) {
        spanErro.textContent = "Preencha este campo.";
      }
    }
  });

  if (cnhInput.value.length !== 11) {
    valido = false;
    msgErro.textContent = "A CNH deve ter exatamnete 11 dígitos.";
  }

  return valido;
}

//Validação Enviar
const formCadastro = document.querySelector(".campoCadastro");

formCadastro.addEventListener("submit", function (e) {
  if (!formularioValido()) {
    e.preventDefault(); //impede o envio
    alert("Por favor, corrija os erros antes de cadastrar.");
  } else {
    alert("Cadastro realizado com sucesso!");
  }
});
