function adicionar(){
    var nome = document.getElementById("nome").value; 
    var novosEle = document.createElement("li"); //criar novos elementos na lista
    novosEle.innerHTML = nome; //colocar nome na lista com o inner
    var element = document.getElementById("eleNovo"); //elemento que recebe os novos elementos na lista
    element.appendChild(novosEle); //criar filho
}

function emergencia(){
    var nome = document.getElementById("nome").value;
    var novosEle = document.createElement("li"); //criar novos elementos na lista
    novosEle.innerHTML = nome; //colocar nome na lista com o inner
    var element = document.getElementById("eleNovo"); //elemento que adiciona novos elementos na lista
    element.insertBefore(novosEle, element.firstChild); //pegar o elemento adicionado e colocar em primeiro

}

function atender(){
    var p = document.getElementById("p1"); //variavel do elemento p1
    var element = document.getElementById("eleNovo"); //pegar o elemento
    p.innerHTML = element.firstElementChild.textContent; //pegar o primeiro elemento da lista e exibir
    element.removeChild(element.firstChild); //tira o primwiro filho da lista
}