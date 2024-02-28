//Dado um array numeros, crie um novo array que contenha apenas os números pares
//do array original.
//const numeros = [3, 8, 15, 21, 30, 37, 42];

// Array pré-definido
const numeros = [3, 8, 15, 21, 30, 37, 42];
const numerosPares = [];

// Percorra o array numeros
for (let i = 0; i < numeros.length; i++) {
    // Verifique se o número é par
    if (numeros[i] % 2 === 0) {
        // Se for par, adicione-o ao array numerosPares
        numerosPares.push(numeros[i]);
    }
}

console.log("Números Pares:", numerosPares);
