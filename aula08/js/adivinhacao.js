const campoNumero = document.querySelector("#numero");
const campoTentativas = document.querySelector("#tentativas");
const botao = document.querySelector("#sortear");
const saida = document.querySelector("#resultado");

let numeroSecreto = sortearNumero();
let tentativasUsadas = 0;
let limiteTentativas = Number(campoTentativas.value);
let fim = false;
let historico = "Chutes: ";

function sortearNumero() {
  return Math.floor(Math.random() * 100) + 1;
}

botao.onclick = () => {
  const valorNumero = campoNumero.value.trim();
  const numero = Number(valorNumero);

  if (fim) {
    saida.textContent = "O jogo acabou. Aperte F5 para jogar de novo.";
    return;
  }

  if (valorNumero === "" || numero < 1 || numero > 100) {
    saida.textContent = "Digite um número válido entre 1 e 100.";
    campoNumero.focus();
    return;
  }

  historico += numero + " ";

  tentativasUsadas++;
  campoTentativas.value = limiteTentativas - tentativasUsadas;
  campoTentativas.disabled = true;

  if (numero === numeroSecreto) {
    fim = true;
    saida.textContent =
      "Parabéns! Você acertou o número secreto: " +
      numeroSecreto + "\n" + historico;
    return;
  }

  if (tentativasUsadas >= limiteTentativas) {
    fim = true;
    saida.textContent =
      "O jogo acabou. Aperte F5 para jogar de novo." +
      " O número era " + numeroSecreto + ".\n" + historico;
    return;
  }

  if (numero < numeroSecreto) {
    saida.textContent = "O número secreto é maior que " + numero + ".";
  } else {
    saida.textContent = "O número secreto é menor que " + numero + ".";
  }

  saida.textContent +=
    " Tentativas restantes: " + campoTentativas.value +
    "\n" + historico;
};