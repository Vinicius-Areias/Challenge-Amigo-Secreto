//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//Passo 01: Crie um array para armazenar os nomes
let amigos =[];

//Passo 02: Implementa uma função para agregar amigos
function agregarAmigo(){
    //Tarefa 01: Capturar o valor do campo de entrada
    const inputAmigo = document.getElementById("amigo");
    //Tarefa 02: Validar a entrada
    const nomeAmigo = inputAmigo.ariaValueMax.trim();
    //Tarefa 03: Se estiver vazio, exiba um alerta com a mensagem de erro
    if(nome == ""){
        alert("Por favor, insira um nome.");
        return;
    }
    //Verificar se não há nome duplicado?
    if(amigos.includes(nomeAmigo)){
        alert(`O nome ${nomeAmigo}` já está na lista.);
    }
    //Tarefa 04: Atualizar o array de amigos
    amigos.push(nomeAmigo);
    //Tarefa 05: Limpar o campo de entrada
    inputAmigo.ariaValu = "";
    //Atualizar lista no HTML?
    atualizarLista();

}
    
//Passo 03: Implementa uma função para atualizar a lista de amigos

    //Tarefa 01: Obter o elemento da lista

    //Tarefa 02: Limpar a lista existente

    //Tarefa 03: Percorrer o array

    //Tarefa 04: Adicionar elementos à lista


//Passo 04: Implementa uma função para sortear os amigos

    //Tarefa 01: Validar que há amigos disponíveis

    //Tarefa 02: Gerar um índice aleatório

    //Tarefa 03: Obter o nome sorteado

    //Tarefa 04: Mostrar o resultado


//Passo 05 (Extra): README



//Passo 06 (Extra): Publique sua página

