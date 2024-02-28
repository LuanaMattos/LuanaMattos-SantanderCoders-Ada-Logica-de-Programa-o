// Desafio 4
// - Verificação de Triângulo
// ● Crie um programa que recebe três comprimentos de lados de um 
// triângulo como entrada e determina se eles formam um triângulo 
// equilátero (Todos os lados são iguais), isósceles (Dois lados 
// são iguais) ou escaleno (Se nada é igual). Imprima a 
// classificação do triângulo.


// Solicitar ao usuário os comprimentos dos lados do triângulo
const lado1 = parseFloat(prompt("Digite o comprimento do primeiro lado do triângulo:"));
const lado2 = parseFloat(prompt("Digite o comprimento do segundo lado do triângulo:"));
const lado3 = parseFloat(prompt("Digite o comprimento do terceiro lado do triângulo:"));

// Verificar se os comprimentos fornecidos formam um triângulo
if (!isNaN(lado1) && !isNaN(lado2) && !isNaN(lado3)) {
    if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
        // Verificar o tipo de triângulo
        if (lado1 === lado2 && lado1 === lado3) {
            console.log("O triângulo é equilátero.");
        } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
            console.log("O triângulo é isósceles.");
        } else {
            console.log("O triângulo é escaleno.");
        }
    } else {
        console.log("Os comprimentos fornecidos não formam um triângulo.");
    }
} else {
    console.log("Por favor, insira comprimentos válidos para os lados do triângulo.");
}
