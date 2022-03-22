const MaxNumber = 10;
const MaxGuesses = 4;

let guessCount = 0;

function askForGuess(question) {
    let guess = parseInt(prompt(question));

    while (!(guess >= 0 && guess <= MaxNumber)) {
        guess = parseInt(
            prompt(`Invalid input, guess a number between 0 and ${MaxNumber}`),
        );
    }

    return guess;
}

// Generate Random Number between 0 and 10
let randomNumber = Math.floor(Math.random() * MaxNumber + 1);

// Prompt user for number
let guess = askForGuess(`Guess a number between 0 and ${MaxNumber}`);

guessCount++;

// Check if chosen number is equal to random number
while (guess !== randomNumber && guessCount < MaxGuesses) {
    if (guess < randomNumber) {
        guess = askForGuess('Too low, try again.');
    } else {
        guess = askForGuess(`Too high, try again.`);
    }

    guessCount++;
}

if (guess === randomNumber) {
    alert('You win');
} else {
    alert(`You lost, the correct number was ${randomNumber}`);
}
