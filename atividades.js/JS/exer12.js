
var categoria;
var traco = "";

function categorizar(){
    var idade = document.getElementById("i2").value;
    if(idade < 12){
        categoria = "Mirim";
    } else if(idade > 12 && idade < 18){
        categoria = "Juvenil";
    } else if(idade > 18){
        categoria = "Adulta";
    }
}
function retornar(){
    var nome = document.getElementById("i1").value;
    nome = nome.split(" ");

    for (var i = 0; i < nome.length; i++) {
        var letras = nome[i].split('');
        traco = traco + " " + "-".repeat(letras.length);
    }
}

function exibir(){
    var nome = document.getElementById("i1").value;
    categorizar();
    retornar();
    document.getElementById("p1").innerHTML = nome + "<br>" + traco + "<br>Categoria: " + categoria;
    console.log(typeof nome);
    console.log(typeof traco);
    console.log(traco);
}

