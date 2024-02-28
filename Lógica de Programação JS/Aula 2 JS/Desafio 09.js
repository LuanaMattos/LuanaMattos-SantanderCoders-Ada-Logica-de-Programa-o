//Dado um array notas, calcule a média aritmética das notas, mas ignore a nota
//mais baixa e a nota mais alta do conjunto.
//const notas = [8, 9, 7, 5, 10, 6];

//Array base
const notas = [8, 9, 7, 5, 10, 6];

// Encontre a menor e a maior nota
const menorNota = Math.min(...notas);
const maiorNota = Math.max(...notas);

// Remova a menor e a maior nota do array original
const notasSemExtremos = notas.filter(nota => nota !== menorNota && nota !== maiorNota);

// Calcule a média aritmética das notas restantes
const media = notasSemExtremos.reduce((total, nota) => total + nota, 0) / notasSemExtremos.length;

console.log("Notas:", notas);
console.log("Média aritmética (sem extremos):", media);
