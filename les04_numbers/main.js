// Numbers

let aNumber = 12;
let otherNumber = 14.56;

// Arithmetic operators

// + - * / %

let aSum = 12 + 12;
console.log(aSum);

let aMin = 8 - 4;
console.log(aMin);

let multiply = 4 * 5;
console.log(multiply);

let divide = 20 / 4;
console.log(divide);

let modulo = 21 % 5;
console.log(modulo);

// toString

console.log(aNumber.toString());

// parseInt

let aNumberString = '123';

console.log(parseInt(aNumberString));

// parseFloat

let aFloatString = '12.85';

console.log(parseInt(aFloatString));
console.log(parseFloat(aFloatString));
console.log(parseFloat('12,85'));

// Infinity

console.log(Infinity);
console.log(-12 / 0);

// NaN

console.log(parseInt('test'));

console.log(Number.isNaN(parseInt('12')));
console.log(Number.isNaN(parseInt('test12')));

//sum(4,6) > 10
function sum(numOne, numTwo) {}

// oddOrEven(3) > 'odd'
// oddOrEven(12) > 'even'
function oddOrEven(num) {}

// isDivisible(12,4) > true
// isDivisible(12,5) > false
function isDivisible(num, divider) {}

// square(4) > 16
function square(num) {}

// min(12,13) > 12
// min(8,5) > 5
function min(numOne, numTwo) {}

// max(4,88) > 88
function max(numOne, numTwo) {}

// operator > 'min', 'plus', 'multiply', 'divide'
// calculate('min', 5, 3) > 2
// calculate('plus', 5, 3) > 8
// calculate('multiply', 5, 3) > 15
// calculate('divide', 6, 3) > 2

function calculate(operator, numOne, numTwo) {}
