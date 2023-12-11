function crescente() { //acao que o botao vai fzr e o id é o local que vai realizar a ação
    var num = document.getElementById("numero").value; //pegar numer0
    var seq = [] //lista
     
    seq.push(num); //criar uma sequencia com o push, adicionando os numeros, pegando o numero adicionado
    for (var i = 0; i < 10; i++){ //adicionando numero até adicionar 10, enquanto i for menor que 10, adiciona
        num++;
        seq.push(num); //adiciona e coloca

    }
    document.getElementById("p1").innerHTML += seq; //exibir resultados
         
}
    function decrescente() {

        var numd = document.getElementById("numero").value; //pegar numer0
        document.getElementById("p2").innerHTML += numd; //exibir resultados com o numero 50

        do{ //for tem limite de até 25
            numd--;
            document.getElementById("p2").innerHTML += "," + numd; //exibir resultados
        } while(numd !=0); //enquanto n for diferente de 0, a sequencia nao para
    }