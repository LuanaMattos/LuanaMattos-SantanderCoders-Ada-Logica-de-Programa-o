///Crie um vetor (array) chamado notas com as notas de um aluno em três disciplinas. 
///Em seguida, calcule a média das notas usando a fórmula matemática da média aritmética.

let salario = parseFloat(prompt("Digite o salário:"));
let score = parseInt(prompt("Digite o score de crédito:"));
let idade = parseInt(prompt("Digite a idade:"));

// Verifica se foi aprovado para o empréstimo
let aprovado = salario >= 5000 && score >= 700 && idade >= 18;

// Mostra o resultado
if (aprovado) {
    alert("Aprovado para o empréstimo!");
} else {
    alert("Não aprovado para o empréstimo!");
}