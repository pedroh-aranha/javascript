const botao = document.querySelector("#calcular");
const saida = document.querySelector("#resultado");

botao.onclick = () => {

    const minutos = Number(document.querySelector("#minutos").value);

    const horas = Math.floor(minutos / 60);
    const segundos = minutos % 60;

    saida.textContent = "Horas: " + horas + " | Segundos: " + segundos;
}