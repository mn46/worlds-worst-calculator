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
}

function readSecondNumber() {
  secondnumber = parseFloat(document.querySelector("#secondnumber").value);
  console.log(secondnumber);
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

  document.querySelector("#calculate").addEventListener("click", showResult);
}

function showResult() {
  let newLi = document.createElement("li");
  let seeResult = newLi.appendChild(document.createTextNode(result));
  document.querySelector("#results").appendChild(seeResult);
}
