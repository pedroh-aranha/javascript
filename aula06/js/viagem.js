// Exercício 4.3 (Custo da Viagem)
const botao = document.querySelector("#calcular")
const saida = document.querySelector("#resultado")

botao.onclick = () => {
  const distancia = Number(document.querySelector("#distancia").value)
  const consumo = Number(document.querySelector("#consumo").value)
  const precoLitro = Number(document.querySelector("#preco-litro").value)

  const litros = distancia / consumo
  const custo = litros * precoLitro
  const custoIdaVolta = custo * 2

  saida.textContent = "Combustível: " + litros.toFixed(1) + " litros" + "\n" +
                      "Custo da ida: R$ " + custo.toFixed(2) + "\n" +
                      "Ida e volta: R$ " + custoIdaVolta.toFixed(2)
}
