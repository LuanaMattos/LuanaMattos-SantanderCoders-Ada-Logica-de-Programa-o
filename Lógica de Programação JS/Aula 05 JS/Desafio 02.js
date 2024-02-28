//- Números Primos
//● Crie um programa que peça ao usuário para inserir um número e
//use um loop while para verificar se o número é primo ou não. Um
//número primo é aquele que só é divisível por 1 e por ele mesmo.
//mprima se o número é primo ou não.

// Solicitar ao usuário para inserir um número
let numero = parseInt(prompt("Insira um número:"));

// Verificar se o número é maior que 1
if (numero > 1) {
    let divisor = 2;
    let primo = true;

    // Loop while para verificar divisibilidade
    while (divisor < numero) {
        if (numero % divisor === 0) {
            // Se o número for divisível por outro além de 1 e ele mesmo, não é primo
            primo = false;
            break;
        }
        divisor++;
    }

    // Verificar se o número é primo ou não e imprimir o resultado
    if (primo) {
        console.log(numero + " é um número primo.");
    } else {
        console.log(numero + " não é um número primo.");
    }
} else {
    console.log("Por favor, insira um número maior que 1.");
}

