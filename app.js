//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//Passo 01: Implementa uma função para agregar amigos
function adicionarAmigo() {
    //Tarefa 01: Capturar o valor do campo de entrada
    let input = document.getElementById("amigo");
    let nome = input.value.trim().toLowerCase();
    let listaAmigos = document.getElementById("listaAmigos");
    //Tarefa 02: Validar a entrada
    if (nome !== "") {
        let nomesExistentes = Array.from(listaAmigos.children).map(li => li.textContent.toLowerCase());
        
        if (!nomesExistentes.includes(nome)) {
            let li = document.createElement("li");
            li.textContent = nome;
            listaAmigos.appendChild(li);
            input.value = "";
        } else {
            alert("Este nome já foi adicionado.");
        }
    } else {
        alert("Por favor, insira um nome.");
    }
}

//Passo 02: Implementa uma função para atualizar a lista de amigos
function sortearAmigo() {
    //Tarefa 01: Obter o elemento da lista
    let lista = document.querySelectorAll("#listaAmigos li");
    let resultado = document.getElementById("resultado");
    //Tarefa 02: Limpar a lista existente
    resultado.innerHTML = "";

//Passo 03: Implementa uma função para sortear os amigos
    //Tarefa 01: Validar que há amigos disponíveis:
    if (lista.length > 0) {
    //Tarefa 02: Gerar um índice aleatório
        let index = Math.floor(Math.random() * lista.length);
    //Tarefa 03: Obter o nome sorteado
        let sorteado = lista[index].textContent;
        lista[index].remove();
    //Tarefa 04: Mostrar o resultado
        let li = document.createElement("li");
        li.textContent = `Seu amigo secreto é: ${sorteado}!`;
        resultado.appendChild(li);
    } else {
        alert("Insira pelo menos um nome válido.");
    }
}