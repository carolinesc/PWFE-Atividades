
function crescente() {
    let num = document.getElementById("numero").value;
    let seq = [];
    seq.push(num);
 
    for (let i = 0; i < 10; i++) {
      num++;
      seq.push(num);
    }
  
   
    let jsonSeq = JSON.stringify(seq);
    document.getElementById("p1").innerHTML += jsonSeq;
  }
  
 
  function decrescente() {
    let n = document.getElementById("numero").value;
    document.getElementById("p2").innerHTML += n;
  
    do {
      n--;
      document.getElementById("p2").innerHTML += "," + n;
    } while (n != 0);
  }