//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//Passo 01: Crie um array para armazenar os nomes
//let amigos = [];

//Passo 02: Implementa uma função para agregar amigos
function agregarAmigo() {
    //Tarefa 01: Capturar o valor do campo de entrada
    let inputAmigo = document.getElementById("amigo");
    let nomeAmigo = inputAmigo.value.trim();
    let listaAmigos = document.getElementById("listaAmigos");
    //Tarefa 02: Validar a entrada
    if(nomeAmigo !== "") {
        let nomesExistentes = Array.from(listaAmigos.children).map(li=> li.textContent.toLowerCase());
    //Tarefa 03: Se estiver vazio, exiba um alerta com a mensagem de erro
        if(!nomesExistentes.includes(nomeAmigo)) {
            let li = document.createElement("li");
            li.textContent = nomeAmigo;
            listaAmigos.appendChild(li);
            input.value = "";
        } else {
            alert("Este nome já está na lista.");
        }
    } else {
        alert("Por favor, insira um nome.");
    }
}
    
//Passo 03: Implementa uma função para atualizar a lista de amigos
function atualizarLista() {
    let listaAtualizada = document.getElementById("listaAmigos");
    //Tarefa 01: Obter o elemento da lista
    //Tarefa 02: Limpar a lista existente
    listaAtualizada.innerHTML = "";
    //Tarefa 03: Percorrer o array
    for(let i = 0; i < listaAmigos.length; i++) {
        //Tarefa 04: Adicionar elementos à lista
        let itemLista = document.createElement("li");
        itemLista.innerHTML = listaAmigos[i];
        listaAtualizada.appendChild(itemLista);
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

