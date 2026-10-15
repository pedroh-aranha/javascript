// Exercício 2.1 (Contagem): o laço monta o texto, a tela recebe uma vez
const botao = document.querySelector("#contar")
const saida = document.querySelector("#resultado")

botao.onclick = () => {
  const n = Number(document.querySelector("#numero").value)
  let texto = ""

  for (let i = 1; i <= n; i++) {
    texto += i + "\n"
  }

  saida.textContent = texto
}
