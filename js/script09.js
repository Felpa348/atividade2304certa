function converter() {
    var horas = parseFloat(document.getElementById("horas").value);
    if (isNaN(horas) || horas < 0) {
        alert("Por favor, insira um número válido de horas.");
        return;
    }
    var minutos = horas * 60;
    var segundos = horas * 3600;
    document.getElementById("resultado").innerHTML = 
        horas + " horas equivalem a " + minutos + " minutos ou " + segundos + " segundos.";
}
