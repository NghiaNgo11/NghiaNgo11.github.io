function calculate(operation) {
  const a = document.getElementById("a_value").value;
  const b = document.getElementById("b_value").value;
  const resultEquation = document.getElementById("results");
  resultEquation.innerHTML = "";

  if (a === "" || b === "") {
    resultEquation.innerHTML = "Please enter both numbers.";
    return;
  }

  const a1 = parseFloat(a);
  const b1 = parseFloat(b);

  if (isNaN(a1) || isNaN(b1)) {
    resultEquation.innerHTML = "Please enter valid numbers.";
    return;
  }

  let result;
  switch (operation) {
    case "add":
      result = a1 + b1;
      break;
    case "subtract":
      result = a1 - b1;
      break;
    case "multiply":
      result = a1 * b1;
      break;
    case "divide":
      if (b1 === 0) {
        resultEquation.innerHTML = "Can not divide by 0";
        return;
      }
      result = a1 / b1;
      break;
    default:
      resultEquation.innerHTML = "Invalid operation";
      return;
  }
  resultEquation.innerHTML = `Result: ${result}`;
}
