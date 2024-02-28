//Crie um vetor (array) chamado vetor1 com valores de coordenadas x e outro
//vetor vetor2 com valores de coordenadas y. Calcule o produto escalar (produto
//interno) desses dois vetores usando a fórmula matemática do produto escalar.


let idade = parseInt(prompt("Digite a sua idade:"));
let compraMinima = parseFloat(prompt("Digite o valor da compra mínima:"));
let isNewClient = prompt("Digite 's' se você é um novo cliente, ou 'n' caso contrário:");

// Checa se uma opção válida foi escolhida (loop)
while (isNewClient.toLowerCase() !== 's' && isNewClient.toLowerCase() !== 'n') {
    isNewClient = prompt("Resposta inválida. Digite 's' se você é um novo cliente, ou 'n' caso contrário:");
}

isNewClient = (isNewClient.toLowerCase() === 's');

// Verifica se é elegível para o desconto
let elegivel = (idade >= 60 && compraMinima >= 100 && !isNewClient);

// Retorna o resultado
if (elegivel) {
    alert("Você receberá um desconto!");
} else {
    alert("Infelizmente você não está elegível para receber um desconto.");
}