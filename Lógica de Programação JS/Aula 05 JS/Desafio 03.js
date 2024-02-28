//- Soma de Números Pares
//● Desenvolva um programa que peça ao usuário para inserir números
//inteiros. Use um loop while para calcular a soma dos números
//pares inseridos pelo usuário. Pare a entrada quando o usuário
//inserir 0 e exiba a soma total.



// Variável para armazenar a soma
let somaPares = 0;


// Pede para o usuário insiri o número
let numero = parseInt(prompt("Digite um número inteiro (ou 0 para sair):"));
while (numero !== 0) {
    // Verificar se o número é par
    if (numero % 2 === 0) {
        // Se for par, adicionar à soma
        somaPares += numero;
    }
    // Solicitar ao usuário inserir outro número
    numero = parseInt(prompt("Insira um número:"));
}

// Exibir a soma dos números pares inseridos
console.log("A soma dos números pares inseridos é: " + somaPares);