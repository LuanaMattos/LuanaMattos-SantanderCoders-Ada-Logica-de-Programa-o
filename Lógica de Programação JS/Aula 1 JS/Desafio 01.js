// Receba através do prompt:
// ● idade
// ● nacionalidade
// Então deve retornar "Você é elegível para votar.", o que ocorre 
// quando a idade for maior ou igual a 16 e a nacionalidade for "brasileira", 
// caso contrário, Você não é elegível para votar.

var idade = parseInt(prompt("Digite sua idade:"));
var nacionalidade = prompt("Digite sua nacionalidade:");

// Legível para votar 
var elegivelParaVotar = (idade >= 16 && nacionalidade.toLowerCase() === "brasileira");

// Resultado
if (elegivelParaVotar) {
    console.log("Você é elegível para votar.");
} else {
    console.log("Você não é elegível para votar.");
}