//Crie um vetor (array) chamado vetor1 com valores de coordenadas x e outro
//vetor vetor2 com valores de coordenadas y. Calcule o produto escalar (produto
//interno) desses dois vetores usando a fórmula matemática do produto escalar

// Crie vetores (arrays) com valores    
const vetor1 = [4, 7, 9];
const vetor2 = [1, 8, 12];

// Verifique se os vetores têm o mesmo comprimento
if (vetor1.length !== vetor2.length) {
    console.log("Os vetores precisam ter o mesmo comprimento para calcular o produto escalar.");
} else {
    // Calcule o produto escalar (produto interno) dos vetores
    let produtoEscalar = 0;
    for (let i = 0; i < vetor1.length; i++) {
        produtoEscalar += vetor1[i] * vetor2[i];
    }

    console.log("Vetor 1:", vetor1);
    console.log("Vetor 2:", vetor2);
    console.log("Produto Escalar:", produtoEscalar);
}