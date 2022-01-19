// Primitive types

// strings
let aString = 'tekst';
// numbers
let aNumber = 44;
let someNumber = 4.4;
let bigNumber = Infinity;
let notANumber = NaN;
// boolean
let aBool = true;
let otherBool = false;
// undefined
let someUndefined = undefined;
let otherUndefined;
console.log(otherUndefined);
// null
let aNull = null;

// Variables

let someVar = 'test';
const someConst = 'test';
// var otherVar = 'test';

// Functions

function aFunction(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
    return 'Hello ' + name + ' ' + lastName;
}

aFunction('Korneel', 'Eeckhout');
aFunction('Sigrid', 'Lievens');

// alert(), prompt(), confirm()

// alert('Hello everybody');

// let promptVal = prompt('How are you?');
// console.log(promptVal);

// let confirmVal = confirm('Is JavaScript cool?');
// console.log(confirmVal);

// let name = prompt('What is your name?');
//
// alert('Hello ' + name);

let someId = 'test 1';

console.log(someId);

// function someId() {}

function someFunction(someId) {
    console.log(someId);
}

someFunction('test 2');

console.log(someId);

// Strings

let newString = 'Hier staat tekst';
let otherNewString = 'Hier ook';

// let anObject = {
//     test: 'Something',
//     test2: 'More things',
//     test3: function () {
//         console.log('object test3');
//     },
//     test4() {
//         console.log('object test4');
//     },
// };

// .length
console.log(newString.length);

// .toUpperCase() | .toLowerCase()
console.log(newString.toUpperCase());
console.log(newString.toLowerCase());

// charAt | [i]
console.log(newString[1]);
console.log(newString.charAt(1));

// .substring(start, end)

console.log(newString.substring(5, 10));
console.log(newString.substring(11));

// concatenation
let concatString = newString + ' ' + otherNewString;
console.log(concatString);

newString += '.';
// newString = newString + '.';
console.log(newString);

// Template strings

let templateString = `
  <div>
    <p>
      ${newString}
    </p>
  </div>
`;

console.log(templateString);

let templateAlt = '<div><p>' + newString + '</p></div>';

// Exercises

// prompt firstName > prompt lastName > alert 'Hello ' + firstName + lastName
function helloFullNamePrompt() {}

// 'korneel' -> 'Korneel'
// 'javaScript' -> 'Javascript'
function capitalize(text) {}

capitalize('korneel'); // 'Korneel'

// prompt firstName > prompt lastName > alert 'Hello ' + firstName + lastName
// make sure firstName and lastName are capitalized
function helloFullNamePromptCapitalized() {}

// 'Korneel' -> 'orneelK'
function firstLast(word) {}

// 'Korneel' -> 'lKornee'
function lastFirst(word) {}

// 'Korneel' -> 'lorneeK'
function lastFirstLast(word) {}

// 'Korneel', 5 -> 'Korne...'
// 'Brave lieutenant commanders, to the radiation dome.', 10 -> 'Brave lieu...'
// 'Korneel', 10 -> 'Korneel...'
function ellipser(sentence, length) {}
