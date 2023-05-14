function addToResult(value) {
  let inputField = document.getElementById("result");
  let currentResult = inputField.value;
  let operatorsButtons = document.getElementsByClassName("operator__btn");

  if (inputField.value.length === 0) {
    for (let i = 0; i < operatorsButtons.length; i++) {
      operatorsButtons[i].disabled = false;
    }
  }
  if (currentResult === "") {
    inputField.value = value;
  } else {
    inputField.value += value;
  }
}
function calculateResult() {
  let result = document.getElementById("result").value;
  result = result.replace(/--/g, "+");
  let calculatedResult = eval(result);
  document.getElementById("result").value = calculatedResult;
}

function clearResult() {
  document.getElementById("result").value = "";
  let inputField = document.getElementById("result");

  let operatorsButtons = document.getElementsByClassName("operator__btn");
  if (inputField.value.length === 0) {
    for (let i = 0; i < operatorsButtons.length; i++) {
      operatorsButtons[i].disabled = true;
    }
  }
}
