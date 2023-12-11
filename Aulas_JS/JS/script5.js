/*var titulo = document.getElementById("titulo"); // seleciona elemento
var conteudo = titulo.textContent; //seleciona o conteudo texto do elemento
console.log(conteudo); //imprime seu cabecalho*/

/*var elemento = document.getElementsByClassName("exemplo1");
elemento[0].innerHTML = "testando classe";
console.log("JS" + elemento[0].innerHTML);*/

var num = document.getElementsByName("cor").length;
document.getElementById("seletor").innerHTML = num;
console.log("JS numero = " + num);
