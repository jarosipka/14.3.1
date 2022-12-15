function calculate() {
  let firstNumber = document.getElementById("firstNumber").value;
  let secondNumber = document.getElementById("secondNumber").value;
  let operation = document.getElementById("operation").value;
  let result = document.getElementById("result").value;

  switch (operation) {
    case "add":
      result = parseInt(firstNumber) + parseInt(secondNumber);
      break;

    case "subtract":
      result = firstNumber - secondNumber;
      break;

    case "multiply":
      result = firstNumber * secondNumber;
      break;

    case "divide":
      result = firstNumber / secondNumber;
      break;
  }
  document.getElementById("result").value = result;

  if (localStorage.getItem("result") == null) {
    localStorage.setItem("result", []);
  }

  d.push(result);
  document.getElementById("results").value = "";
  for (i = 0; i < d.length; i++) {
    if (i > 4) {
      d.shift();
    }
    document.getElementById("results").value += d[i] + ",";
  }

  localStorage.setItem("result", JSON.stringify(d));
}

let d = [];
