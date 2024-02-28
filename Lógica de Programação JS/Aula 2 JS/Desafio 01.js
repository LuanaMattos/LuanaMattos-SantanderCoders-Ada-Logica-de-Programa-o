//Declare duas variáveis, numero1 e numero2, com valores diferentes e calcule a
//soma, subtração, multiplicação e divisão desses números. Armazene os resultados em um array, sendo o
//Index: 0 = Soma
//1 = subtração
//2 = multiplicação
//3 = divisão


// Declare das variáveis 
const numero1 = 10;
const numero2 = 5;

// Calcule a soma, subtração, multiplicação e divisão
const soma = numero1 + numero2;
const subtracao = numero1 - numero2;
const multiplicacao = numero1 * numero2;
const divisao = numero1 / numero2;

// Armazene os resultados em um array
const resultados = [soma, subtracao, multiplicacao, divisao];

// Exiba os resultados
console.log("Soma:", resultados[0]);
console.log("Subtração:", resultados[1]);
console.log("Multiplicação:", resultados[2]);
console.log("Divisão:", resultados[3]);
