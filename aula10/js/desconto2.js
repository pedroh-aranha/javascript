// Exercício 3.3 (Desconto)
const botao = document.querySelector("#calcular")
const saida = document.querySelector("#resultado")

const valorDesconto = (preco, percentual) => {
  return preco * percentual / 100
}
const aplicarDesconto = (preco, percentual) => {
  return preco - valorDesconto(preco, percentual)
}

botao.onclick = () => {
  const preco = Number(document.querySelector("#preco").value)
  const percentual = Number(document.querySelector("#percentual").value)


  saida.textContent = "Desconto: R$ " + valorDesconto(preco, percentual).toFixed(2) + "\n" +
  "Preço final: R$ " + aplicarDesconto(preco, percentual).toFixed(2)
}
