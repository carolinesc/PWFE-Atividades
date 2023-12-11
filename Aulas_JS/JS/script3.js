function submitFunction(campo1, campo2){
    if(campo1.value == null || campo1.value == ""){
        alert("Favor preencher o campo 1");

    } else if(campo2.value == null || campo2.value == ""){
        alert("Favor preencher o campo 2");

    } else {
        alert("Obrigado!!!");

    }
}
window.onbeforeunload = function(){
    return 'Tchau';
}