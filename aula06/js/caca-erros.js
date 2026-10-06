const botao = document.querySelector("#calcular");
const saida = document.querySelector("#resultado");

botao.onclick = () => {

    const n1 = (document.querySelector("#nota1").value);
    const n2 = (document.querySelector("#nota2").value);
    const n3 = (document.querySelector("#nota3").value);
    const media = (n1 + n2 + n3) / 3;

    saida.textContent = "Média: " + media
}