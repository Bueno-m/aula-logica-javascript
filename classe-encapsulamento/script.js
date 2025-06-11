class Pessoa {
    constructor(nome, idade){
        this._nome = nome;
        this._idade = idade;
    }

    get nome(){
        return this._nome;
    }

    set nome(novoNome){
        this._nome = novoNome;
    }
}

let pessoa = new Pessoa("Matheus", 16);
console.log(pessoa.nome);
pessoa.nome = "Matheus Bueno";
console.log(pessoa.nome);