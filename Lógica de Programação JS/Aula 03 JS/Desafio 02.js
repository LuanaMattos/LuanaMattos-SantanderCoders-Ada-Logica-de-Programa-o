//Desafio 02
//Crie uma agenda de contatos que armazene vários contatos em um array,
//modelando o "contato" como um objeto: (Nome, telefone, email) (Não utilizar Map)

// Definindo a classe Contato
class Contato {
          constructor(nome, telefone, email) {
              this.nome = nome;
              this.telefone = telefone;
              this.email = email;
          }
      }
      
      // Criando a agenda de contatos
      const agendaDeContatos = [];
      
      // Adicionando contatos à agenda
      const contato1 = new Contato("Cristiano Henrique", "99786541", "crishenrique@yahoo.com.br");
      const contato2 = new Contato("Mônica Souza", "987561213", "monicasouza@hotmail.com");
      
      // Adicionando os contatos ao array agendaDeContatos
      agendaDeContatos.push(contato1, contato2);
      
      // Exibindo a agenda de contatos
      console.log("Agenda de Contatos:");
      agendaDeContatos.forEach((contato, index) => {
          console.log(`Contato ${index + 1}:`);
          console.log(`Nome: ${contato.nome}`);
          console.log(`Telefone: ${contato.telefone}`);
          console.log(`Email: ${contato.email}`);
          console.log("--------------------");
      });
      