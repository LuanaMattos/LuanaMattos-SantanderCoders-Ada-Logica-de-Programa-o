//Dado um array idades, encontre o índice do último elemento que sejam maior ou
//igual a 18.
//const idades = [15, 22, 17, 20, 30, 12];

// Array original
const idades = [15, 22, 17, 20, 30, 12];

// Identificar os índices dos valores maiores ou iguais a 18 usando reduce
const maioresDezoito = idades.reduce((acumulador, idade, index) => {
    if (idade >= 18) {
        acumulador.push({ index, idade });
    }
    return acumulador;
}, []);

// Exibir o array original e o array com o índice e o valor referente a cada um
console.log("Array original:");
console.log(idades);

console.log("\nÍndices e valores correspondentes aos maiores ou iguais a 18:");
console.log(maioresDezoito);
