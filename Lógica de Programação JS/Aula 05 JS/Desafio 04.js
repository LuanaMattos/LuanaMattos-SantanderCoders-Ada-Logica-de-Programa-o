//Desafio 4
//- Adivinhe o Número
//● Crie um programa que gere um número aleatório entre 1 e 100. Em
//seguida, peça ao usuário para adivinhar o número. Use um loop
//while para continuar pedindo ao usuário que adivinhe até que ele
//acerte o número. Forneça dicas informando se o número é maior ou
//menor.

// Gerar um número aleatório entre 1 e 100
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

// Inicializar variáveis
let tentativas = 0;
let adivinhado = false;

// Loop while para continuar pedindo ao usuário que adivinhe
while (!adivinhado) {
    // Solicitar ao usuário para adivinhar o número
    const palpite = parseInt(prompt("Adivinhe o número (entre 1 e 100):"));
    tentativas++;

    // Verificar se o palpite está correto
    if (palpite === numeroAleatorio) {
        console.log("Parabéns! Você acertou o número " + numeroAleatorio + " em " + tentativas + " tentativas.");
        adivinhado = true;
    } else if (palpite < numeroAleatorio) {
        console.log("O número é maior. Tente novamente.");
    } else {
        console.log("O número é menor. Tente novamente.");
    }
}
