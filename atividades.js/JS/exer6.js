function gerar() {
    var nomeCompleto = document.getElementById("nomeAutor").value; //pegar nome
    
        // Divide o nome em palavras
        var dividir = nomeCompleto.split(" "); //vai dividir as palavras, para não pegar tds de uma vez

            var inicialPrimeiro = dividir[0].charAt(0).toUpperCase(); //quando colocamos o 0 pegamos o primeiro nome 
            var inicialSegundo = dividir[1].charAt(0).toUpperCase();  //quando colocamos o 1 pegamos o segundo nome 
            
            var sobrenome = dividir[dividir.length - 1].toUpperCase();
           
            
            var referencia = sobrenome + ", " + inicialPrimeiro + ". " + inicialSegundo + ".";
            document.getElementById("referencia").innerText = "Referência Bibliográfica: " + referencia;
    }
    
