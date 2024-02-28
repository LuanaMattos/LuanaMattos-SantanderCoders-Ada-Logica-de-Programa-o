// Desafio 07
// Crie um mapa chamado frutas onde as chaves são nomes de frutas e os valores 
// são seus preços. 
// Verifique se a maçã é mais cara que a banana
// Verifique se a pêra não custa o mesmo que a uva.

// Map de Frutas
const frutas = [
          { nome: 'maçã', preco: 3 },
          { nome: 'banana', preco: 2.5 },
          { nome: 'pêra', preco: 3.5 },
          { nome: 'uva', preco: 2.75 }
      ];
      
      // Imprimindo a tabela de preços
      console.log('Tabela de preços:');
      frutas.forEach(fruta => {
          console.log(`${fruta.nome}: R$ ${fruta.preco}`);
      });
      
      // Verificando se a maçã é mais cara que a banana
      const macaMaisCaraQueBanana = frutas.find(fruta => fruta.nome === 'maçã').preco > frutas.find(fruta => fruta.nome === 'banana').preco;
      console.log('A maçã é mais cara que a banana:', macaMaisCaraQueBanana);
      
      // Verificando se a pêra não custa o mesmo que a uva
      const peraNaoCustaMesmoQueUva = frutas.find(fruta => fruta.nome === 'pêra').preco !== frutas.find(fruta => fruta.nome === 'uva').preco;
      console.log('A pêra não custa o mesmo que a uva:', peraNaoCustaMesmoQueUva);
      