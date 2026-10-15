// Extra (Tabuada só com Resultados Pares): for + if
const botao = document.querySelector("#gerar")
const saida = document.querySelector("#resultado")

botao.onclick = () => {
  const n = Number(document.querySelector("#numero").value)
  let texto = ""

  for (let i = 1; i <= 10; i++) {
    const resultado = n * i
    if (resultado % 2 === 0) {
      texto += n + " x " + i + " = " + resultado + "\n"
    }
  }

  saida.textContent = texto
}
