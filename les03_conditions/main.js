// Conditions

// if & else

let condition = true;
let conditionTwo = false;

if (condition) {
    // condition > altijd typecast naar boolean
    // enkel als conditie true is
} else if (conditionTwo) {
    // enkel als conditieTwo true is
} else {
    // enkel als alle condities false zijn
}

// string > boolean
//  - lege string > false
//  - niet lege string > true

if ('test') {
    console.log('test = true');
}

// number > boolean
//  - 0 > false
//  - andere numbers > true

if (0) {
    console.log('0 = false');
}

// equal > ==  ===

let valOne = '123';
let valTwo = 123;

console.log(valOne == valTwo); // > true
console.log(valOne === valTwo); // > false

// not equal > !=  !==

console.log(valOne != valTwo); // false
console.log(valOne !== valTwo); // true

// let test = true;
// console.log(!test);
// console.log(!!valTwo);

// greater than >
// greater or equal than >=

// lower than <
// lower or equal than <=

console.log(1 > 12);
console.log(12 > '1');
console.log(12 > 'test');

// combining condition

// AND  &&

console.log(1 < 2 && 1 < 3);
console.log(1 < 2 && 1 > 3);

// OR ||

console.log(1 < 2 || 1 < 3);
console.log(1 < 2 || 1 > 3);
console.log(1 > 2 || 1 > 3);

// Exercises
// ellipser('Korneel', 3) > 'Kor...'
// ellipser('Korneel', 10) > 'Korneel'
function ellipser(sentence, length) {
    if (sentence.length > length) {
        let shortSentence = sentence.substring(0, length);

        return shortSentence + '...';
    } else {
        return sentence;
    }
}

// prompt for name
// if long name (longer than 8 chars)
//  alert 'You have a long name'
// else
//  alert 'You have a short name'
function longNameOrNot() {
    let name = prompt('What is your name?');

    if (name.length > 8) {
        alert('You have a long name.');
    } else {
        alert('You have a short name.');
    }
}

function capitalize(text) {
    let firstLetter = text[0];
    let otherLetters = text.substring(1);

    return firstLetter.toUpperCase() + otherLetters.toLowerCase();
}

// isCapitalized('Korneel') > true
// isCapitalized('javaScript') > false
function isCapitalized(word) {
    let firstLetter = word[0];
    let otherLetters = word.substring(1);

    if (
        firstLetter === firstLetter.toUpperCase() &&
        otherLetters === otherLetters.toLowerCase()
    ) {
        return true;
    } else {
        return false;
    }

    // if (word === capitalize(word)) {
    //     return true;
    // } else  {
    //     return  false;
    // }

    // return (
    //     firstLetter === firstLetter.toUpperCase() &&
    //     otherLetters === otherLetters.toLowerCase()
    // );
    
    // return word === capitalize(word);
}
