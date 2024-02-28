//Dado um array idades, encontre o índice do primeiro elemento que seja maior ou
//igual a 18.
//const idades = [15, 22, 17, 20, 30, 12];

// Array pré-definido
const idades = [15, 22, 17, 20, 30, 12];

// Encontrar o índice do primeiro elemento maior ou igual a 18
const indexValorMaiorOuIgual18 = idades.findIndex(idade => idade >= 18);

// Verificar se o índice é válido e recuperar o valor correspondente
let valorMaiorOuIgual18;
if (indexValorMaiorOuIgual18 !== -1) {
    valorMaiorOuIgual18 = idades[indexValorMaiorOuIgual18];
}

// Apresentar o array original, o índice e o valor do primeiro elemento maior ou igual a 18
console.log("Array original:", idades);
console.log("O índice e o valor do primeiro elemento maior ou igual a 18 são:", `Índice = ${indexValorMaiorOuIgual18}, Valor = ${valorMaiorOuIgual18}`);