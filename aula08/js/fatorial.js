// Exercício 3.3 (Fatorial): acumulador de multiplicação começa em 1
const botao = document.querySelector("#calcular")
const saida = document.querySelector("#resultado")

botao.onclick = () => {
  const n = Number(document.querySelector("#numero").value)

  if (n < 0) {
    saida.textContent = "Não existe fatorial de número negativo."
    saida.className = "erro"
  } else {
    let fatorial = 1   // se começasse em 0, tudo daria 0
    let conta = ""

    for (let i = n; i >= 1; i--) {
      fatorial *= i
      conta += i + (i > 1 ? " x " : "")
    }

    if (n === 0) {
      conta = "por definição"
    }

    saida.textContent = n + "! = " + conta + " = " + fatorial
    saida.className = "ok"
  }
}
