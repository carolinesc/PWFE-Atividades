function mostrar(){
    var saque = document.getElementById("s1").value;
    let x = 0;
    let y = 0;
    let z = 0;
    saque /= 10;
    if(saque != parseInt(saque)){
        alert('Valor Inválido');
    }else{
        
        do{
            if(saque >= 10){
            saque = saque - 10;
            x++;
        } else if(saque >= 5){
            saque = saque - 5;
            y++;
        } else{
            saque = saque - 1;
            z++;
        }
    }while(saque != 0);
}
document.getElementById("d1").innerHTML = "Notas de R$100: " + x;
document.getElementById("d2").innerHTML = "Notas de R$50: " + y;
document.getElementById("d3").innerHTML = "Notas de R$10: " + z;
} 