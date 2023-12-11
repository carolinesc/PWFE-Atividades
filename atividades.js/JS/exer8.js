function verificar() {
    var senha = document.getElementById('senha').value;
    var texto = document.getElementById('texto');
    
    if (senha.length < 8 ) {
        texto.innerText = 'A senha deve possuir entre 8 e 15 caracteres';
        return;
      
    } 
        if (senha.length > 15) {
        texto.innerText = 'A senha deve possuir entre 8 e 15 caracteres';
        return;
      }
    
      if (!senha.match(/[0-9]/g)) {
        texto.innerText = 'A senha deve possuir números (no mínimo, 1).';
        return;
      } if (!senha.match(/[A-Z]+2/g )) {
        texto.innerText = 'A senha deve possuir letras maiúsculas (no mínimo, 2).';
        return;
      
    }
     
      if (!senha.match(/[a-z]/g)) {
        texto.innerText = 'A senha deve possuir letras minúsculas (no mínimo, 1).';
        return;
      }
      
      else {
        texto.innerText = 'A senha é válida!';
      }
      
    }