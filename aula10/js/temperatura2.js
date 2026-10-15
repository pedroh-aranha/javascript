// Exercício 3.2 (Temperatura): F = C x 9 / 5 + 32
const botao = document.querySelector("#converter")
const saida = document.querySelector("#resultado")

const celsiusParaFahrenheit = (celsius) => {
  return celsius * 9 / 5 + 32
}
const fahrenheitParaCelsius = (fahrenheit) => {
  return (fahrenheit - 32) * 5 / 9
}

botao.onclick = () => {
  const celsius = Number(document.querySelector("#celsius").value)

  console.log(fahrenheitParaCelsius(37))

  saida.textContent = celsiusParaFahrenheit(celsius).toFixed(1) + " °F"
}
