function myFunction(){
    var n = prompt("Digite o seu nome: ");
    var e = prompt("Digite o seu email: ");
    var lista = document.createElement("li");
    lista.innerHTML = "Nome: " + n + "," + " Email: " + e;
    var element = document.getElementById("lista");
    element.appendChild(lista);
}