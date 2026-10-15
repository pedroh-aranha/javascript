// Exercício 3.1 (Média): ler, calcular, mostrar
const botao = document.querySelector("#calcular")
const saida = document.querySelector("#resultado")

botao.onclick = () => {
  // 1. ler
  const n1 = Number(document.querySelector("#nota1").value)
  const n2 = Number(document.querySelector("#nota2").value)

  // 2. calcular (parênteses: a soma vem antes da divisão)
  const media = (n1 + n2) / 2

  // 3. mostrar
  saida.textContent = "Média: " + media.toFixed(1)
}
