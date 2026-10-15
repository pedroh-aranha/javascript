// Exercício 5.1 (Caça ao Erro): versão corrigida
// Erro 1: o id do botão era "#calcula" (no HTML é "calcular").
//         O Console mostrava: Cannot set properties of null (setting 'onclick').
// Erro 2: faltava Number na leitura; "6" + "7" juntava os textos.
// Erro 3: faltavam os parênteses; só a nota 3 era dividida por 3.
const botao = document.querySelector("#calcular")
const saida = document.querySelector("#resultado")

botao.onclick = () => {
  const n1 = Number(document.querySelector("#nota1").value)
  const n2 = Number(document.querySelector("#nota2").value)
  const n3 = Number(document.querySelector("#nota3").value)

  const media = (n1 + n2 + n3) / 3

  saida.textContent = "Média: " + media.toFixed(1)
}
