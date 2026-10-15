// Exercício 2.3 (Contagem Regressiva): o passo agora é i--
const botao = document.querySelector("#contar")
const saida = document.querySelector("#resultado")

botao.onclick = () => {
  const n = Number(document.querySelector("#numero").value)
  let texto = ""

  for (let i = n; i >= 1; i--) {
    texto += i + "\n"
  }
  texto += "Lançar!"

  saida.textContent = texto
}
