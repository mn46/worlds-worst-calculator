// variables

let firstnumber;
let secondnumber;
let operator;
let result;
let decPlace;
let newResult;

start();

function start() {
  document.querySelector("#calculate").addEventListener("click", readFirstNumber);
  document.querySelector("#clear").addEventListener("click", clearResults);
}

function clearResults() {
  document.querySelectorAll("#results li").forEach((li) => {
    li.textContent = "";
  });
}

function readFirstNumber() {
  firstnumber = parseFloat(document.querySelector("#firstnumber").value);
  console.log(firstnumber);
  readSecondNumber();
}

function readSecondNumber() {
  secondnumber = parseFloat(document.querySelector("#secondnumber").value);
  console.log(secondnumber);
  readOperator();
}

function readOperator() {
  operator = document.querySelector("#operator").value;
  console.log(operator);
  calculate();
}

function calculate() {
  if (operator === "add") {
    result = firstnumber + secondnumber;
  } else if (operator === "sub") {
    result = firstnumber - secondnumber;
  } else if (operator === "mul") {
    result = firstnumber * secondnumber;
  } else if (operator === "div") {
    result = firstnumber / secondnumber;
  }

  console.log(result);

  if (document.querySelector("#doround").checked) {
    roundResult();
    console.log("round");
  } else {
    showResult();
  }
}

function roundResult() {
  decPlace = parseInt(document.querySelector("#decimals").value);
  newResult = result.toFixed(decPlace);
  console.log(decPlace);
  showResult();
}

function showResult() {
  let newLi = document.createElement("li");

  if (newResult) {
    newLi.textContent = newResult;
    document.querySelector("#firstnumber").value = newResult;
  } else {
    newLi.textContent = result;
    document.querySelector("#firstnumber").value = result;
  }

  document.querySelector("#results").appendChild(newLi);
  document.querySelector("#results").scrollTop = document.querySelector("#results").scrollHeight;
}
