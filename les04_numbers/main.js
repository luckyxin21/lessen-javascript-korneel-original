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
function sum(numOne, numTwo) {
    // let result = numOne + numTwo;
    //
    // return result;

    return numOne + numTwo;
}

console.log(sum(4, 6));

// oddOrEven(3) > 'odd'
// oddOrEven(12) > 'even'
function oddOrEven(num) {
    // if (num % 2 === 0) {
    //     return 'even';
    // } else {
    //     return 'odd';
    // }

    if (num % 2 === 0) {
        return 'even';
    }

    return 'odd';
}

console.log(oddOrEven(14));
console.log(oddOrEven(7));

// isDivisible(12,4) > true
// isDivisible(12,5) > false
function isDivisible(num, divider) {
    // if (num % divider === 0) {
    //     return true;
    // } else {
    //     return false;
    // }

    // if (num % divider === 0) {
    //     return true;
    // }
    //
    // return false;

    return num % divider === 0;
}

console.log(isDivisible(12, 4));
console.log(isDivisible(12, 5));

// square(4) > 16
function square(num) {
    return num * num;

    // return Math.pow(num, 2);
}

console.log(square(4));

// min(12,13) > 12
// min(8,5) > 5
function min(numOne, numTwo) {
    // if (numOne < numTwo) {
    //     return numOne;
    // } else {
    //     return numTwo;
    // }

    if (numOne < numTwo) {
        return numOne;
    }

    return numTwo;

    // return Math.min(numOne, numTwo);
}

console.log(min(12, 13));
console.log(min(8, 5));
// max(4,88) > 88
function max(numOne, numTwo) {
    if (numOne > numTwo) {
        return numOne;
    }

    return numTwo;
}

console.log(max(4, 88));

// operator > 'min', 'plus', 'multiply', 'divide'
// calculate('min', 5, 3) > 2
// calculate('plus', 5, 3) > 8
// calculate('multiply', 5, 3) > 15
// calculate('divide', 6, 3) > 2

function calculate(operator, numOne, numTwo) {
    // if (operator === 'min') {
    //     return numOne - numTwo;
    // }
    //
    // if (operator === 'plus') {
    //     return numOne + numTwo;
    // }
    //
    // if (operator === 'multiply') {
    //     return numOne * numTwo;
    // }
    //
    // if (operator === 'divide') {
    //     return numOne / numTwo;
    // }

    // if (operator === 'min') {
    //     return numOne - numTwo;
    // } else if (operator === 'plus') {
    //     return numOne + numTwo;
    // } else if (operator === 'multiply') {
    //     return numOne * numTwo;
    // } else if (operator === 'divide') {
    //     return numOne / numTwo;
    // }

    switch (operator) {
        case 'min':
            return numOne - numTwo;
        case 'plus':
            return numOne + numTwo;
        case 'multiply':
            return numOne * numTwo;
        case 'divide':
            return numOne / numTwo;
        default:
            console.error('Wrong operator');
    }
}

console.log(calculate('min', 5, 3));
console.log(calculate('plus', 5, 3));
console.log(calculate('multiply', 5, 3));
console.log(calculate('divide', 6, 3));
console.log(calculate('dividee', 6, 3));
