//Dado um array nomes, remova todos os nomes que contenham menos de 5 letras.
//const nomes = ["Alice", "Bob", "Eva", "John", "Daniel", "Isabel"];

// Array pré-definido
const nomes = ["Alice", "Bob", "Eva", "John", "Daniel", "Isabel"];

// Filtrar os nomes com menos de 5 letras diretamente
const nomesMaisDe5Letras = nomes.filter(nome => nome.length >= 5);

// Exibir o array original e o resultado
console.log("Array original:", nomes);
console.log("Nomes com mais de 5 letras:", nomesMaisDe5Letras);
