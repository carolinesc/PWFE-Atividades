function exibir(){
    var num = document.getElementById("i1").value;
    document.getElementById("opcoes").innerHTML = "";
    var element = document.getElementById("opcoes");
    if(num == ""){
        num = 0;
    }
    for (var i = 0; i < 10; i++) {
        var parcela = num/(i+1);
        var parfixa = parcela.toFixed(2);
        var result = document.createElement("p");
        node.textContent = (i+1) + "x de R$: " + parfixa;
        element.appendChild(result);
    }
}