function mostrar(){
   
    var nome = document.getElementById("c1");
    var preco = document.getElementById("c2");
    preco = Math.trunc(preco.value);
    document.getElementById("d1").innerHTML = "<br><b>Promoção de" + nome.value + "<br> Leve 2 por apenas" + "R$: " + preco*2 + ",00</br>";
}