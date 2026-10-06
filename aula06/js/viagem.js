const botao = document.querySelector("#calcular");
const saida = document.querySelector("#resultado");

botao.onclick = () => {

    const distancia = Number(document.querySelector("#distancia").value);
    const consumo = Number(document.querySelector("#consumo").value);
    const preco = Number(document.querySelector("#preco").value);

    const litros = distancia / consumo;
    const custo = litros * preco;
    const ida_e_volta = custo * 2;

    saida.textContent = "Litros: " + litros.toFixed(2) + " | Custo da viagem: R$ " + custo.toFixed(2) + " | Custo ida e volta: R$ " + ida_e_volta.toFixed(2);
}