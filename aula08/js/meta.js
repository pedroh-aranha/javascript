// Exercício 4.2 (Meta de Economia): while com acumulador
const botao = document.querySelector("#calcular")
const saida = document.querySelector("#resultado")

botao.onclick = () => {
  const meta = Number(document.querySelector("#meta").value)
  const deposito = Number(document.querySelector("#deposito").value)

  if (deposito <= 0) {
    saida.textContent = "O depósito precisa ser maior que zero, senão a meta nunca chega."
    saida.className = "erro"
  } else {
    let guardado = 0
    let meses = 0

    while (guardado < meta) {
      guardado += deposito
      meses++
    }

    saida.textContent = "Meta atingida em " + meses + " meses" + "\n" +
                        "Total guardado: R$ " + guardado.toFixed(2)
    saida.className = "ok"
  }
}
