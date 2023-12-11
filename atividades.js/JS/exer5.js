function verificar(){ //função criada
    let number = document.getElementById("numero").value; //pega o valor colocado no input
    if(number %2 == 0) { //porcentagem é o mode, resto da divisão
        document.getElementById("ver").innerHTML = "Resposta: O número " + number + " é par."; //exibe resultados
    } else if(number %2 >0){ //se sobrar, é impar
        document.getElementById("ver").innerHTML = "Resposta: O número " + number + " é ímpar."; //exibe resultados
    }
}
