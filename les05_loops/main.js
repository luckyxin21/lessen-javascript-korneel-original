// Loops

// For

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// While
// let i = 0;
//
// while (i <= 10) {
//     console.log(i);
//
//     i++;
// }

// Do While
// let j = 0;
//
// do {
//     console.log(j);
//
//     j++;
// } while (i <= 10);

// sumUntil(4) > 10
// sumUntil(6) > 21
function sumUntil(num) {
    let sum = 0;

    for (let i = 1; i <= num; i++) {
        sum += i;

        // sum = sum + i;
    }

    return sum;
}

// console.log(sumUntil(70));

// countWords('United suns, to the holodeck.') > 5
// Geen .split()
function countWords(text) {
    let count = 0;

    for (let i = 0; i < text.length; i++) {
        if (i === 0 && text[i] !== ' ') {
            count++;
        } else if (
            text[i] === ' ' &&
            text[i + 1] !== ' ' &&
            text[i + 1] !== ',' &&
            text[i + 1] !== '.' &&
            text[i + 1] !== '!' &&
            text[i + 1] !== '?' &&
            i !== text.length - 1
        ) {
            count++;

            // count += 1;
            // count = count + 1;
        }
    }

    return count;
}

console.log(countWords('United suns, to the holodeck.')); // > 5
console.log(
    countWords(
        'When one traps bliss and joy, one is able to facilitate totality.',
    ),
); // > 12
console.log(countWords('Captains are the bung holes of the salty madness.')); // > 9
console.log(countWords(' Captains are the bung holes of the salty madness.')); // > 9
console.log(
    countWords(' Captains are the bung    holes of the salty madness.'),
); // > 9
console.log(
    countWords(' Captains are the bung    holes of the salty madness . '),
); // > 9

// firstLetterOfEachWord(' Roasted   melon  can be made aromatic by decorating with chicory sauce.') > 'Rmcbmabdwcs'
// Geen .split()
function firstLetters(text) {
    let letters = '';

    for (let i = 0; i < text.length; i++) {
        if (i === 0 && text[i] !== ' ') {
            letters += text[i];
        } else if (
            text[i] === ' ' &&
            text[i + 1] !== ' ' &&
            text[i + 1] !== ',' &&
            text[i + 1] !== '.' &&
            text[i + 1] !== '!' &&
            text[i + 1] !== '?' &&
            i !== text.length - 1
        ) {
            letters += text[i + 1];

            // count += 1;
            // count = count + 1;
        }
    }

    return letters;
}

console.log(firstLetters('United suns, to the holodeck.')); // > 5
console.log(
    firstLetters(
        'When one traps bliss and joy, one is able to facilitate totality.',
    ),
); // > 12
console.log(firstLetters('Captains are the bung holes of the salty madness.')); // > 9
console.log(firstLetters(' Captains are the bung holes of the salty madness.')); // > 9
console.log(
    firstLetters(' Captains are the bung    holes of the salty madness.'),
); // > 9
console.log(
    firstLetters(' Captains are the bung    holes of the salty madness . '),
); // > 9
