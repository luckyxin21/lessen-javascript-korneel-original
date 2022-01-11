console.log('Hello World from main.js');

// Schrijf een functie die:
// - in de console telt van 0 naar 10

function countToTen() {
  for (let i = 0; i <= 10; i++) {
    console.log(i);
  }
}

countToTen();

// Schrijf een functie die:
// - twee parameters met elkaar optelt

function sum(a,b) {
  let result = a + b;
  console.log(result);
}

sum(5,3);


// Primitive Data Types:
// String

let aString = 'tekst';
let otherString = "meer tekst";
let moreString = `nog meer tekst`;

// Booleans

let aBool = true;
let otherBool = false;

// Numbers

let aNumber = 55;
let otherNumber = 55.4;
let notANumber = NaN;  // parseInt('test') > NaN
let infiniteNumber = Infinity;

// Undefined

let anUndefined = undefined;
let otherundefined;

console.log(otherundefined);

// Null
let aNull = null;
