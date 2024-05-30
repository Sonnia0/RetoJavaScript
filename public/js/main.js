function calculate() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let result = (num1 / 100) * num2;
    document.getElementById("result").innerHTML = "Resultado: " + result;
}