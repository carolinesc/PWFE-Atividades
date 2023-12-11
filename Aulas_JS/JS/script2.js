function blurFunction(){
    document.getElementById("myInput").style.background="red";
}
function myFunction(val){
    alert("mudou para " + val);
}
function loadFunction(){
    alert("Página Carregada!!!");
}
function mouseDown() {
    document.getElementById("myP").style.color = "red";

}
function mouseUp() {
    document.getElementById("myP").style.color = "green";

}
function coordenadasFigura(event) {
    var x = event.clientX;
    var y = event.clientY;
    document.getElementById("demo3").innerHTML = "Coordenada x: " + x +"e coordenada Y: " + y;


}
function clearCoor() {
    document.getElementById("demo3").innerHTML = "";


}
