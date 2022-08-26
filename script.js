start();

function start() {
  document.querySelector("#firstnumber").addEventListener("input", readFirstNumber);
  document.querySelector("#secondnumber").addEventListener("input", readSecondNumber);
  document.querySelector("#operator").addEventListener("change", readOperator);
  //   maybe if statement instead?
}

let firstnumber;
let secondnumber;
let operator;
let result;

function readFirstNumber() {
  firstnumber = parseFloat(document.querySelector("#firstnumber").value);
  console.log(firstnumber);
  if (firstnumber && secondnumber && operator != undefined) {
    calculate();
  }
}

function readSecondNumber() {
  secondnumber = parseFloat(document.querySelector("#secondnumber").value);
  console.log(secondnumber);
  if (firstnumber && secondnumber && operator != undefined) {
    calculate();
  }
}

function readOperator() {
  operator = document.querySelector("#operator").value;
  console.log(operator);
  if (firstnumber && secondnumber && operator != undefined) {
    calculate();
  }
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

  document.querySelector("#calculate").addEventListener("click", showResult);
}

function showResult() {
  let newLi = document.createElement("li", result);
  let seeResult = (newLi.textContent = result);
  document.querySelector("#results").appendChild(newLi);
  document.querySelector("#results li:first-child").remove();
}
