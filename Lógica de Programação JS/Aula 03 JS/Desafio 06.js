// Desafio 06
// Crie um objeto chamado aluno com as propriedades nome, nota1, e nota2. 
// Calcule a média das notas. 
// Verifique se a média é maior ou igual a 7 usando operadores de comparação.

// Criando o objeto aluno
const aluno = {
          nome: "Andriano",
          nota1: 9,
          nota2: 7
      };
      
      // Calculando a média das notas
      const media = (aluno.nota1 + aluno.nota2) / 2;
      
      // Verificando se a média é maior ou igual a 7
      const aprovado = media >= 7;
      
      // Exibindo os resultados
      console.log("Média das notas:", media);
      console.log("Aprovado:", aprovado);
      