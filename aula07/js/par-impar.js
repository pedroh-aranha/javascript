// Exercício 2.2 (Par ou Ímpar) com if/else
// e Exercício 5.1 (Ternário): a mesma decisão em uma linha (comentada abaixo)
const botao = document.querySelector("#verificar")
const saida = document.querySelector("#resultado")

botao.onclick = () => {
  const numero = Number(document.querySelector("#numero").value)
  if (ehPar(numero)) {
    mostrar(`${numero} é par`, "ok")
  } else {
    mostrar(`${numero} é ímpar`, "alerta")
  }
}
  