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
let decPlace;
let newResult;

function readFirstNumber() {
  firstnumber = parseFloat(document.querySelector("#firstnumber").value);
  console.log(firstnumber);
  //   making sure that all variables have a value
  if (firstnumber && secondnumber && operator != undefined) {
    calculate();
  }
}

function readSecondNumber() {
  secondnumber = parseFloat(document.querySelector("#secondnumber").value);
  console.log(secondnumber);
  //   making sure that all variables have a value
  if (firstnumber && secondnumber && operator != undefined) {
    calculate();
  }
}

function readOperator() {
  operator = document.querySelector("#operator").value;
  console.log(operator);
  //   making sure that all variables have a value
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

  if (document.querySelector("#doround").checked) {
    roundResult();
  } else {
    document.querySelector("#calculate").addEventListener("click", showResult);
  }
}

function roundResult() {
  decPlace = parseInt(document.querySelector("#decimals").value);
  //   rounding to correct number of decimal places
  if (result > 0) {
    newResult = parseFloat(result.toFixed(decPlace + 1));
  } else {
    newResult = result.toFixed(decPlace);
  }
  console.log(newResult);
  document.querySelector("#calculate").addEventListener("click", showResult);
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
