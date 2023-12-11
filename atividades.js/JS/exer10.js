function tabuada(){

    var num = document.getElementById("i1").value;
    document.getElementById("n1").innerHTML = "";
    var element = document.getElementById("n1");
    
    
    if(num == ""){
        num = 0;
    }

    for (var i = 0; i < 10; i++) {
        var result = document.createElement("p");
        result.textContent = num + " x " + (i+1) + " = " + num*(i+1);
        element.appendChild(result);
    }
}
