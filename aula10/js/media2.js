// Exercício 3.1 (Média): ler, calcular, mostrar
const botao = document.querySelector("#calcular")
const saida = document.querySelector("#resultado")

const calcularmedia = (a , b) => {
  return (a + b) / 2
}

botao.onclick = () => {

  const n1 = Number(document.querySelector("#nota1").value)
  const n2 = Number(document.querySelector("#nota2").value)

  saida.textContent = "Média: " + calcularmedia(n1, n2).toFixed(1)
}
