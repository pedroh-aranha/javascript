const botao = document.querySelector("#calcular");
const saida = document.querySelector("#resultado");

botao.onclick = () => {

    const preço = Number(document.querySelector("#preço").value);
    const desconto = Number(document.querySelector("#desconto").value);

    const valorDesconto = preço * (desconto / 100);
    const preçoFinal = preço - valorDesconto;

    saida.textContent = "Preço final: R$ " + preçoFinal.toFixed(2);
    saida.textContent += " (Desconto: R$ " + valorDesconto.toFixed(2) + ")";
}