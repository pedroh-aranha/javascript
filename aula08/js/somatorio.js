// Exercício 3.1 (Soma, Média e Pares de 1 até N)
const botao = document.querySelector("#calcular")
const saida = document.querySelector("#resultado")

botao.onclick = () => {
  const n = Number(document.querySelector("#numero").value)

  if (n < 1) {
    saida.textContent = "Digite um número maior ou igual a 1."
    saida.className = "erro"
  } else {
    let soma = 0     // acumulador: criado ANTES do laço
    let pares = 0    // contador: criado ANTES do laço

    for (let i = 1; i <= n; i++) {
      soma += i
      if (i % 2 === 0) {
        pares++
      }
    }

    const media = soma / n
    saida.textContent = "Soma: " + soma + "\n" +
                        "Média: " + media.toFixed(1) + "\n" +
                        "Quantidade de pares: " + pares
    saida.className = "ok"
  }
}
