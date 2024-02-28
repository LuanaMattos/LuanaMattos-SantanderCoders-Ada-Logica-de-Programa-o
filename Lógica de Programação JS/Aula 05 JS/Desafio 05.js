//- Jogo de Adivinhação com Limite
//● Modifique o jogo de adivinhação do Desafio 4 para limitar o
//número de tentativas. Se o usuário não adivinhar o número dentro
//de um determinado número de tentativas (por exemplo, 5
//tentativas), o programa deve encerrar e informar o número correto.


const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
// Inicializa o contador de tentativas
const limiteTentativas = 5;
let tentativas = 0;

do {
    const palpite = parseInt(prompt("Adivinhe o número entre 1 e 100:"));
// Verifica se o palpite está correto
    if (palpite === numeroAleatorio) {
        console.log(`Parabéns! Você acertou o número em ${tentativas + 1} tentativa(s).`);
        break;
    } else if (palpite < numeroAleatorio) {
        console.log("Tente um número maior.");
    } else {
        console.log("Tente um número menor.");
    }
//Contador de tentativas
    tentativas++;
} while (tentativas < limiteTentativas);

if (tentativas === limiteTentativas) {
    console.log(`Suas ${limiteTentativas} tentativas acabaram. O número correto era: ${numeroAleatorio}.`);
}
