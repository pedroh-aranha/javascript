const botao = document.querySelector("#calcular");
const saida = document.querySelector("#resultado");

botao.onclick = () => {

    const celsius = Number(document.querySelector("#celsius").value);


    const temperaturaFahrenheit = (celsius * 9/5) + 32;

    saida.textContent = "Temperatura em Fahrenheit: " + temperaturaFahrenheit.toFixed(1);
}