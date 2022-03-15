const MaxNumber = 10;

// Generate Random Number between 0 and 10
let randomNumber = Math.floor(Math.random() * MaxNumber + 1);

// Prompt user for number
let guess = prompt(`Guess a number between 0 and ${MaxNumber}`);

// Check if chosen number is equal to random number
while (guess !== randomNumber) {
    guess = parseInt(prompt(`Guess a number between 0 and ${MaxNumber}`));
}

alert('You win');

// If not equal > prompt again
// Extra: hint if value is too low or too high
// else > alert 'You win'

// Extra: make sure the user can only guess 5 times
// if fifth guess is wrong > alert 'You lost, the number was [x]'

// Extra 2: validate guess
// if guess is not between 0 and 10 prompt for new number (this does not count as a guess)

// Extra 3: refactor code
