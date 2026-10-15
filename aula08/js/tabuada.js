// Exercício 2.2 (Tabuada)
const botao = document.querySelector("#gerar")
const saida = document.querySelector("#resultado")

botao.onclick = () => {
  const n = Number(document.querySelector("#numero").value)
  let texto = ""

  for (let i = 1; i <= 10; i++) {
    texto += n + " x " + i + " = " + n * i + "\n"
  }

  saida.textContent = texto
}
