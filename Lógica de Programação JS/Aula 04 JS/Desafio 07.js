// Desafio 7
// - Verificação de Números Pares e Ímpares
// ● Escreva um programa que recebe um número como entrada e verifica 
// se é par ou ímpar. Imprima "É par" se for par e "É ímpar" se for 
// ímpar. (Usar switch Case)



const numero = parseInt(prompt("Digite um número:"));

switch (numero % 2) {
    case 0:
        console.log("É par");
        break;
    case 1:
    case -1: // Caso o número seja negativo
        console.log("É ímpar");
        break;
    default:
        console.log("Número inválido");
}
