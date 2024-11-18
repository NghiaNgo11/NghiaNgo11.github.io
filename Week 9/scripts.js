function calculate() {
  var a = document.getElementById("a_value").value;
  if (a == NaN) {
    print("Chua nhap so");
  }
  var result = parseInt(a) * 2;
  document.getElementById("result").innerHTML = "Result: " + result;
}
