//Crie uma matriz (array bidimensional) chamada matriz que represente uma matriz
//2x2. Preencha a matriz com valores numéricos. Em seguida, calcule a
//determinante dessa matriz usando a fórmula matemática de determinante.

// Entrada dos dados
let navegador = prompt("Digite o nome do navegador:");
let sistemaOperacional = prompt("Digite o nome do sistema operacional:");

// Converter os valores para letras minúsculas
navegador = navegador.toLowerCase();
sistemaOperacional = sistemaOperacional.toLowerCase();

// Define os navegadores e sistemas operacionais compatíveis
let compativel = {
    navegadores: ["chrome", "firefox"],
    sistemasOperacionais: ["windows", "mac"]
};

// Verifica a compatibilidade
if (compativel.navegadores.includes(navegador) && compativel.sistemasOperacionais.includes(sistemaOperacional)) {
    alert("Navegador e OS compatíveis!");
} else {
    alert("Navegador e OS não correspondentes!");
}
