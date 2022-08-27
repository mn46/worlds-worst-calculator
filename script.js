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
}

function readFirstNumber() {
  firstnumber = parseFloat(document.querySelector("#firstnumber").value);
  console.log(firstnumber);
  //   making sure that all variables have a value
  // if (firstnumber && secondnumber && operator != undefined) {
  //   calculate();
  // }
  readSecondNumber();
}

function readSecondNumber() {
  secondnumber = parseFloat(document.querySelector("#secondnumber").value);
  console.log(secondnumber);
  //   making sure that all variables have a value
  // if (firstnumber && secondnumber && operator != undefined) {
  //   calculate();
  // }
  readOperator();
}

function readOperator() {
  operator = document.querySelector("#operator").value;
  console.log(operator);
  //   making sure that all variables have a value
  // if (firstnumber && secondnumber && operator != undefined) {
  //   calculate();
  // }
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
  //   rounding to correct number of decimal places
  newResult = result.toFixed(decPlace);
  console.log(decPlace);
  showResult();
}

function showResult() {
  let newLi = document.createElement("li");

  if (newResult) {
    newLi.textContent = newResult;
  } else {
    newLi.textContent = result;
  }

  document.querySelector("#results").appendChild(newLi);
  document.querySelector("#results li:first-child").remove();
}
