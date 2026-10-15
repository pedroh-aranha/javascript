// Exercício 4.1 (Horas e Minutos): divisão inteira e resto
const botao = document.querySelector("#converter")
const saida = document.querySelector("#resultado")

botao.onclick = () => {
  const totalMinutos = Number(document.querySelector("#minutos").value)

  const horas = Math.floor(totalMinutos / 60)   // parte inteira da divisão
  const minutos = totalMinutos % 60             // o que sobra

  saida.textContent = totalMinutos + " minutos = " + horas + " h e " + minutos + " min"
}
