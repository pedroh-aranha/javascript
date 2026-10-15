// Exercício 3.3 (Desconto)
const botao = document.querySelector("#calcular")
const saida = document.querySelector("#resultado")

botao.onclick = () => {
  const preco = Number(document.querySelector("#preco").value)
  const percentual = Number(document.querySelector("#percentual").value)

  const desconto = preco * percentual / 100
  const precoFinal = preco - desconto

  saida.textContent = "Desconto: R$ " + desconto.toFixed(2) + "\n" +
                      "Preço final: R$ " + precoFinal.toFixed(2)
}
