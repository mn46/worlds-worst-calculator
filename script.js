start();

function start() {
  document.querySelector("#firstnumber").addEventListener("input", readFirstNumber);
}

let firstnumber;
let secondnumber;

function readFirstNumber() {
  firstnumber = parseInt(document.querySelector("#firstnumber").value);
  console.log(firstnumber);
  //   readSecondNumber();
}

// function readSecondNumber() {
//     // function
//     readOperator()
// }

// function readOperator() {
//     // function
//     calculate()
// }

// function calculate(firstnumber, secondnumber) {

// }
