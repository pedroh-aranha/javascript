// Exercício 4.2 (Rachando a Conta): 10% de serviço e divisão por pessoa
const botao = document.querySelector("#calcular")
const saida = document.querySelector("#resultado")
const TAXA_SERVICO = 0.1   // const: valor que não muda

botao.onclick = () => {
  const conta = Number(document.querySelector("#conta").value)
  const pessoas = Number(document.querySelector("#pessoas").value)

  const servico = conta * TAXA_SERVICO
  const total = conta + servico
  const porPessoa = total / pessoas

  saida.textContent = "Serviço (10%): R$ " + servico.toFixed(2) + "\n" +
                      "Total: R$ " + total.toFixed(2) + "\n" +
                      "Cada pessoa paga: R$ " + porPessoa.toFixed(2)
}
