const botao = document.querySelector("#calcular");
const saida = document.querySelector("#resultado");

botao.onclick = () => {

    const conta = Number(document.querySelector("#valor").value);
    const pessoas = Number(document.querySelector("#pessoas").value);

    taxa = "10%";
    const total = conta + (conta * 0.1);
    const valor = total / pessoas;

    saida.textContent = "Valor total: R$ " + total.toFixed(2) + " | Valor por pessoa: R$ " + valor.toFixed(2);
}