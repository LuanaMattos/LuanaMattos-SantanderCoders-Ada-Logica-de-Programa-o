// Desafio 3
// - Determinação do Maior Número
// ● Escreva um programa que receba três números como entrada e
// determina o maior deles. Imprima o número mais alto.


// Solicitar ao usuário três números e armazená-los 
const numero1 = parseFloat(prompt("Digite o primeiro número:"));
const numero2 = parseFloat(prompt("Digite o segundo número:"));
const numero3 = parseFloat(prompt("Digite o terceiro número:"));

// Verificar qual número é o maior usando condicionais
if (!isNaN(numero1) && !isNaN(numero2) && !isNaN(numero3)) {
    if (numero1 >= numero2 && numero1 >= numero3) {
        console.log("O maior número é:", numero1);
    } else if (numero2 >= numero1 && numero2 >= numero3) {
        console.log("O maior número é:", numero2);
    } else {
        console.log("O maior número é:", numero3);
    }
} else {
    console.log("Por favor, insira números válidos.");
}
