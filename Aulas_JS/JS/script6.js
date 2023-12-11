function limpa_form(){
    document.getElementById('rua').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('cidade').value=("");
    document.getElementById('estado').value=("");
}
function atualiza_campos(conteudo){
    if(!("erro" in conteudo)){
        document.getElementById('rua').value=(conteudo.logradouro);
        document.getElementById('bairro').value=(conteudo.bairro);
        document.getElementById('cidade').value=(conteudo.localidade);
        document.getElementById('estado').value=(conteudo.estado);

    }else {
        limpa_form();
        alert("CEP não encontrado!");
    }
}
function pesquisacep(valor){
    //variavel cep recebe apenas valores decimais(inteiros)
    var cep = valor.replace(/\D/g,'');
    //condiçao de validacao
    if(cep != ""){
        var validacep = /^[0-9]{8}$/;
        //valida o formato do cep
        if(validacep.test(cep)){
        document.getElementById('rua').value="carregando";
        document.getElementById('bairro').value="carregando";
        document.getElementById('cidade').value="carregando";
        document.getElementById('estado').value="carregando";
        //criou no(elemento)
        var elemento = document.createElement('script');
        //adiciona informaçao ao elemento
    elemento.src = 'https://viacep.com.br/ws/' + cep + "/json/?clalback=atualiza_campos";
        //insere script no documento e carrega seu conteudo
        document.body.appendChild(elemento);
    }else{
        limpa_form();
        alert("Formato de CEP inválido!");
    }
}
 else{
        limpa_form();
    }
};