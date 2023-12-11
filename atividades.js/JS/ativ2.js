function obterListaPaciente(){
    return JSON.parse(localStorage.getItem('listaPaciente')) || []; //json recebe todos os dados do usuario e qr armazenar em um site, ent ele converte oq ta no formulario
    //e fazer uma tranformaçao para string

}
function salvarListaPaciente(lista){
    localStorage.setItem('listaPaciente',JSON.stringify(lista)); //salva a lista convertida em string

}
let listaPaciente = obterListaPaciente();

function adicionaPaciente(){
    const nome = document.getElementById('nome-paciente').value;
    listaPaciente.push(nome);
    salvarListaPaciente(listaPaciente);
    atualizarListaPaciente();
    limparCampos();

}
//funcao atualizar

function atualizarListaPaciente(){
    const lista = document.getElementById("lista-paciente");
        lista.innerHTML = '';
        listaPaciente.forEach((paciente) =>{
    const li = document.createElement('li');
    li.textContent = `${paciente}`;
    lista.appendChild(li);


     });
       
}




//limpar campos
function limparCampos(){

    document.getElementById("nome-paciente").value = "";
}


function emergencia(){
    var nome = document.getElementById("nome-paciente").value;
    var paci = document.createElement("li"); //criar novos elementos na lista
    paci.innerHTML = nome; //colocar nome na lista com o inner
    var element = document.getElementById("lista-paciente"); //elemento que adiciona novos elementos na lista
    element.insertBefore(paci, element.firstChild); //pegar o elemento adicionado e colocar em primeiro

}

function atender(){
    var p = document.getElementById("p1"); //variavel do elemento p1
    var element = document.getElementById("lista-paciente"); //pegar o elemento
    p.innerHTML = element.firstElementChild.textContent; //pegar o primeiro elemento da lista e exibir
    element.removeChild(element.firstChild); //tira o primwiro filho da lista
    
    
}





