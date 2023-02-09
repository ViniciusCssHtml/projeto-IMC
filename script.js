const form = document.querySelector("#form");
// função que para o carregamento do formulário.
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const inputPeso = e.target.querySelector("#peso");
  const inputAltura = e.target.querySelector("#altura");

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    setResultado("Peso inválido", false);
    return;
  }
  if (!altura) {
    setResultado("Altura inválido", false);
    return;
  }

  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);

  const msg = `Seu IMC é ${imc} (${nivelImc}).`;
  setResultado(msg, true);
});

// função que exibe o resultado
function setResultado(msg, isValid) {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = "";

  const p = criaP();

  if (isValid) {
    p.classList.add("resultado-p");
  } else {
    p.classList.add("invalido");
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
}

// função que cria parágrafos
function criaP() {
  const p = document.createElement("p"); //criando parágrafo;
  return p;
}

// função que calcula IMC
function getImc(peso, altura) {
  const imc = peso / (altura * altura);
  return imc.toFixed(2);
}

// função para ver o nível do IMC
function getNivelImc(imc) {
  const nivel = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade grau I",
    "Obesidade grau II",
    "Obesidade grau III",
  ];
  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}
