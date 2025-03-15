//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//Passo 01: Crie um array para armazenar os nomes
let amigos = [];

//Passo 02: Implementa uma função para agregar amigos
function agregarAmigo() {
    //Tarefa 01: Capturar o valor do campo de entrada
    const inputAmigo = document.getElementById("amigo");
    //Tarefa 02: Validar a entrada
    const nomeAmigo = inputAmigo.value.trim();
    //Tarefa 03: Se estiver vazio, exiba um alerta com a mensagem de erro
    if(nome == ""){
        alert("Por favor, insira um nome.");
        return;
    }
    //Verificar se não há nome duplicado?
    if(amigos.includes(nomeAmigo)){
        alert(`O nome ${nomeAmigo}` já está na lista.);
        return;
    }
    //Tarefa 04: Atualizar o array de amigos
    amigos.push(nomeAmigo);
    //Tarefa 05: Limpar o campo de entrada
    inputAmigo.value = "";
    //Atualizar lista no HTML?
    atualizarLista();

}
    
//Passo 03: Implementa uma função para atualizar a lista de amigos
function atualizarLista() {
    //Tarefa 01: Obter o elemento da lista
    const listaAmigos = document.getElementById("listaAmigos");
    //Tarefa 02: Limpar a lista existente
    listaAmigos.innerHTML = "";
    //Tarefa 03: Percorrer o array
    for(let z = 0; z <amigos.length; z++){
        //Tarefa 04: Adicionar elementos à lista
        const li = document.createElement("li");
        li.textContent = amigos[z];
        listaAmigos.appendChild(li);
    }

}
    
//Passo 04: Implementa uma função para sortear os amigos
function sortearAmigo(){
    //Tarefa 01: Validar que há amigos disponíveis
    if(amigos.length == 0){
        alert("Não há amigos disponíveis para sortear. Adicione pelo menos um nome.");
        return;
    }
    //Tarefa 02: Gerar um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    //Tarefa 03: Obter o nome sorteado
    const amigoSorteado = amigos[indiceAleatorio];
    //Tarefa 04: Mostrar o resultado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}


//Passo 05 (Extra): README



//Passo 06 (Extra): Publique sua página

