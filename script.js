start();

function start() {
  document.querySelector("#firstnumber").addEventListener("input", readFirstNumber);
  document.querySelector("#secondnumber").addEventListener("input", readSecondNumber);
  document.querySelector("#operator").addEventListener("change", readOperator);
}

let firstnumber;
let secondnumber;
let operator;

function readFirstNumber() {
  firstnumber = parseInt(document.querySelector("#firstnumber").value);
  console.log(firstnumber);
}

function readSecondNumber() {
  secondnumber = parseInt(document.querySelector("#secondnumber").value);
  console.log(secondnumber);
}

function readOperator() {
  operator = document.querySelector("#operator").value;
  console.log(operator);
}

// function calculate(firstnumber, secondnumber) {

// }
