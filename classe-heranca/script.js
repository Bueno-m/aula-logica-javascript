//Superclasse
class Animal{

    //Atributo
    constructor(nome){
        this.nome = nome;
    }
    //Método
    fazerSom(){
        console.log("O animal fez um som");
    }
}

//Subclasse
class Cachorro extends Animal{
    //Herdando o método da Superclasse e sobreescrevendo
    fazerSom(){
        console.log("O cachorro late")
    }
}

let rex = new Cachorro("Rex");
console.log(rex.nome);
rex.fazerSom();