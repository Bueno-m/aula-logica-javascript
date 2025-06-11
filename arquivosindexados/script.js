//Abrindo um banci de dados IndexdDB
const request = indexedDB.open("clienteDB", 1);

request.onupgradeneeded = function(event){
    const db = event.target.result;
    const store = db.createObjectStore("cliente", {keyPath: "id"});
    store.createIndex("nome", "nome", {unique: false});
}

request.onsucess = function(event) {
    const db = event.target.result;
    const transaction = db.transaction("clientes", "readwrite");
    const store = transaction.objectStore("clientes");


//Adicionando um novo cliente
store.add({ id: 1, nome: "Matheus Bueno", email: "matheusbuenorocha@gmail.com" });

//Lendo um cliente pelo nome
const index = store.index("nome");
const nomeIndex = index.get("Matheus Bueno");

nomeIndex.onsucess = function(){
    console.log(nomeIndex.result)
}
}