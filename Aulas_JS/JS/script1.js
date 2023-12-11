/*var pessoas = ["Maria", "José", "Carlos", "Ana"];
var pessoas = ["Colher", "Garfo"];
var pessoas = ["Uva", "Maça", "Abacaxi"];
document.write(pessoas[0]); //representa maria
document.write(pessoas.length); //resultado igual a 4
objetos[objetos.length] = "Faca"; //add um elemento ao array
frutas.indexOf("Uva"); //resultado 0

var lugares = ["Coliseu", "Paris", "Veneza", "Las Vegas", "Itália", "Flórida", "Miami"]; //criando lista
document.write(lugares[0]); //representa coliseu
document.write("Tamanho da lista" + lugares.length); //exibindo tamanho da lista
document.write("<br>Lista antes de incrementar" + lugares); //resultado igual a 7
lugares[lugares.length] = "New York";  //adicionando novo elemento
lugares[lugares.length] = "Austrália"; //adicionando novo elemento
document.write("<br>Posiçao do elemento inicial: "); //exibinod posiçao do elemento inicial
document.write(lugares.indexOf("Coliseu")); //exibir primeiro elemento
document.write("<br>Lista depois de incrementar: "); //exibir lista final */

    /*var d = new Date ("October 13, 2014 11:13:00");
    document.getElementById("D1").innerHTML = d;

    d = new Date(0);
    document.getElementById("D2").innerHTML = d;

    var d = new Date (99,5,24,11,33,30, 0);
    document.getElementById("D3").innerHTML = d;


    var d = new Date (2014,7,20);
    document.getElementById("D4").innerHTML = d; */

    /* = new Date();
    document.write("<br>" + d.toUTCString());
    document.write("<br>" + d.toDateString());
    document.write("<br>" + d.toLocaleDateString());
    document.write("<br>" + d.toLocaleTimeString('pt-PT', {hour12: false}));

    d6.touchda*/
/*
    var hoje, prazo;
    hoje = new Date;
    prazo = new Date;

    prazo.setFullYear(2023, 10,28);
    var dia = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    document.write("<p>Hoje é: " + dia[hoje.getDay()] + ", " + hoje.getDate() + "/" + (hoje.getMonth() ) + "/" + hoje.getFullYear() + "</p>");
    document.write("<p>O prazo é: " + dia[prazo.getDay()] + ", " + prazo.getDate() + "/" + (prazo.getMonth() + 1) + "/" + prazo.getFullYear() + "</p>");

        try{
            var x;
            if(x == "") throw "vazio";
            if(isNaN(x)) throw "não é um número";
            if(x == 10) throw x;
            console.log(x);
            document.write(x);

        } catch(err) {
            console.log("Input is " + err);
            document.write("Input is " + err);
        }
*/
/*try {
    adddlert("ERRO!!!"); //adddlert nao existe
}
catch(err) {
    document.write = err.message;
}
var dividendo = 10;
var divisor = 0;

try{
    if(divisor == 0) {
        throw new
        Error("Erro: Divisão por zero não é permitida");
    }
    var resultado = dividendo/divisor;
    console.log("Resultado: ", resultado);

} catch(err) {
    console.log(err.message);
}
    function myFunction(){
        var message, x;
        message = document.getElementById("message");
        message.innerHTML = "";
        x = document.getElementById("demo").value;
        try{
            if(x == "") throw "empty";
            if(isNaN(x)) throw "not a number";
            x = Number(x);
            if(x < 5) throw "too low";
            if(x > 10) throw "too high";

        }catch(err){
            message.innerHTML = "input is " + err;
        }

    }*/
    try {
        adddalert("ERRO!!!");

    } catch(err) {
        document.write }