// Objects

let newObject = new Object();
let otherObject = {};

let filledObject = {
    name: 'Korneel',
    age: 30,
    'full name': 'Korneel Eeckhout',
    timeLeft() {
        return 100 - this.age;
    },
    44: 'test',
    12: 'test',
    33: 'test',
    29: 'test',
    48: 'test',
};

let ageKey = 'age';

// get value
console.log(filledObject.name);
console.log(filledObject['full name']);
console.log(filledObject[ageKey]);

// set value
otherObject.count = 4;

// delete key + value
delete otherObject.count;

// computed properties

let newKey = prompt('Choose a key for this object?');

let latestObject = {
    [newKey]: 'test123',
};

console.log(latestObject);

// test if key (property) exists

console.log('name' in filledObject);
filledObject.age = undefined;
console.log('age' in filledObject);
delete filledObject.age;
console.log('age' in filledObject);

for (let key in filledObject) {
    console.log(key);
    console.log(filledObject[key]);
}

// Object references

let objOne = {
    1: 'test1',
    2: 'test2',
    3: 'test3',
};

let objTwo = objOne;

console.log({ objOne, objTwo });
// console.log({ objOne: objOne, objTwo: objTwo }); // same as previous
objTwo.test4 = 'test4';
objTwo['3'] = 55;

let objThree = { 1: 'test1', 2: 'test2', 3: 55, test4: 'test4' };

console.log({ objOne, objTwo });

console.log(objOne === objTwo);
console.log(objOne === objThree);

// Get array of keys
console.log(Object.keys(objOne));
console.log(Object.values(objOne));

let aString = 'test';

aString.length;
