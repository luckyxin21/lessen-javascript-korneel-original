// Arrays

// initialize

let anArray = [];
let otherArray = new Array();

anArray = [1, 2, 3, 4, 5];
otherArray = new Array(1, 2, 3, 4, 5);

console.log(anArray);
console.log(otherArray);

// by reference

let newArray = [1, 2, 3, 4, 5, 6];
let sameNewArray = newArray;

sameNewArray[3] = 88;

let copyArray = [];

for (let i = 0; i < sameNewArray.length; i++) {
    copyArray[i] = newArray[i];
}

sameNewArray[2] = 500;
copyArray[2] = 500;

console.log(newArray);
console.log(sameNewArray);
console.log(copyArray);

// compare

console.log(newArray === copyArray);
console.log(newArray === sameNewArray);

// METHODS + PROPS

// .length
newArray[200] = 1;

console.log(newArray);
console.log(newArray.length);

// push() / pop() en shift() / unshift()

copyArray.push(55); // add item at end of array
newArray.pop(); // remove item at end of array

console.log(copyArray);

copyArray.shift(); // remove item at start of array
copyArray.unshift(12); // add item at start of array

console.log(copyArray);

// .join() en .split()

let stringArray = ['Ik', 'ben', 'een', 'Frontend', 'developer'];
console.log(stringArray.join(' '));

let aString =
    'Going to the state of samadhi doesn’t gain satori anymore than believing creates parallel resurrection.';
console.log(aString.split(' '));
console.log(aString.split(''));

// .slice()  en .splice()

anArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(anArray.slice(2, 5)); // [3,4,5]
console.log(anArray.slice(5)); // [6,7,8,9]

let removedArray = anArray.splice(2, 0, 55, 66, 77, 88, 99);

console.log(removedArray);
console.log(anArray);

// .concat()

let arrOne = [1, 2, 3];
let arrTwo = [4, 5, 6];
let arrThree = [7, 8, 9];

let concatArr = arrOne.concat(arrTwo, arrThree);
let testArr = arrOne + arrTwo; // not the same
console.log(arrOne);
console.log(arrTwo);
console.log(concatArr);
console.log(testArr);

// .indexOf() / .lastIndexOf() / .includes()

let searchArr = [6, 3, 88, 12, 44, 2, 12, 99, 12];

console.log(searchArr.indexOf(12));
console.log(searchArr.indexOf(123));

console.log(searchArr.lastIndexOf(12));
console.log(searchArr.lastIndexOf(123));

let found = true;
let foundIndexes = [];
let startIndex = 0;

while (found) {
    let foundIndex = searchArr.indexOf(12, startIndex);

    if (foundIndex > -1) {
        foundIndexes.push(foundIndex);
        startIndex = foundIndex + 1;
    } else {
        found = false;
    }
}

console.log(foundIndexes);

console.log(searchArr.includes(88));
console.log(searchArr.includes(888));

// Random number:

let randomNumber = Math.floor(Math.random() * 11); // random getal tussen 0 en 10

console.log(randomNumber);
