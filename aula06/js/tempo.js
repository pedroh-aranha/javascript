const botao = document.querySelector("#calcular");
const saida = document.querySelector("#resultado");

botao.onclick = () => {

    const minutos = Number(document.querySelector("#minutos").value);

    const horas = Math.floor(minutos / 60);
    const minu = minutos % 60;

    saida.textContent = "Horas: " + horas + " | Minutos: " + minu;
}