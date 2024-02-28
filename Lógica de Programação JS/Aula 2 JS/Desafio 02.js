//Crie um vetor (array) chamado notas com as notas de um aluno em três
//disciplinas. Em seguida, calcule a média das notas usando a fórmula matemática
//da média aritmética.

// Crie um vetor (array) chamado notas com as notas de um aluno em três disciplinas
const notas = [7.5, 8.0, 6.5];

// Calcule a média das notas
const totalNotas = notas.reduce((acc, nota) => acc + nota, 0);
const media = totalNotas / notas.length;

console.log("Notas:", notas);
console.log("Média:", media);
