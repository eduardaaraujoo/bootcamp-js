//herança
//herdar algo = extends

// class Pessoa {
//     constructor(nome) {
//         this.nome = nome;
//     }
//     retornarNome(){
//         return this.nome;
//     }
// }

// class Aluno extends Pessoa { //extends herdar toda a class que esta extendendo
//     retornarMedia(){
//         return 10
//     }
// }


// class Professor extends Pessoa{
//     baterPonto(){
//         console.log("O professor " + this.nome + " está batendo o ponto às " + new Date());
//     }
// }

// var pessoa1 = new Pessoa("Joana");
// var aluno1 = new Aluno("Marcela");
// var professor1 = new Professor("Roberto");

// console.log(aluno1.nome);
// console.log(pessoa1.nome);






//EXERCÍCIO COM PASSO A PASSO:
//Crie uma class de funcionários que receba o nome, sobrenome e o setor do funcionario como parâmetro de inicialização.
    //1.1 Criar classe funcionario
    //1.2 Definir constructor
    //1.3 Definir os parâmetros de inicialização
    //1.4 Definir as propriedades da classe 
//Crie métodos com getters e setters
//Crie um atributo salário dentro da classe
//Crie um método para retornar o salário do funcionário de acordo com o setor 
//(deve ter pelo menos 3 setores com diferentes salários entre si
//Crie um método para reformar o nome completo do funcionário o setor e o salário dele
//Crie um método para verificar se o funcionário terá aumento. 

class Funcionarios {
    constructor(nome, sobrenome, setor){
        this._nome = nome;
        this._sobrenome = sobrenome;
        this._setor = setor;
    }

      
}