// Exercício 4.1 (Em Quantos Anos Dobra?): while, porque não sabemos quantas voltas
const botao = document.querySelector("#calcular")
const saida = document.querySelector("#resultado")

botao.onclick = () => {
  const inicial = Number(document.querySelector("#valor").value)
  const taxa = Number(document.querySelector("#taxa").value)

  // Proteção contra laço infinito: com taxa 0 (ou valor 0) o valor nunca dobra
  if (inicial <= 0 || taxa <= 0) {
    saida.textContent = "Valor e taxa precisam ser maiores que zero."
    saida.className = "erro"
  } else {
    let valor = inicial
    let anos = 0

    while (valor < inicial * 2) {
      valor = valor * (1 + taxa / 100)
      anos++
    }

    saida.textContent = "O valor dobra em " + anos + " anos" + "\n" +
                        "Valor final: R$ " + valor.toFixed(2)
    saida.className = "ok"
  }
}
