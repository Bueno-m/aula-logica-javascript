//Declarando classe
class Pessoa{

    //Atributos de classe
constructor(nome, idade){
this.nome = nome;
this.idade = idade;
}

//Declarando um método
saudar() {
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
}

}


//Instânciando
const pessoa1 = new Pessoa("Matheus", 16);
const pessoa2 = new Pessoa("Gabriel", 16);
const pessoa3 = new Pessoa("Sabrina", 16);
console.log(pessoa1.saudar());
console.log(pessoa2.saudar());
console.log(pessoa3.saudar());


//Nova classe
class Carro {

    //atributos
    constructor(marca, modelo, cor){
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor
    }

    //método
    exibirInfo(){
        return `Carro: ${this.marca} ${this.modelo} ${this.cor}`;
    }
}

//Instância
const meuCarro = new Carro("Fusca", "1974", "Azul");
console.log(meuCarro.exibirInfo());