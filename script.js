start();

function start() {
  document.querySelector("#firstnumber").addEventListener("input", readFirstNumber);
  document.querySelector("#secondnumber").addEventListener("input", readSecondNumber);
}

let firstnumber;
let secondnumber;

function readFirstNumber() {
  firstnumber = parseInt(document.querySelector("#firstnumber").value);
  console.log(firstnumber);
}

function readSecondNumber() {
  secondnumber = parseInt(document.querySelector("#secondnumber").value);
  console.log(secondnumber);
}

// function readOperator() {
//     // function
//     calculate()
// }

// function calculate(firstnumber, secondnumber) {

// }
